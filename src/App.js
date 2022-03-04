import Expense from "./components/Expenses";

function App(){
  let expenses = [
    {
      id: "e1",
      title: "School Fees",
      amount: 250,
      date: new Date(2021, 5, 12)
    },
    {
      id: "e2",
      title: "Home Fees",
      amount: 250,
      date: new Date(2021, 5, 12)

    },
    {
      id: "e3",
      title: "Office Fees",
      amount: 250,
      date: new Date(2021, 5, 12)
    },
    {
      id: "e4",
      title: "Rent Fees",
      amount: 250,
      date: new Date(2021, 5, 12)

    }
  ];


  return (
    <div>
      <h2>Lets Get Started</h2>
      <Expense item={expenses} />
    </div>
  );
}

export default App;