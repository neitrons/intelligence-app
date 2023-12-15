import { ListItem } from "@rneui/base";

export function Subject() {
  return (
    <ListItem.Accordion
      content={
        <ListItem.Content>
          <ListItem.Title></ListItem.Title>
        </ListItem.Content>
      }
    ></ListItem.Accordion>
  );
}
