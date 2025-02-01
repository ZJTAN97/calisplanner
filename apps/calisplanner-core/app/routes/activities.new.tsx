import { createFileRoute } from "@tanstack/react-router";
import { NewActivityPage } from "../pages";

export const Route = createFileRoute("/activities/new")({
  component: NewActivityPage,
});
