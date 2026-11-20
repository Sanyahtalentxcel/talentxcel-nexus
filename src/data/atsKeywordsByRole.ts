export interface RoleAtsProfile {
  id: string;
  name: string;
  category: string;
  essentialKeywords: string[];
  bonusKeywords: string[];
  recommendedCertifications: string[];
}

export const ATS_ROLE_TAXONOMIES: RoleAtsProfile[] = [
  {
    id: "fullstack",
    name: "Full-Stack Software Engineer",
    category: "Software Development",
    essentialKeywords: [
      "react",
      "javascript",
      "typescript",
      "node.js",
      "html",
      "css",
      "sql",
      "postgresql",
      "mongodb",
      "rest api",
      "git",
      "docker",
      "next.js",
    ],
    bonusKeywords: [
      "graphql",
      "tailwind",
      "microservices",
      "ci/cd",
      "aws",
      "redis",
      "jest",
      "playwright",
      "state management",
      "redux",
      "zustand",
    ],
    recommendedCertifications: ["AWS Certified Developer", "Meta Frontend / Backend Specialization"],
  },
  {
    id: "ai-ml",
    name: "AI / Generative AI & Machine Learning Engineer",
    category: "Artificial Intelligence",
    essentialKeywords: [
      "python",
      "pytorch",
      "tensorflow",
      "machine learning",
      "deep learning",
      "nlp",
      "llm",
      "langchain",
      "rag",
      "vector database",
      "prompt engineering",
      "pandas",
      "numpy",
    ],
    bonusKeywords: [
      "llamaindex",
      "transformers",
      "huggingface",
      "vllm",
      "fine-tuning",
      "qdrant",
      "pinecone",
      "mlflow",
      "agentic",
      "gpu optimization",
      "cuda",
    ],
    recommendedCertifications: ["DeepLearning.AI Generative AI Specialization", "AWS Machine Learning Specialty"],
  },
  {
    id: "devops",
    name: "DevOps & Cloud Platform Engineer",
    category: "Infrastructure",
    essentialKeywords: [
      "aws",
      "azure",
      "gcp",
      "kubernetes",
      "docker",
      "terraform",
      "ci/cd",
      "linux",
      "bash",
      "jenkins",
      "github actions",
      "monitoring",
    ],
    bonusKeywords: [
      "ansible",
      "prometheus",
      "grafana",
      "helm",
      "argocd",
      "gitops",
      "soc2",
      "zero trust",
      "networking",
      "cloudwatch",
      "cost optimization",
    ],
    recommendedCertifications: ["Certified Kubernetes Administrator (CKA)", "AWS Solutions Architect Professional"],
  },
  {
    id: "backend",
    name: "Backend Systems Engineer (Java / Go / Python)",
    category: "Software Development",
    essentialKeywords: [
      "java",
      "spring boot",
      "python",
      "golang",
      "microservices",
      "sql",
      "postgresql",
      "mysql",
      "rest",
      "kafka",
      "redis",
      "distributed systems",
    ],
    bonusKeywords: [
      "grpc",
      "rabbitmq",
      "elasticsearch",
      "caching",
      "nosql",
      "multithreading",
      "concurrency",
      "database sharding",
      "system design",
      "docker",
    ],
    recommendedCertifications: ["Oracle Java Professional", "Confluent Certified Kafka Developer"],
  },
  {
    id: "data-engineer",
    name: "Data Platform & Analytics Engineer",
    category: "Data & BI",
    essentialKeywords: [
      "python",
      "sql",
      "etl",
      "data pipeline",
      "apache spark",
      "data warehouse",
      "snowflake",
      "airflow",
      "postgresql",
      "big data",
    ],
    bonusKeywords: [
      "dbt",
      "databricks",
      "kafka",
      "hadoop",
      "delta lake",
      "redshift",
      "bigquery",
      "data modeling",
      "schema design",
      "streaming",
    ],
    recommendedCertifications: ["Snowflake SnowPro Core", "Databricks Certified Data Engineer"],
  },
  {
    id: "qa-automation",
    name: "SDET & Test Automation Specialist",
    category: "Quality Engineering",
    essentialKeywords: [
      "automation testing",
      "selenium",
      "playwright",
      "cypress",
      "java",
      "python",
      "api testing",
      "postman",
      "jenkins",
      "git",
      "test cases",
    ],
    bonusKeywords: [
      "jmeter",
      "load testing",
      "ci/cd",
      "bdd",
      "cucumber",
      "appium",
      "performance testing",
      "security testing",
      "framework design",
    ],
    recommendedCertifications: ["ISTQB Certified Tester", "Playwright Automation Specialist"],
  },
];

export const POWER_ACTION_VERBS = [
  "architected",
  "engineered",
  "developed",
  "spearheaded",
  "deployed",
  "optimized",
  "scaled",
  "reduced",
  "automated",
  "orchestrated",
  "refactored",
  "migrated",
  "implemented",
  "accelerated",
  "streamlined",
  "designed",
];

export const WEAK_FILLERS = [
  "responsible for",
  "worked on",
  "helped with",
  "participated in",
  "assisted in",
  "handled",
  "duties included",
];

export interface AtsAnalysisResult {
  overallScore: number; // 0 - 100
  keywordScore: number;
  impactScore: number;
  structureScore: number;
  foundEssentialKeywords: string[];
  missingEssentialKeywords: string[];
  foundBonusKeywords: string[];
  detectedActionVerbs: string[];
  detectedWeakFillers: string[];
  hasMetrics: boolean;
  metricCount: number;
  wordCount: number;
  detectedSections: string[];
  missingSections: string[];
  actionableFeedback: string[];
}

export function analyzeResumeText(rawText: string, targetRoleId: string): AtsAnalysisResult {
  const role = ATS_ROLE_TAXONOMIES.find((r) => r.id === targetRoleId) || ATS_ROLE_TAXONOMIES[0];
  const text = rawText.toLowerCase();

  // Word count
  const words = rawText.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  // 1. Keyword analysis
  const foundEssentialKeywords = role.essentialKeywords.filter((kw) => text.includes(kw.toLowerCase()));
  const missingEssentialKeywords = role.essentialKeywords.filter((kw) => !text.includes(kw.toLowerCase()));
  const foundBonusKeywords = role.bonusKeywords.filter((kw) => text.includes(kw.toLowerCase()));

  const keywordPercentage = Math.round((foundEssentialKeywords.length / role.essentialKeywords.length) * 100);

  // 2. Action verbs & weak fillers
  const detectedActionVerbs = POWER_ACTION_VERBS.filter((verb) => text.includes(verb));
  const detectedWeakFillers = WEAK_FILLERS.filter((phrase) => text.includes(phrase));

  // 3. Impact & quantification metric check (numbers, percentages, currency, time, users)
  const metricRegex = /(\b\d+([.,]\d+)?\s*(%|percent|k|m|ms|sec|hours|lpa|users|qps|inr|\$)\b|\b\d{2,}\b)/gi;
  const metricMatches = rawText.match(metricRegex) || [];
  const metricCount = metricMatches.length;
  const hasMetrics = metricCount >= 3;

  // 4. Section structure detection
  const standardSections = ["experience", "skills", "education", "projects"];
  const detectedSections = standardSections.filter((sec) => text.includes(sec));
  const missingSections = standardSections.filter((sec) => !text.includes(sec));

  // Compute component scores
  // Keyword score (weight 45%)
  const keywordScore = Math.min(100, Math.round(keywordPercentage * 0.9 + foundBonusKeywords.length * 3));

  // Impact score (weight 30%): action verbs + metric density
  const verbPoints = Math.min(50, detectedActionVerbs.length * 10);
  const metricPoints = Math.min(50, metricCount * 10);
  const impactScore = Math.max(0, verbPoints + metricPoints - detectedWeakFillers.length * 8);

  // Structure score (weight 25%): word count between 300 and 1200 + essential sections
  let structureScore = 40;
  if (wordCount >= 250 && wordCount <= 1200) structureScore += 30;
  if (detectedSections.length >= 3) structureScore += 30;

  // Composite ATS Score
  const rawOverall = Math.round(keywordScore * 0.45 + impactScore * 0.3 + structureScore * 0.25);
  const overallScore = Math.min(98, Math.max(15, rawOverall));

  // Actionable feedback compilation
  const actionableFeedback: string[] = [];

  if (missingEssentialKeywords.length > 0) {
    actionableFeedback.push(
      `Add critical missing skills for ${role.name}: ${missingEssentialKeywords.slice(0, 5).join(", ")}.`
    );
  }

  if (metricCount < 3) {
    actionableFeedback.push(
      "Quantify your project outcomes. Use measurable impact metrics (e.g., 'reduced latency by 35%', 'managed 100k daily active users')."
    );
  }

  if (detectedWeakFillers.length > 0) {
    actionableFeedback.push(
      `Replace passive phrases like '${detectedWeakFillers[0]}' with decisive action verbs like 'Architected', 'Engineered', or 'Deployed'.`
    );
  }

  if (wordCount < 200) {
    actionableFeedback.push(
      "Your resume text appears too brief. Comprehensive engineering profiles average 350–700 words to clear enterprise ATS filters."
    );
  }

  if (missingSections.length > 0) {
    actionableFeedback.push(
      `Ensure explicit section headers are present: missing [${missingSections.join(", ")}].`
    );
  }

  if (foundBonusKeywords.length >= 2) {
    actionableFeedback.push(
      `Strong differentiator: you have in-demand modern skills (${foundBonusKeywords.slice(0, 3).join(", ")}) which command top quartile CTC.`
    );
  }

  return {
    overallScore,
    keywordScore,
    impactScore,
    structureScore,
    foundEssentialKeywords,
    missingEssentialKeywords,
    foundBonusKeywords,
    detectedActionVerbs,
    detectedWeakFillers,
    hasMetrics,
    metricCount,
    wordCount,
    detectedSections,
    missingSections,
    actionableFeedback,
  };
}
