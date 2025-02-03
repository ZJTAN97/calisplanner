import { createFileRoute } from "@tanstack/react-router";
import { UsersPage } from "~/pages";
import { findAllUsers } from "~/server";

export const Route = createFileRoute("/users")({
  loader: async () => findAllUsers(),
  component: UsersPage,
});
