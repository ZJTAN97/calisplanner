import { createFileRoute } from "@tanstack/react-router";
import { findAllUsers } from "../api/server/users";
import { UsersPage } from "~/pages";

export const Route = createFileRoute("/users")({
  loader: async () => findAllUsers(),
  component: UsersPage,
});
