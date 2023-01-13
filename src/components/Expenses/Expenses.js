import React,{useState} from 'react';
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

function Expenses(props){

 
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    //console.log("selected year", selectedYear);

  };

  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filterYear;
  })

    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selected={filterYear}
            onFilterChange={filterChangeHandler}
          />
          <ExpensesList items={filteredExpenses}/>
        </Card>
      </div>
    );
};
export default Expenses