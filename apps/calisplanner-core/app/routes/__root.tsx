import "@mantine/core/styles.css";

import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import type { ReactNode } from "react";
import {
  AppShell,
  Burger,
  Group,
  MantineProvider,
  NavLink,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconActivity, IconUser } from "@tabler/icons-react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const RootComponent = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <RootDocument>
      <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <AppShell
            layout="alt"
            header={{ height: 60 }}
            footer={{ height: 60 }}
            navbar={{
              width: 300,
              breakpoint: "sm",
              collapsed: { mobile: !opened },
            }}
            aside={{
              width: 300,
              breakpoint: "md",
              collapsed: { desktop: false, mobile: true },
            }}
            padding="md"
          >
            <AppShell.Header>
              <Group h="100%" px="md">
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                />
                <Text fw={500} c="blue.5" size="xl">
                  CalisPlanner
                </Text>
              </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
              <Group>
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                />
                <NavLink
                  label="Activity"
                  leftSection={<IconActivity size={16} stroke={1.5} />}
                  renderRoot={(props) => <Link {...props} to="/" />}
                />
                <NavLink
                  label="Users"
                  leftSection={<IconUser size={16} stroke={1.5} />}
                  renderRoot={(props) => <Link {...props} to="/users" />}
                />
              </Group>
            </AppShell.Navbar>
            <AppShell.Main>
              <Outlet />
            </AppShell.Main>
            <AppShell.Aside p="md">Aside</AppShell.Aside>
          </AppShell>
        </MantineProvider>
      </QueryClientProvider>
    </RootDocument>
  );
};

const RootDocument = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en">
      <head>
        <Meta />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "CalisPlanner",
      },
    ],
    // HMR still not fixed: https://github.com/TanStack/router/issues/1992#issuecomment-2595836691
    scripts: [
      {
        type: "module",
        children: `import RefreshRuntime from "/_build/@react-refresh";
RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type`,
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: (props) => {
    return <div>Page not found.</div>;
  },
  errorComponent: (props) => {
    return (
      <RootDocument>
        <div>An error has occured.</div>
      </RootDocument>
    );
  },
});
