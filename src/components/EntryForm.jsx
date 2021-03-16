import React, { Fragment } from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";

function EntryForm({
  description,
  value,
  isExpense,
  setDescription,
  setIsExpense,
  setValue,
}) {
  return (
    <Fragment>
      <Form.Group>
        <Form.Input
          width={12}
          icon="tags"
          placeholder="New Shinny thing"
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Input
          width={4}
          icon="dollar"
          placeholder="100.00"
          label="Value"
          iconPosition="left"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label="is expense ?"
          checked={isExpense}
          onChange={() => setIsExpense((oldState) => !isExpense)}
        />
      </Segment>
    </Fragment>
  );
}

export default EntryForm;
