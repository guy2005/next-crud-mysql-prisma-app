import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@/generated/prisma/client";

const adapter = new PrismaMariaDb({
  host: process.env.MYSQLDB_HOST || "localhost",
  port: Number(process.env.MYSQLDB_PORT) || 3306,
  user: process.env.MYSQLDB_USER || "root",
  password: process.env.MYSQLDB_PASSWORD || "",
  database: process.env.MYSQLDB_DATABASE || "saushop_db",
});

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  });


export default prisma;

