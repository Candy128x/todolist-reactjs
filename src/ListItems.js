import React from 'react';
import './ListItems.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';


function ListItems(props) {

    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                <input type="text" id={item.key} value={item.text}
                    onChange={ (e) => {props.setUpdate(e.target.value, item.key)} }/>
                <span><FontAwesomeIcon className="faicons" icon='trash'
                    onClick={ () => props.deleteItem(item.key) }/></span>
            </p>
        </div>
    })   // Array.prototype.map()

    return (
        // <h1>From ListItems.js</h1>
        <div>
            <FlipMove duration={500} easing="ease-in-out">{listItems}</FlipMove>
        </div>
    )
}
export default ListItems;