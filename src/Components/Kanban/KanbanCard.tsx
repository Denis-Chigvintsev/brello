import { Draggable } from "@hello-pangea/dnd";
import { Paper, Text } from "@mantine/core";

function KanbanCard({ key, id, index, title }: { key: string; id: string; index: number; title: string }) {
  return (
    <Draggable draggableId={id} key={key} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <div>
            <Paper p="md">
              <Text>{title}</Text>
            </Paper>
          </div>
        </div>
      )}
    </Draggable>
  );
}
export default KanbanCard;
