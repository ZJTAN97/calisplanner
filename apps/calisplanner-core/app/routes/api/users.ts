import { json } from "@tanstack/start";
import { createAPIFileRoute } from "@tanstack/start/api";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const APIRoute = createAPIFileRoute("/api/users")({
  POST: async ({ request }) => {
    const body = await request.json();
    return new Response(body);
  },
  GET: async ({ request, params }) => {
    const result = await prisma.user.findMany({});
    return json(result);
  },
});
