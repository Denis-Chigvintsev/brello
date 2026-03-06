import { Droppable } from "@hello-pangea/dnd";
import { Button, /*type MantineColor,*/ Paper, Stack, Textarea, Title } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

import type { KanbanList } from "../../miscellaneous/kanbanTypes";
import KanbanCard from "./KanbanCard";

function KanbanColumn({ id, cards, title, color }: KanbanList) {
  console.log(id);
  return (
    <Paper p="md" bg={color} radius="md" w="100%">
      <Title order={4} mb="md">
        {title}
      </Title>
      <Droppable droppableId={title} key={title}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <Stack gap="xs">
              {cards.map((card, index) => (
                <KanbanCard key={card.id} id={card.id} index={index} title={card.title} />
              ))}
              {provided.placeholder}
              <Textarea placeholder="Start making new card here" />
              <Button fullWidth color="black" bg="blue.1" variant="light" mt="sm" leftSection={<IconPlus size={14} />}>
                Add card
              </Button>
            </Stack>
          </div>
        )}
      </Droppable>
    </Paper>
  );
}
export default KanbanColumn;
