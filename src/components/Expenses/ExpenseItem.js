import React, {useState} from 'react';
import '../Expenses/ExpenseItem.css';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) =>{
    
    const [newTitle, setNewTitle] = useState('hi');

    const [title, setTitle] = useState(props.title);

    const clickHandle = () =>{
        setTitle(newTitle);
    }

    const ChangeHandler = (event) =>{
        setNewTitle(event.target.value);
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <input type="" value={newTitle} onChange={ChangeHandler}></input>
            <button  onClick={clickHandle} className=''>Change Title</button>

        </Card>
    );
}

export default ExpenseItem;