import { Grid } from "@mantine/core";

import KanbanColumn from "../Kanban/KanbanColumn";

function Board() {
  return (
    <Grid w="100%" justify="space-around">
      <Grid.Col span="auto">
        <KanbanColumn title="To Do" color="teal.5" />
      </Grid.Col>
      <Grid.Col span="auto">
        <KanbanColumn title="In Progress" color="grape.5" />
      </Grid.Col>
      <Grid.Col span="auto">
        <KanbanColumn title="Done" color="gray.7" />
      </Grid.Col>
    </Grid>
  );
}
export default Board;
