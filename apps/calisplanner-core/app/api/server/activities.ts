import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { prisma } from "~/repository";

export const createActivity = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    if (!(data instanceof FormData)) {
      throw new Error("Invalid form data");
    }
    const title = data.get("title");
    const content = data.get("content");
    const privateActivity = data.get("privateActivity");

    if (!title || !content || !privateActivity) {
      throw Error("Bad Request");
    }

    return {
      title: title.toString(),
      content: content.toString(),
      is_private: privateActivity === "on",
      user_id: 1,
    };
  })
  .handler(async ({ data }) => {
    const saved = await prisma.activity.create({
      data,
    });

    return saved;
  });

export const findAllActivities = createServerFn({ method: "GET" }).handler(
  async () => {
    const activities = await prisma.activity.findMany({});
    return activities;
  }
);

export const findOneActivity = createServerFn({ method: "GET" })
  .validator((id: number) => id)
  .handler(async ({ data: activityId }) => {
    try {
      const activity = await prisma.activity.findUniqueOrThrow({
        where: { id: activityId },
      });
      return activity;
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        notFound();
      }
    }
  });

export const updateActivity = createServerFn({ method: "POST" })
  .validator((data: { activityId: number; data: unknown }) => {
    if (!(data.data instanceof FormData)) {
      throw new Error("Invalid form data");
    }

    const title = data.data.get("title");
    const content = data.data.get("content");
    const privateActivity = data.data.get("privateActivity");

    if (!title || !content || !privateActivity) {
      throw Error("Bad Request");
    }

    return {
      activityId: data.activityId,
      data: {
        title: title.toString(),
        content: content.toString(),
        is_private: privateActivity === "on",
        user_id: 1,
      },
    };
  })
  .handler(async ({ data }) => {
    try {
      const updated = await prisma.activity.update({
        where: { id: data.activityId },
        data: data.data,
      });

      return updated;
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        notFound();
      }
    }
  });

export const deleteActivity = createServerFn({ method: "POST" })
  .validator((id: number) => id)
  .handler(async ({ data: activityId }) => {
    try {
      const activity = await prisma.activity.delete({
        where: { id: activityId },
      });
      return activity;
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        notFound();
      }
    }
  });
