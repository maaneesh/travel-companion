import React from "react";
import Item from "./item";


function PackingList({ items, onDeleteItem }) {

    return (
        <div className="list">
            <ul>
                {items.map((item, onDeleteItem, onToggle) => (
                    <Item item={item} key={item.id} onDeleteItem={onDeleteItem} />
                ))}
            </ul>
        </div>

    )
}

export default PackingList;