import { createFileRoute } from "@tanstack/react-router";
import { ActivitiesPage } from "../pages";
import { findAllActivities } from "~/server";

export const Route = createFileRoute("/")({
  loader: async () => findAllActivities(),
  component: ActivitiesPage,
});
