/* eslint-disable @typescript-eslint/no-explicit-any */
import { DragDropContext } from "@hello-pangea/dnd";
import { Grid } from "@mantine/core";
import { useUnit } from "effector-react";

import KanbanColumn from "../Kanban/KanbanColumn";
import { $board, boardUpdated } from "../Kanban/model";

function Board() {
  const [board, setBoard] = useUnit([$board, boardUpdated]);

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
            <KanbanColumn cards={column.cards} title={column.title} color={column.color} />
          </Grid.Col>
        ))}
      </Grid>
    </DragDropContext>
  );
}
export default Board;
