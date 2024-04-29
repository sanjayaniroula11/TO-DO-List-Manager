import React from "react";
import { GiTireIronCross } from "react-icons/gi";

export const TodoMain = (props) => {


    return (
        <>
            <li><p onClick={()=>{
                props.onSelect(props.id);
            }}
            className="delete">⚔️</p>{props.text}</li>

        </>
    );
};

export default TodoMain;