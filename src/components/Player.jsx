import { useState } from "react";

export default function Player({name, symbol}){

   const [isEditidin, SetIsEditing] = useState(false);

   function handleEditClick (){
    SetIsEditing((editing)=>!editing);
   }

   let playerName = <span className="player-name">{name}</span>
//    let btnCaption = "Edit"

   if (isEditidin){
    playerName = <input type="text" required value={name}/>;
    // btnCaption = "Save"
   }
    return(
        <li>
        <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditidin ? "Save" : "Edit"}</button>
      </li>
    )
}