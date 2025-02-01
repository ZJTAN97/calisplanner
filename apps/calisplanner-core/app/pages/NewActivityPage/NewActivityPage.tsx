import {
  Button,
  Checkbox,
  Flex,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useRouter } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { createActivity } from "~/api/server";

export const NewActivityPage = () => {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    await createActivity({ data: formData });
    await router.invalidate();
    router.navigate({ to: "/" });
  };

  return (
    <Stack component="form" gap="lg" onSubmit={handleSubmit}>
      <TextInput label="Title of Activity" name="title" />
      <Textarea label="Description" name="content" />
      <Checkbox label="Private Activity" name="privateActivity" />
      <Flex justify="flex-end">
        <Button type="submit">Create</Button>
      </Flex>
    </Stack>
  );
};
