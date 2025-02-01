import { createFileRoute } from "@tanstack/react-router";
import { ActivitiesPage } from "../pages";
import { findAllActivities } from "~/api/server/activities";

export const Route = createFileRoute("/")({
  loader: async () => findAllActivities(),
  component: ActivitiesPage,
});
