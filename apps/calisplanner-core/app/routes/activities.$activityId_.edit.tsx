import { createFileRoute } from "@tanstack/react-router";
import { findOneActivity } from "~/server";
import { EditActivityPage } from "~/pages";

export const Route = createFileRoute("/activities/$activityId_/edit")({
  loader: async ({ params: { activityId } }) =>
    findOneActivity({ data: Number(activityId) }),
  component: EditActivityPage,
});
