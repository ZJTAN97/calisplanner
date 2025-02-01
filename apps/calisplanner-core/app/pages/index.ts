import { lazy } from "react";

export const UsersPage = lazy(() =>
  import("./UsersPage/UsersPage").then((res) => ({
    default: res.UsersPage,
  }))
);

export const ActivitiesPage = lazy(() =>
  import("./ActivitiesPage/ActivitiesPage").then((res) => ({
    default: res.ActivitiesPage,
  }))
);

export const NewActivityPage = lazy(() =>
  import("./NewActivityPage/NewActivityPage").then((res) => ({
    default: res.NewActivityPage,
  }))
);

export const ActivityPage = lazy(() =>
  import("./ActivityPage/ActivityPage").then((res) => ({
    default: res.ActivityPage,
  }))
);

export const EditActivityPage = lazy(() =>
  import("./EditActivityPage/EditActivityPage").then((res) => ({
    default: res.EditActivityPage,
  }))
);
