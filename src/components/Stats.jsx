import React from "react";


function Stats({items}){
    const numItems = items.length;
    const numPacked = items.filter( item => item.packed);
    const percentage = Math.round((numPacked / numItems)*100);

    return(

        <footer className="stats">
            <em> You have {numItems} items on your list, and you have packed X (X%)</em>
        </footer>
    )


}

export default Stats;