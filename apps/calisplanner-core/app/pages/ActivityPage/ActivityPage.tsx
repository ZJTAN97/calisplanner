import { Button, Flex, Stack, Text } from "@mantine/core";
import { Link, useParams, useRouter } from "@tanstack/react-router";
import { deleteActivity } from "~/api/server";
import { Route } from "~/routes/activities.$activityId";

export const ActivityPage = () => {
  const activity = Route.useLoaderData();

  const router = useRouter();
  const { activityId } = useParams({ from: "/activities/$activityId" });

  if (!activity) {
    return <div>Not found</div>;
  }

  const handleDelete = async () => {
    await deleteActivity({ data: Number(activityId) });
    await router.invalidate();
    router.navigate({ to: "/" });
  };

  return (
    <Stack gap="xl">
      <Text>{activity.title}</Text>
      <Text>{activity.content}</Text>
      <Flex justify="space-between" gap="md">
        <Button color="red.5" onClick={handleDelete}>
          Delete
        </Button>
        <Button
          renderRoot={(props) => (
            <Link
              {...props}
              to="/activities/$activityId/edit"
              params={{ activityId }}
            />
          )}
        >
          Edit
        </Button>
      </Flex>
    </Stack>
  );
};
