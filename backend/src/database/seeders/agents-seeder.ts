import { AppDataSource } from "../data-source";
import Agent from "../entities/Agent";
import logger from "../../utils/logger";

// All 251 agents configuration
const AGENTS_DATA = [
  // Content Creation Agents (60)
  {
    name: "Viral Hook Specialist - Curiosity Gap",
    type: "content_creation",
    category: "hook_specialist",
    description: "Creates curiosity gap hooks to maximize click-through rates",
    capabilities: ["hook_generation", "engagement_optimization", "cta_creation"],
    successMetrics: ["hook_ctr", "save_rate", "share_rate"],
    supportedPlatforms: ["instagram", "tiktok", "youtube", "twitter", "linkedin"],
  },
  // ... Add more agents here
  // This is a template - full list available in VIRLBOX-Complete-Guide.md
];

export async function seedAgents() {
  try {
    const agentRepository = AppDataSource.getRepository(Agent);
    
    for (const agentData of AGENTS_DATA) {
      const existingAgent = await agentRepository.findOne({
        where: { name: agentData.name },
      });

      if (!existingAgent) {
        const agent = agentRepository.create(agentData);
        await agentRepository.save(agent);
        logger.info(`Seeded agent: ${agentData.name}`);
      }
    }

    logger.info("✅ All agents seeded successfully!");
  } catch (error) {
    logger.error("Failed to seed agents:", error);
    throw error;
  }
}

// Run seeder
if (require.main === module) {
  AppDataSource.initialize().then(async () => {
    await seedAgents();
    await AppDataSource.destroy();
  });
}

