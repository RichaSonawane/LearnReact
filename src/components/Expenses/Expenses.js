import React,{useState} from 'react';
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';

function Expenses(props){

 
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    //console.log("selected year", selectedYear);

  };

  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filterYear;
  })

  let expensesContent= <p>No expense found.</p>

  if(filteredExpenses.length>0){
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selected={filterYear}
            onFilterChange={filterChangeHandler}
          />
          {expensesContent}
        </Card>
      </div>
    );
};
export default Expenses