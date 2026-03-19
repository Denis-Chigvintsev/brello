/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

import { Button, Textarea } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { nanoid } from "nanoid";
import { fromEvent, map } from "rxjs";

let textArea1: string;

function KanbanCreateCard() {
  function handleSubmit(e: any) {
    e.preventDefault();

    const newCard = { id: nanoid(), title: textArea1 };
    console.log(newCard);

    e.target.textArea1.value = "";
  }

  useEffect(() => {
    const textArea1_: any = document.getElementById("textArea1");
    fromEvent(textArea1_, "change")
      .pipe(map((e: any) => e.target.value))
      .subscribe((data) => {
        textArea1 = data;
      });
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Textarea placeholder="Start making new card here" id="textArea1" required />
        <Button
          type="submit"
          fullWidth
          color="black"
          bg="blue.1"
          variant="light"
          mt="sm"
          leftSection={<IconPlus size={14} />}
        >
          Add card
        </Button>
      </form>
    </>
  );
}
export default KanbanCreateCard;
