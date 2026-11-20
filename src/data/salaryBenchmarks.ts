export interface RoleSalaryData {
  id: string;
  title: string;
  category: string;
  iconName: string;
  description: string;
  baseByExp: {
    fresher: { p25: number; median: number; p75: number; p90: number };
    mid: { p25: number; median: number; p75: number; p90: number };
    senior: { p25: number; median: number; p75: number; p90: number };
    lead: { p25: number; median: number; p75: number; p90: number };
  };
  keySkills: string[];
  growthDriver: string;
}

export interface LocationMultiplier {
  id: string;
  name: string;
  state: string;
  multiplier: number;
  marketNote: string;
}

export interface SkillBooster {
  id: string;
  name: string;
  multiplier: number;
  description: string;
}

export const LOCATIONS: LocationMultiplier[] = [
  { id: "delhi-ncr", name: "Delhi NCR (Noida / Gurgaon)", state: "Uttar Pradesh / Haryana", multiplier: 1.0, marketNote: "Major enterprise IT & corporate tech hub" },
  { id: "bengaluru", name: "Bengaluru", state: "Karnataka", multiplier: 1.12, marketNote: "Highest tech compensation density in India" },
  { id: "hyderabad", name: "Hyderabad", state: "Telangana", multiplier: 1.05, marketNote: "Strong enterprise cloud & product engineering market" },
  { id: "pune", name: "Pune", state: "Maharashtra", multiplier: 1.02, marketNote: "Automotive tech, BFSI & product engineering center" },
  { id: "mumbai", name: "Mumbai", state: "Maharashtra", multiplier: 1.08, marketNote: "Premier BFSI & fintech tech market" },
  { id: "remote", name: "Remote (All India)", state: "Pan-India", multiplier: 0.95, marketNote: "Distributed talent pool across tier-2/3 hubs" },
];

export const SKILL_BOOSTERS: SkillBooster[] = [
  { id: "genai-llm", name: "Generative AI & LLM Orchestration (LangChain, Llama, RAG)", multiplier: 0.22, description: "+22% market premium for enterprise AI automation competence" },
  { id: "cloud-k8s", name: "Kubernetes & Multi-Cloud Architecture (AWS / GCP / Azure)", multiplier: 0.16, description: "+16% premium for automated container orchestration" },
  { id: "sec-soc2", name: "Application Security & SOC2 Compliance", multiplier: 0.14, description: "+14% premium for zero-trust enterprise security hardening" },
  { id: "dist-systems", name: "High-Throughput Distributed Systems (Kafka, Redis, Go)", multiplier: 0.18, description: "+18% premium for million-QPS architecture design" },
];

export const TECH_ROLES: RoleSalaryData[] = [
  {
    id: "fullstack-engineer",
    title: "Full-Stack Software Engineer",
    category: "Software Development",
    iconName: "Code",
    description: "Modern web application development utilizing React, Next.js, Node.js, and TypeScript architectures.",
    baseByExp: {
      fresher: { p25: 4.5, median: 6.5, p75: 9.0, p90: 12.0 },
      mid: { p25: 10.0, median: 14.5, p75: 19.0, p90: 24.0 },
      senior: { p25: 20.0, median: 27.0, p75: 35.0, p90: 44.0 },
      lead: { p25: 35.0, median: 45.0, p75: 58.0, p90: 72.0 },
    },
    keySkills: ["React", "TypeScript", "Node.js", "Next.js", "PostgreSQL", "REST/GraphQL"],
    growthDriver: "High enterprise demand for full-cycle engineers who bridge frontend UX with microservices.",
  },
  {
    id: "ai-ml-engineer",
    title: "AI / Generative AI & ML Engineer",
    category: "Artificial Intelligence",
    iconName: "Sparkles",
    description: "Developing custom RAG pipelines, fine-tuning open-source LLMs, and deploying production machine learning workflows.",
    baseByExp: {
      fresher: { p25: 6.0, median: 8.5, p75: 12.5, p90: 16.0 },
      mid: { p25: 14.0, median: 20.0, p75: 28.0, p90: 36.0 },
      senior: { p25: 28.0, median: 38.0, p75: 50.0, p90: 65.0 },
      lead: { p25: 48.0, median: 62.0, p75: 80.0, p90: 105.0 },
    },
    keySkills: ["PyTorch", "Python", "LangChain/LlamaIndex", "Vector DBs", "Fine-Tuning", "vLLM"],
    growthDriver: "Top 1% demand curve in 2026 as Indian enterprises automate knowledge operations.",
  },
  {
    id: "devops-cloud-engineer",
    title: "DevOps & Cloud Platform Engineer",
    category: "Infrastructure & Cloud",
    iconName: "Cloud",
    description: "Architecting automated CI/CD pipelines, Terraform IaC, Kubernetes clusters, and cloud cost optimization.",
    baseByExp: {
      fresher: { p25: 5.0, median: 7.0, p75: 10.0, p90: 13.5 },
      mid: { p25: 11.5, median: 16.0, p75: 22.0, p90: 27.0 },
      senior: { p25: 22.0, median: 30.0, p75: 38.0, p90: 48.0 },
      lead: { p25: 38.0, median: 48.0, p75: 62.0, p90: 78.0 },
    },
    keySkills: ["AWS / GCP", "Terraform", "Kubernetes", "Docker", "GitHub Actions", "Prometheus"],
    growthDriver: "Critical for enterprise cloud migration and 99.99% uptime guarantees.",
  },
  {
    id: "data-engineer",
    title: "Data Platform & Analytics Engineer",
    category: "Data & BI",
    iconName: "Database",
    description: "Building resilient ETL/ELT pipelines, real-time data streaming architectures, and modern data warehouses.",
    baseByExp: {
      fresher: { p25: 4.8, median: 7.0, p75: 9.5, p90: 13.0 },
      mid: { p25: 11.0, median: 15.5, p75: 21.0, p90: 26.0 },
      senior: { p25: 21.0, median: 28.0, p75: 36.0, p90: 45.0 },
      lead: { p25: 36.0, median: 46.0, p75: 58.0, p90: 74.0 },
    },
    keySkills: ["Apache Spark", "Snowflake / Databricks", "Kafka", "SQL", "Python", "dbt"],
    growthDriver: "Fueled by enterprise demand for clean, structured training data for internal AI pipelines.",
  },
  {
    id: "backend-engineer",
    title: "Backend Systems Engineer (Java / Python / Go)",
    category: "Software Development",
    iconName: "Server",
    description: "Architecting high-concurrency enterprise services, database optimization, and secure API gateways.",
    baseByExp: {
      fresher: { p25: 4.5, median: 6.5, p75: 9.0, p90: 12.0 },
      mid: { p25: 10.5, median: 15.0, p75: 20.0, p90: 25.0 },
      senior: { p25: 21.0, median: 28.0, p75: 36.0, p90: 46.0 },
      lead: { p25: 36.0, median: 46.0, p75: 60.0, p90: 75.0 },
    },
    keySkills: ["Java / Spring Boot", "Go", "Python / FastAPI", "PostgreSQL", "Kafka", "Redis"],
    growthDriver: "Consistent high-volume commercial requirement for core transactional banking and enterprise SaaS.",
  },
  {
    id: "mobile-engineer",
    title: "Mobile App Engineer (React Native / Flutter / iOS)",
    category: "Software Development",
    iconName: "Smartphone",
    description: "Creating fluid, offline-first mobile applications with native device integrations and cross-platform architecture.",
    baseByExp: {
      fresher: { p25: 4.0, median: 6.0, p75: 8.5, p90: 11.5 },
      mid: { p25: 9.5, median: 14.0, p75: 18.5, p90: 23.0 },
      senior: { p25: 19.0, median: 25.0, p75: 33.0, p90: 42.0 },
      lead: { p25: 32.0, median: 42.0, p75: 54.0, p90: 68.0 },
    },
    keySkills: ["React Native", "Flutter", "Swift / Kotlin", "Redux / Zustand", "GraphQL", "Mobile CI/CD"],
    growthDriver: "Strong consumer and enterprise digital-first transformation mandates across India.",
  },
  {
    id: "qa-sdet-engineer",
    title: "SDET & Test Automation Specialist",
    category: "Quality Engineering",
    iconName: "ShieldCheck",
    description: "Designing end-to-end automated test suites, performance benchmarks, and automated security regression testing.",
    baseByExp: {
      fresher: { p25: 3.8, median: 5.5, p75: 7.5, p90: 10.0 },
      mid: { p25: 8.5, median: 12.0, p75: 16.0, p90: 20.0 },
      senior: { p25: 16.0, median: 22.0, p75: 28.0, p90: 36.0 },
      lead: { p25: 28.0, median: 36.0, p75: 46.0, p90: 58.0 },
    },
    keySkills: ["Selenium / Playwright", "Cypress", "Java / Python", "JMeter", "API Testing", "CI/CD Integration"],
    growthDriver: "Shift-left automated verification essential for rapid continuous deployment cycles.",
  },
  {
    id: "engineering-manager",
    title: "Engineering Manager / Technical Delivery Lead",
    category: "Leadership & Management",
    iconName: "Users",
    description: "Leading cross-functional software pods, architecture governance, sprint velocity, and technical talent mentorship.",
    baseByExp: {
      fresher: { p25: 15.0, median: 20.0, p75: 25.0, p90: 30.0 }, // rarely fresher, baseline starts at mid-high
      mid: { p25: 24.0, median: 30.0, p75: 38.0, p90: 46.0 },
      senior: { p25: 36.0, median: 48.0, p75: 60.0, p90: 75.0 },
      lead: { p25: 50.0, median: 65.0, p75: 85.0, p90: 110.0 },
    },
    keySkills: ["Agile Pod Delivery", "System Architecture", "OKRs", "Hiring & Mentorship", "Stakeholder Management"],
    growthDriver: "Crucial for offshore dedicated delivery centers and high-growth technology teams.",
  },
];
