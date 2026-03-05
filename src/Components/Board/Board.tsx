/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import { DragDropContext } from "@hello-pangea/dnd";
import { Grid } from "@mantine/core";
import { nanoid } from "nanoid";

import type { KanbanList } from "../../miscellaneous/kanbanTypes";
import KanbanColumn from "../Kanban/KanbanColumn";

const INITIAL_BOARD: KanbanList[] = [
  {
    id: nanoid(),
    title: "To Do",
    cards: [
      { id: nanoid(), title: "Setup the Workplace" },
      { id: nanoid(), title: "Review opened issues" },
    ],
    color: "teal.5",
  },
  {
    id: nanoid(),
    title: "In Progress",
    cards: [{ id: nanoid(), title: "Implement Kanban feature" }],
    color: "grape.5",
  },
  {
    id: nanoid(),
    title: "Done",
    cards: [{ id: nanoid(), title: "Initialized project" }],
    color: "gray.7",
  },
];

function Board() {
  const [board] = useState(INITIAL_BOARD);

  function handleDragDrop(results: any) {
    console.log(results);
  }

  return (
    <DragDropContext onDragEnd={handleDragDrop}>
      <Grid w="100%" justify="space-around">
        {board.map((column) => (
          <Grid.Col span="auto" miw="250px">
            <KanbanColumn id={column.id} cards={column.cards} title={column.title} color={column.color} />
          </Grid.Col>
        ))}
      </Grid>
    </DragDropContext>
  );
}
export default Board;
