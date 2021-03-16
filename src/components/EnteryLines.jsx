import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

function EnteryLines({ entries, deleteEntry, isOpen, setIsOpen, editEntry }) {
  return (
    <Container>
      {entries.map((entery) => (
        <EntryLine
          key={entery.id}
          {...entery}
          deleteEntry={deleteEntry}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          editEntry={editEntry}
        />
      ))}
    </Container>
  );
}

export default EnteryLines;
