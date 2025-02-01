import { PrismaClient } from "@prisma/client";
import { createServerFn } from "@tanstack/start";
import { prisma } from "~/repository";


export const findAllUsers = createServerFn({ method: "GET" }).handler(
  async ({ data }) => {
    const users = await prisma.user.findMany({});
    return users;
  }
);

export const findOneUser = createServerFn({ method: "GET" })
  .validator((id: number) => id)
  .handler(async ({ data: userId }) => {
    const user = await prisma.user.findUniqueOrThrow({ where: { id: userId } });
    return user;
  });
