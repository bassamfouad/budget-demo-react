import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EnteryLines from "./components/EnteryLines";
import MainHeader from "./components/MainHeader";
import ModelEdit from "./components/ModelEdit";
import NewEntryForm from "./components/NewEntryForm";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState("");
  const [incomeTotal, setIncomeTotal] = useState("");
  const [expenseTotal, setExpenseTotal] = useState("");

  const [total, setTotal] = useState("");
  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);

      resetEntry();
    }
  }, [isOpen]);
  useEffect(() => {
    let TotalIncome = 0;
    let totalExpense = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpense += Number(entry.value));
      }
      return (TotalIncome += Number(entry.value));
    });
    setTotal(TotalIncome - totalExpense);
    setExpenseTotal(totalExpense);
    setIncomeTotal(TotalIncome);
  }, [entries]);
  function resetEntry() {
    setDescription("");
    setValue("");
    setIsExpense(true);
  }
  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);

    setEntries(result);
    resetEntry();
  }

  function addEntry() {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    setEntries(result);
    resetEntry();
  }
  function editEntry(id) {
    if (id) {
      const index = entries.findIndex((entery) => entery.id);
      const entery = entries[index];
      setEntryId(id);
      setDescription(entery.description);
      setValue(entery.value);
      setIsExpense(entery.isExpense);
      setIsOpen(true);
    }
    resetEntry();
  }
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance titile="Your Balance" value={total} size="tiny" />
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />
      <MainHeader title="History" type="h3" />
      <EnteryLines
        entries={entries}
        deleteEntry={deleteEntry}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        editEntry={editEntry}
      />
      <MainHeader title="Add New Transaction" type="h3" />

      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ModelEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    description: "Work Income",
    value: 100000,
    isExpense: false,
    id: "1",
  },
  {
    description: "Water Bill",
    value: 20,
    isExpense: true,
    id: "2",
  },
  {
    description: "Rent",
    value: 300,
    isExpense: true,
    id: "3",
  },
  {
    description: "Power Bill",
    value: 25,
    isExpense: true,
    id: "4",
  },
];
