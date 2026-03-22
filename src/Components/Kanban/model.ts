/* eslint-disable @typescript-eslint/no-explicit-any */
import { createEvent, createStore } from "effector";
import { nanoid } from "nanoid";

import type { KanbanBoard, KanbanCard, KanbanList } from "../../miscellaneous/kanbanTypes";

export const TASK_NAMES = [
  "Set up development environment",
  "Create component structure",
  "Implement basic routing",
  "Design task board layout",
  "Add drag-and-drop functionality for cards",
  "Develop notification system",
  "Integrate user authentication",
  "Connect Google API for OAuth",
  "Implement task filtering by status",
  "Add tagging functionality",
  "Develop task prioritization system",
  "Integrate third-party analytics API",
  "Set up automatic data saving",
  "Create user roles system",
  "Add comments to tasks",
  "Integrate external file storage",
  "Enable public boards functionality",
  "Develop mobile interface version",
  "Add push notifications",
  "Optimize application performance",
  "Implement board archiving functionality",
  "Develop import/export data feature",
  "Create dark mode for interface",
  "Add card copying functionality",
  "Integrate Jira data migration",
  "Create task charts and graphs",
  "Implement search functionality for tasks",
  "Develop quick task evaluation widget",
  "Add deadlines feature for cards",
  "Set up automatic data backups",
  "Add multi-language support",
  "Create board customization system",
  "Integrate with Slack for task updates",
  "Add task change history tracking",
  "Create “My Tasks” page for users",
  "Develop API for external system integration",
  "Create statistics for completed tasks",
  "Implement bulk card movement system",
  "Add task subscription functionality",
  "Connect Google Analytics for tracking",
  "Develop user documentation",
  "Integrate calendar sync for deadlines",
  "Add task recovery from trash functionality",
  "Develop “Reports and Analysis” section",
  "Create admin panel for user management",
  "Implement multi-level subtask system",
  "Integrate GitHub sync for task tracking",
  "Optimize database for large datasets",
  "Create metrics system to track productivity",
  "Add task grouping by category functionality",
];

function randomTaskName() {
  return TASK_NAMES[Math.floor(Math.random() * TASK_NAMES.length)];
}

function createRandomTaskList(amount: number): KanbanCard[] {
  return Array.from({ length: amount }, () => ({ id: nanoid(), title: randomTaskName() }));
}

const INITIAL_BOARD: KanbanList[] = [
  {
    id: nanoid(),
    title: "To Do",
    cards: createRandomTaskList(15),
    color: "teal.5",
  },
  {
    id: nanoid(),
    title: "In Progress",
    cards: createRandomTaskList(4),
    color: "grape.5",
  },
  {
    id: nanoid(),
    title: "Done",
    cards: createRandomTaskList(30),
    color: "gray.7",
  },
];

export const $board = createStore<KanbanBoard>(INITIAL_BOARD);

export const boardUpdated = createEvent<KanbanBoard>();

export const cardCreateClicked = createEvent<{ card: KanbanCard; columnTitle: string }>();
export const cardDeleted = createEvent<any>();
export const cardUpdated = createEvent<any>();

$board.on(cardCreateClicked, (board, { card, columnTitle }) => {
  const updatedBoard = board.map((column) => {
    if (column.title == columnTitle) {
      card.id = nanoid();
      return { ...column, cards: [...column.cards, card] };
    }

    return column;
  });

  return updatedBoard;
});

$board.on(cardDeleted, (board, id) => {
  const updatedBoard = board.map((column) => {
    const index = column.cards.findIndex((card) => card.id == id);
    column.cards.splice(index, 1);
    return column;
  });
  return updatedBoard;
});

$board.on(cardUpdated, (board, editedCard) => {
  const updatedBoard = board.map((column) => {
    column.cards.map((card) => {
      if (editedCard.id == card.id) return (card.title = editedCard.title);
    });

    return column;
  });
  return updatedBoard;
});

$board.on(boardUpdated, (_, board) => board);
