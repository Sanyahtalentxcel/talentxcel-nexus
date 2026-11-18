/**
 * TalentXcel Growth Tracking & Attribution Operating System
 * Client-side multi-touch attribution, UTM parameter capture, and ecosystem referral routing.
 * Compliant with DPDP Act 2023 (Zero PII logging, local session-bounded attribution).
 */

export interface GrowthAttribution {
  source: string;
  medium: string;
  campaign?: string;
  content?: string;
  term?: string;
  landingPage: string;
  referrer: string;
  timestamp: string;
}

export interface OutboundReferralEvent {
  id: string;
  destination: "talentxcel.in" | "talentxcel.net" | "chatr.chat" | "other";
  url: string;
  context: string;
  timestamp: string;
  sourcePage: string;
}

const ATTRIBUTION_SESSION_KEY = "tx_growth_session_attribution";
const FIRST_TOUCH_KEY = "tx_growth_first_touch";
const OUTBOUND_REFERRAL_LOG_KEY = "tx_outbound_referrals";

class GrowthTrackingService {
  private currentAttribution: GrowthAttribution | null = null;

  constructor() {
    if (typeof window !== "undefined") {
      this.initAttribution();
    }
  }

  /**
   * Initializes attribution by reading current URL query parameters and document.referrer.
   */
  public initAttribution(): GrowthAttribution {
    if (typeof window === "undefined") {
      return this.getDefaultAttribution();
    }

    try {
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get("utm_source");
      const utmMedium = urlParams.get("utm_medium");
      const utmCampaign = urlParams.get("utm_campaign") || undefined;
      const utmContent = urlParams.get("utm_content") || undefined;
      const utmTerm = urlParams.get("utm_term") || undefined;

      const rawReferrer = document.referrer || "";
      let derivedSource = utmSource;
      let derivedMedium = utmMedium;

      if (!derivedSource) {
        if (!rawReferrer) {
          derivedSource = "direct";
          derivedMedium = "none";
        } else if (rawReferrer.includes("google.")) {
          derivedSource = "google";
          derivedMedium = "organic";
        } else if (rawReferrer.includes("linkedin.")) {
          derivedSource = "linkedin";
          derivedMedium = "social";
        } else if (rawReferrer.includes("twitter.") || rawReferrer.includes("x.com")) {
          derivedSource = "x";
          derivedMedium = "social";
        } else if (rawReferrer.includes("facebook.") || rawReferrer.includes("instagram.")) {
          derivedSource = "meta";
          derivedMedium = "social";
        } else if (rawReferrer.includes("talentxcel.in") || rawReferrer.includes("talentxcel.net")) {
          derivedSource = "ecosystem";
          derivedMedium = "internal_referral";
        } else {
          try {
            const refUrl = new URL(rawReferrer);
            derivedSource = refUrl.hostname;
            derivedMedium = "referral";
          } catch {
            derivedSource = "referral";
            derivedMedium = "unknown";
          }
        }
      }

      const attribution: GrowthAttribution = {
        source: derivedSource || "direct",
        medium: derivedMedium || "none",
        campaign: utmCampaign,
        content: utmContent,
        term: utmTerm,
        landingPage: window.location.pathname,
        referrer: rawReferrer,
        timestamp: new Date().toISOString()
      };

      this.currentAttribution = attribution;

      // Persist in session storage for multi-page session continuity
      sessionStorage.setItem(ATTRIBUTION_SESSION_KEY, JSON.stringify(attribution));

      // Record first touch if not already recorded
      if (!localStorage.getItem(FIRST_TOUCH_KEY)) {
        localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(attribution));
      }

      return attribution;
    } catch {
      return this.getDefaultAttribution();
    }
  }

  /**
   * Retrieves active session attribution data.
   */
  public getAttribution(): GrowthAttribution {
    if (this.currentAttribution) {
      return this.currentAttribution;
    }

    if (typeof window !== "undefined") {
      try {
        const stored = sessionStorage.getItem(ATTRIBUTION_SESSION_KEY);
        if (stored) {
          this.currentAttribution = JSON.parse(stored);
          return this.currentAttribution!;
        }
      } catch {
        // Fall back to default
      }
    }

    return this.getDefaultAttribution();
  }

  /**
   * Generates a context-tagged outbound URL for ecosystem partners.
   */
  public buildEcosystemUrl(
    baseUrl: string,
    contextCampaign: string,
    contentTag?: string
  ): string {
    try {
      const url = new URL(baseUrl);
      url.searchParams.set("utm_source", "talentxcel_corp");
      url.searchParams.set("utm_medium", "ecosystem_referral");
      url.searchParams.set("utm_campaign", contextCampaign);
      if (contentTag) {
        url.searchParams.set("utm_content", contentTag);
      }
      return url.toString();
    } catch {
      return baseUrl;
    }
  }

  /**
   * Logs an outbound referral to an ecosystem entity (talentxcel.in, talentxcel.net, chatr.chat).
   */
  public logOutboundReferral(
    destination: "talentxcel.in" | "talentxcel.net" | "chatr.chat" | "other",
    url: string,
    context: string
  ): void {
    if (typeof window === "undefined") return;

    try {
      const event: OutboundReferralEvent = {
        id: `ref_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        destination,
        url,
        context,
        timestamp: new Date().toISOString(),
        sourcePage: window.location.pathname
      };

      const existingRaw = localStorage.getItem(OUTBOUND_REFERRAL_LOG_KEY);
      const existing: OutboundReferralEvent[] = existingRaw ? JSON.parse(existingRaw) : [];
      existing.unshift(event);

      // Keep recent 200 referral events
      localStorage.setItem(OUTBOUND_REFERRAL_LOG_KEY, JSON.stringify(existing.slice(0, 200)));
    } catch (err) {
      console.warn("Could not log outbound referral:", err);
    }
  }

  /**
   * Gets logged outbound referrals for the Growth OS dashboard.
   */
  public getOutboundReferrals(): OutboundReferralEvent[] {
    if (typeof window === "undefined") return [];

    try {
      const raw = localStorage.getItem(OUTBOUND_REFERRAL_LOG_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  private getDefaultAttribution(): GrowthAttribution {
    return {
      source: "direct",
      medium: "none",
      landingPage: "/",
      referrer: "",
      timestamp: new Date().toISOString()
    };
  }
}

export const growthTracking = new GrowthTrackingService();
