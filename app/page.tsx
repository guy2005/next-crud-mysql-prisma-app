import prisma from "@/lib/prisma";
import { connection } from "next/server";

export const instant = false;

export default async function HomePage() {
  await connection();
  const count = await prisma.products.count();
  return (
    <div className="p-8 font-sans">
      <h1 className="text-2xl font-bold">Next.js CRUD MySQL Prisma</h1>
      <p className="mt-2 text-muted-foreground">Products count: {count}</p>
    </div>
  );
}
