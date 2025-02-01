import { useMutation } from "@tanstack/react-query";
import { createActivity } from "../server";

export const useCreateActivity = () =>
  useMutation({
    mutationFn: createActivity,
  });
