import { ListItem } from "@rneui/base";

import { TSubject } from "../../../../data/subjects";

type SubjectProps = { subject: TSubject };

export function Subject({ subject }: SubjectProps) {
  return (
    <ListItem.Accordion
      content={
        <ListItem.Content>
          <ListItem.Title>{subject.title}</ListItem.Title>
        </ListItem.Content>
      }
    ></ListItem.Accordion>
  );
}
