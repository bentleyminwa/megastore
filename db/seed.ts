import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function seed() {
  const prisma = new PrismaClient();

  // delete products
  await prisma.product.deleteMany();

  // delete auth data
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  // create products
  await prisma.product.createMany({
    data: sampleData.products,
  });

  // create users
  await prisma.user.createMany({
    data: sampleData.users,
  });
}

seed();
