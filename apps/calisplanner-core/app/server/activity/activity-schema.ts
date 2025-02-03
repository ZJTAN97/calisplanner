import { z } from "zod";

export const createActivitySchema = z
  .object({
    title: z.string(),
    content: z.string(),
    privateActivity: z.string(),
  })
  .transform((activity) => ({
    title: activity.title,
    content: activity.content,
    is_private: activity.privateActivity === "on",
    user_id: 1
  }));

export type CreateActivityType = z.infer<typeof createActivitySchema>;
