import React, { useState } from "react";




function Stats({ items }) {
    const numItems = items.length;
    const numPacked = items.filter(item => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);

    return (

        <footer className="stats">
          
            {percentage === 100 ?
                <em> You have everything packed. You're ready to go! </em> :
                
                <em> 🎒 You have {numItems} items on your list, and you have packed {numPacked} ({percentage}%) ✅ </em>}  <br />

        </footer>
    )


}

export default Stats;