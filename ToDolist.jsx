import React from 'react';
import { createRoot } from 'react-dom/client';

const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

const TodoList = ({ items, onListClick, onItemClick }) => {
    const handleItemClick = (item, event) => {
        // Write your code here
        if (item.done) {
            event.stopPropagation();
            return;
        }
        onItemClick(item, event);
    };

    return (
        <ul onClick={onListClick}>
            {items.map((item, index) =>
                <TodoItem item={item} key={index} onClick={(event) => handleItemClick(item, event)} />)}
        </ul>
    );
}

const itemsArray = [{ text: 'Buy grocery', done: true },
{ text: 'Play guitar1', done: false },
{ text: 'Romantic dinner1', done: false }
];

const AppToDoList = (props) => <TodoList
    items={itemsArray}
    onListClick={(event) => console.log("List clicked!")}
    onItemClick={(item, event) => { console.log(item, event) }}
/>;

export default AppToDoList;