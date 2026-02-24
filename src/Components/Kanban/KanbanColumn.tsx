import { Button, type MantineColor, Paper, Stack, Title } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

import KanbanCard from "./KanbanCard";

function KanbanColumn({ title, color }: { title: string; color: MantineColor }) {
  return (
    <Paper p="md" bg={color} radius="md" w="100%">
      <Title order={4} mb="md">
        {title}
      </Title>
      <Stack gap="xs">
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <Button fullWidth color={color.split(".").shift()} variant="light" mt="sm" leftSection={<IconPlus size={14} />}>
          Add card
        </Button>
      </Stack>
    </Paper>
  );
}
export default KanbanColumn;
