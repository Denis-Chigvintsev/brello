import { Droppable } from "@hello-pangea/dnd";
import { Button, /*type MantineColor,*/ Paper, Stack, Textarea, Title } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

import type { KanbanList } from "../../miscellaneous/kanbanTypes";
import KanbanCard from "./KanbanCard";

function KanbanColumn({ id, cards, title, color }: KanbanList) {
  return (
    <Paper p="md" bg={color} radius="md" w="100%">
      <Title order={4} mb="md">
        {title}
      </Title>
      <Droppable droppableId={id} key={id}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <Stack gap="xs">
              {cards.map(({ id, title }, index) => (
                <KanbanCard key={id} id={id} index={index} title={title} />
              ))}
              <Textarea placeholder="Start making new card here" />
              <Button fullWidth color="black" bg="blue.1" variant="light" mt="sm" leftSection={<IconPlus size={14} />}>
                Add card
              </Button>
            </Stack>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Paper>
  );
}
export default KanbanColumn;
