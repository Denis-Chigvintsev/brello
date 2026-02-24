import { Anchor, AppShell, Burger, Button, Flex, Space } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import "@mantine/core/styles.css";

import Board from "../Board/Board";
import LightDarkButton from "../LightDarkButton/LightDarkButton";

function AppShellBrello() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const theme = useMantineTheme();

  return (
    <AppShell
      padding="md"
      header={{ height: 120 }}
      footer={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
    >
      <AppShell.Header>
        <Space h="sm" />
        <Flex justify="space-between" align={"center"} style={{ padding: "10px 20px" }}>
          <Burger onClick={toggleDesktop} visibleFrom="sm"></Burger>
          <Burger onClick={toggleMobile} hiddenFrom="sm"></Burger>
          <div style={{ fontWeight: 700, fontSize: "20px" }}>Innovative Brellot 🤔😂🤣 </div>
          <div>
            <LightDarkButton />
          </div>
        </Flex>
        <Flex justify="left" align={"center"} style={{ padding: "10px 20px", gap: "10px" }}>
          <Anchor style={{ color: theme.colors.dark[8], fontWeight: 700 }}>Board</Anchor>
          <Anchor style={{ color: theme.colors.dark[8], fontWeight: 700 }}>Members</Anchor>
          <Anchor style={{ color: theme.colors.dark[8], fontWeight: 700 }}>Settings</Anchor>
        </Flex>
        <AppShell.Navbar p="md" style={{ gap: "10px" }}>
          <Button>Кнопка 1</Button>
          <Button>Кнопка 2</Button>
        </AppShell.Navbar>
      </AppShell.Header>
      <AppShell.Main>
        <Flex>
          <Board />
        </Flex>
      </AppShell.Main>
      <AppShell.Footer>
        <Flex justify="center" align="center">
          © Денис ⛹️‍♂️🚶‍♂️🛀
        </Flex>
      </AppShell.Footer>
    </AppShell>
  );
}
export default AppShellBrello;
