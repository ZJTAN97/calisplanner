import {
  Badge,
  Button,
  Card,
  Flex,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { Link } from "@tanstack/react-router";
import { Route } from "~/routes/index";

export const ActivitiesPage = () => {
  const activities = Route.useLoaderData();

  return (
    <Stack>
      <Flex>
        <Button
          renderRoot={(props) => <Link {...props} to="/activities/new" />}
        >
          New Activity
        </Button>
      </Flex>
      <Stack gap="md">
        {activities.length === 0 ? (
          <Text ta="center">No activities found</Text>
        ) : (
          activities.map((activity) => (
            <Card
              key={activity.id}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              renderRoot={(props) => (
                <Link
                  {...props}
                  to="/activities/$activityId"
                  params={{ activityId: activity.id }}
                />
              )}
            >
              <Card.Section>
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{activity.title}</Text>
                {activity.is_private ? (
                  <Badge color="pink">Private</Badge>
                ) : null}
              </Group>

              <Text size="sm" c="dimmed">
                {activity.content}
              </Text>
            </Card>
          ))
        )}
      </Stack>
    </Stack>
  );
};
