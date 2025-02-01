import { Card, Stack } from "@mantine/core";
import { Route } from "~/routes/users";

export const UsersPage = () => {
  const users = Route.useLoaderData();

  return (
    <Stack>
      {users.map((user) => (
        <Card key={user.id}>{user.name}</Card>
      ))}
    </Stack>
  );
};
