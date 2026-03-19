/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

import { Draggable } from "@hello-pangea/dnd";
import { ActionIcon, Group, Paper, Space, Text, Textarea } from "@mantine/core";
import { IconCheck, IconPencil, IconTrash, IconX } from "@tabler/icons-react";
import { nanoid } from "nanoid";
import { fromEvent, map } from "rxjs";

function KanbanCard({ key, id, index, title }: { key: string; id: string; index: number; title: string }) {
  const [editMode, setEditMode] = useState(false);
  const [editTitle, setEditTitle] = useState(title);

  function handleChange() {
    console.log({ id: nanoid(), title: editTitle });
    setEditMode(false);
  }

  useEffect(() => {
    if (editMode) {
      const editTitle1_: any = document.getElementById("editTitle1");
      fromEvent(editTitle1_, "change")
        .pipe(map((e: any) => e.target.value))
        .subscribe((data) => {
          setEditTitle(data);
          console.log(editTitle);
        });
    }
  }, [editMode]);

  if (editMode) {
    return (
      <div>
        <Paper p="md">
          <Textarea defaultValue={editTitle} id="editTitle1" />
          <Space h="10px" />
          <Group gap="xs">
            <ActionIcon onClick={handleChange}>
              <IconCheck size={14} />
            </ActionIcon>
            <ActionIcon
              onClick={() => {
                alert("щас удалю карточку");
              }}
            >
              <IconX size={14} />
            </ActionIcon>
          </Group>
        </Paper>
      </div>
    );
  }
  return (
    <Draggable draggableId={id} key={key} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <div>
            <Paper p="md">
              <Text>{title}</Text>
              <Space h="10px" />
              <Group gap="xs">
                <ActionIcon onClick={() => setEditMode(true)}>
                  <IconPencil size={14} />
                </ActionIcon>
                <ActionIcon
                  onClick={() => {
                    alert("щас удалю карточку");
                  }}
                >
                  <IconTrash size={14} />
                </ActionIcon>
              </Group>
            </Paper>
          </div>
        </div>
      )}
    </Draggable>
  );
}
export default KanbanCard;
