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
  const [board, setBoard] = useState(INITIAL_BOARD);

  function handleDragDrop(results: any) {
    console.log(results);
    const { source, destination, type } = results;
    console.log(source, destination, type);
    let reorderedBoard;
    let sourceIndex;
    let sourceKanban;
    let sourceCardsArray: any;

    let destinationKanban;
    let destinationCardsArray: any;

    let destinationIndex;
    let deletedItem;

    if (!destination) return;
    if (source.droppableId == destination.droppableId && source.index == destination.index) return;

    if (source.droppableId == source.droppableId) {
      //внутри доски это когда source.droppableId==destination.droppableId

      reorderedBoard = [...board];
      sourceIndex = source.index;

      [sourceKanban] = reorderedBoard.filter((el) => el.title == source.droppableId); // это массив канбан записей первоначальный - из него потом выделим массив карточек

      sourceCardsArray = sourceKanban.cards; //sourceCardsArray - это уже массив карточек

      [deletedItem] = sourceCardsArray.splice(sourceIndex, 1);

      destinationIndex = destination.index;

      [destinationKanban] = reorderedBoard.filter((el) => el.title == destination.droppableId);

      destinationCardsArray = destinationKanban.cards;

      destinationCardsArray.splice(destinationIndex, 0, deletedItem);

      reorderedBoard.map((el) => {
        if (el.title == destination.droppableId) el.cards = [...destinationCardsArray];
      });
      console.log("reorderedBoard", reorderedBoard);
      return setBoard(reorderedBoard);
    }
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
