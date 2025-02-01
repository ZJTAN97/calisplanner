import { createFileRoute } from "@tanstack/react-router";
import { findOneActivity } from "~/api/server";
import { ActivityPage } from "~/pages";

export const Route = createFileRoute("/activities/$activityId")({
  loader: async ({ params: { activityId } }) =>
    findOneActivity({ data: Number(activityId) }),
  component: ActivityPage,
});
