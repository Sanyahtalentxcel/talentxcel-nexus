export interface DiagnosticQuestion {
  id: string;
  question: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    score: number;
    hoursSavedFactor: number;
  }[];
}

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: "team_size",
    question: "1. What is the size of your engineering and technical workforce?",
    subtitle: "Determines company-wide productivity multiplier and training cohort structures.",
    options: [
      { label: "10 to 50 Engineers", description: "Agile product teams or specialized engineering units", score: 10, hoursSavedFactor: 1.0 },
      { label: "50 to 200 Engineers", description: "Scaling enterprise technology division or high-growth tech firm", score: 20, hoursSavedFactor: 1.15 },
      { label: "200 to 1,000 Engineers", description: "Global capability center (GCC) or mature enterprise software practice", score: 30, hoursSavedFactor: 1.3 },
      { label: "1,000+ Engineers", description: "Large-scale multinational IT consulting or systems integrator", score: 40, hoursSavedFactor: 1.45 },
    ],
  },
  {
    id: "ai_maturity",
    question: "2. How is Generative AI currently utilized across your development lifecycle?",
    subtitle: "Establishes baseline adoption and identifies immediate upskilling opportunities.",
    options: [
      { label: "Ad-hoc / Restricted", description: "No official company tooling; developers occasionally use personal assistants", score: 5, hoursSavedFactor: 1.5 },
      { label: "Basic Code Autocomplete", description: "Piloting GitHub Copilot or cursor for line-by-line code completion only", score: 15, hoursSavedFactor: 2.5 },
      { label: "Prompted Workflow Automation", description: "Teams actively write automated unit tests, boilerplate, and PR summaries using AI", score: 25, hoursSavedFactor: 3.8 },
      { label: "Custom Domain RAG & Agentic Pipelines", description: "Internal proprietary LLMs, private vector search, and automated CI agents in production", score: 35, hoursSavedFactor: 5.2 },
    ],
  },
  {
    id: "primary_bottleneck",
    question: "3. What is your team's single largest sprint delivery bottleneck?",
    subtitle: "Helps target specific ROI levers in the custom corporate training curriculum.",
    options: [
      { label: "Unit Test & Automated QA Coverage", description: "Writing end-to-end regression tests and edge cases slows down release velocity", score: 15, hoursSavedFactor: 1.2 },
      { label: "Legacy Code Refactoring & Modernization", description: "Deciphering and updating older Java/.NET/monolithic codebases consumes senior hours", score: 20, hoursSavedFactor: 1.35 },
      { label: "PR Review Cycles & Architectural Governance", description: "Code reviews take 3-5 days; junior code requires excessive senior back-and-forth", score: 15, hoursSavedFactor: 1.25 },
      { label: "Internal Architecture Knowledge Retrieval", description: "Engineers spend 20% of their week asking 'where is this API defined?'", score: 25, hoursSavedFactor: 1.4 },
    ],
  },
  {
    id: "security_governance",
    question: "4. What is your enterprise data privacy and IP governance requirement?",
    subtitle: "Defines architecture constraints for internal models and zero-data-retention training.",
    options: [
      { label: "Strict Private VPC / On-Premise Only", description: "Zero third-party cloud data egress allowed; BFSI/Defense regulatory compliance", score: 30, hoursSavedFactor: 1.0 },
      { label: "Enterprise Zero Data Retention (ZDR)", description: "Commercial enterprise APIs permitted with signed business associate / ZDR agreements", score: 20, hoursSavedFactor: 1.1 },
      { label: "Standard Commercial Cloud APIs", description: "Flexible cloud model integration (Azure OpenAI, AWS Bedrock, Google Vertex AI)", score: 10, hoursSavedFactor: 1.2 },
    ],
  },
  {
    id: "2027_priority",
    question: "5. What is your primary workforce transformation priority for 2026–2027?",
    subtitle: "Aligns your outcome with TalentXcel's integrated corporate solutions.",
    options: [
      { label: "Upskill Existing Workforce in Generative AI", description: "2-Day intensive practitioner bootcamps to elevate team productivity by 25%", score: 25, hoursSavedFactor: 1.3 },
      { label: "Deploy Pre-Vetted Dedicated AI Pods (72-Hr SLA)", description: "Augment engineering capacity immediately with benchmarked, pre-screened talent", score: 30, hoursSavedFactor: 1.4 },
      { label: "Both: Upskill Current Staff + Augment with Pods", description: "Comprehensive dual-track workforce transformation and velocity scaling", score: 35, hoursSavedFactor: 1.5 },
    ],
  },
];

export interface DiagnosticResult {
  totalScore: number;
  maturityTier: "Level 1: AI Novice" | "Level 2: Emerging Adopter" | "Level 3: Strategic Practitioner" | "Level 4: Frontier AI Enterprise";
  summary: string;
  hoursSavedPerDevPerWeek: number;
  totalWeeklyHoursSaved: number;
  estimatedAnnualSavingsInr: number;
  recommendedBootcampTrack: string;
  keyActionItems: string[];
}

export function calculateDiagnosticResult(answers: Record<string, number>, teamSizeOptionIndex: number): DiagnosticResult {
  const scores = Object.values(answers);
  const totalScore = scores.reduce((a, b) => a + b, 0);

  // Approximate headcount for calculations
  const headcounts = [30, 100, 450, 1500];
  const headcount = headcounts[teamSizeOptionIndex] ?? 50;

  // Average blended tech salary per developer ~ ₹16 LPA (₹800/hr based on 2,000 hrs/yr)
  const hourlyDevCostInr = 800;

  let maturityTier: DiagnosticResult["maturityTier"] = "Level 1: AI Novice";
  let summary = "";
  let baseHoursSavedPerWeek = 3.5;
  let recommendedBootcampTrack = "Enterprise Generative AI Foundation & Workplace Productivity";

  if (totalScore <= 50) {
    maturityTier = "Level 1: AI Novice";
    summary = "Your organization has substantial untapped productivity potential. Transitioning from ad-hoc usage to standardized enterprise prompt engineering and secure AI tooling will produce immediate 15–20% sprint acceleration.";
    baseHoursSavedPerWeek = 4.2;
    recommendedBootcampTrack = "Generative AI Foundations & Safe Enterprise Prompting (2-Day Bootcamp)";
  } else if (totalScore <= 80) {
    maturityTier = "Level 2: Emerging Adopter";
    summary = "Your engineering team is familiar with basic autocomplete assistants, but lacks systematic RAG workflows, automated test generation, and standardized security governance.";
    baseHoursSavedPerWeek = 5.0;
    recommendedBootcampTrack = "Advanced LLM Integration, Automated Testing & Enterprise RAG (2-Day Bootcamp)";
  } else if (totalScore <= 115) {
    maturityTier = "Level 3: Strategic Practitioner";
    summary = "Your team has strong technical awareness. The next growth frontier is autonomous multi-agent pipelines, private model fine-tuning, and zero-latency internal knowledge search.";
    baseHoursSavedPerWeek = 6.2;
    recommendedBootcampTrack = "Production RAG, Vector Search & Fine-Tuned Model Deployment";
  } else {
    maturityTier = "Level 4: Frontier AI Enterprise";
    summary = "Your organization is positioned at the top 5% of enterprise AI maturity. Focus should be on dedicated specialized AI pods, continuous model benchmarking, and autonomous SDLC workflows.";
    baseHoursSavedPerWeek = 7.5;
    recommendedBootcampTrack = "Autonomous Agentic Systems & Dedicated Pod Architecture";
  }

  const hoursSavedPerDevPerWeek = Number(baseHoursSavedPerWeek.toFixed(1));
  const totalWeeklyHoursSaved = Math.round(hoursSavedPerDevPerWeek * headcount);
  const annualWorkWeeks = 48;
  const estimatedAnnualSavingsInr = Math.round(totalWeeklyHoursSaved * annualWorkWeeks * hourlyDevCostInr);

  const keyActionItems = [
    `Establish formal enterprise AI governance with zero data retention policies.`,
    `Mandate practitioner-led prompt engineering and test generation training across all ${headcount} engineers.`,
    `Deploy internal semantic code search to cut PR review and onboarding latency by 40%.`,
    `Evaluate 72-hour dedicated pod deployment to accelerate core 2027 product milestones.`,
  ];

  return {
    totalScore,
    maturityTier,
    summary,
    hoursSavedPerDevPerWeek,
    totalWeeklyHoursSaved,
    estimatedAnnualSavingsInr,
    recommendedBootcampTrack,
    keyActionItems,
  };
}
