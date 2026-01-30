import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("admin123", 10);

  await prisma.user.create({
    data: {
      email: "admin@horizonplus.org",
      password,
      role: "ADMIN",
    },
  });

  console.log("✅ Admin créé");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
