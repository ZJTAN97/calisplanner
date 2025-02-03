import {
  Button,
  Checkbox,
  Flex,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useParams, useRouter } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { updateActivity } from "~/server";
import { Route } from "~/routes/activities.$activityId_.edit";

export const EditActivityPage = () => {
  const router = useRouter();
  const { activityId } = useParams({ from: "/activities/$activityId_/edit" });
  const existingActivity = Route.useLoaderData();

  if (!existingActivity) {
    return <div>Not found</div>;
  }

  const handleSubmit = async (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    await updateActivity({
      data: { activityId: Number(activityId), data: formData },
    });
    await router.invalidate();
    router.navigate({ to: "/" });
  };

  return (
    <Stack component="form" gap="lg" onSubmit={handleSubmit}>
      <TextInput
        key={activityId}
        label="Title of Activity"
        name="title"
        defaultValue={existingActivity.title}
      />
      <Textarea
        key={activityId}
        label="Description"
        name="content"
        defaultValue={existingActivity.content}
      />
      <Checkbox
        key={activityId}
        label="Private Activity"
        name="privateActivity"
        checked={existingActivity.is_private}
      />
      <Flex justify="flex-end">
        <Button type="submit">Save</Button>
      </Flex>
    </Stack>
  );
};
