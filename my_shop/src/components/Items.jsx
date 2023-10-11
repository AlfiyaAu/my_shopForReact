import React from "react";
import Item from "./Item";

export default function Items(props){
    return(
        <main> 
            {props.allItems.map(el=>(
                // <h1> {el.title}</h1>
                <Item key={el.id} item2={el} />
            ))}
        </main>
    );
}