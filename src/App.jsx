import { useEffect, useState } from "react";
import Header from "./Components/Header";
import NewEntry from "./Components/NewEntry";
import Dashboard from "./Components/Dashboard";

function App() {
  const [entries, setEntries] = useState([]);
  const [activeType, setActiveType] = useState("income");
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [netBalance, setNetBalance] = useState(0);

  useEffect(() => {
    const savedEntries = localStorage.getItem("entriesData");
    if (savedEntries) {
      const parsedEntries = JSON.parse(savedEntries);
      setEntries(parsedEntries);
      updateStatus(parsedEntries);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("entriesData", JSON.stringify(entries));
    updateStatus(entries);
  }, [entries]);

  function updateStatus() {
    const income = entries
      .filter((e) => e.type === "income")
      .reduce((sum, e) => sum + Number(e.amount), 0);
    const expense = entries
      .filter((e) => e.type === "expense")
      .reduce((sum, e) => sum + Number(e.amount), 0);
    setTotalIncome(income);
    setTotalExpense(expense);
    setNetBalance(income - expense);
  }

  function handleDelete(id) {
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    setEntries(updatedEntries);
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#021627] via-[#0E3B43] to-[#2A6F97] flex flex-col items-center">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-6 w-[90%] mt-6">
        <Header
          h1={"Total Income"}
          amount={totalIncome}
          bgColor="bg-gradient-to-r from-[#00C9A7] to-[#92FE9D]"
          img={<i className="fa-solid fa-arrow-trend-up fa-2x"></i>}
        />
        <Header
          h1={"Total Expense"}
          amount={totalExpense}
          bgColor="bg-gradient-to-r from-[#FF6A6A] to-[#FF3E7F]"
          img={<i className="fa-solid fa-arrow-trend-down lg:fa-2x"></i>}
        />
        <Header
          h1={"Net Balance"}
          amount={netBalance}
          bgColor="bg-gradient-to-r from-[#0072FF] to-[#00C6FF]"
          img={<i className="fa-solid fa-sack-dollar lg:fa-2x"></i>}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-8 w-[95%] md:w-auto items-center justify-center">
        <NewEntry
          img1={<i className="fa-solid fa-arrow-trend-up"></i>}
          img2={<i className="fa-solid fa-arrow-trend-down"></i>}
          activeType={activeType}
          setActiveType={setActiveType}
          setEntries={setEntries}
          entries={entries}
        />
        <Dashboard entries={entries} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
