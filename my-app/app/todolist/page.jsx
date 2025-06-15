'use client'

import { useState } from "react"

export default function Todo(){

    const [Task,setTask]=useState([
        {
            id:1,Title:"Read Book", Description:"You must read this book",  completed: false
      
        },
        {
            id:2,Title:"Play Tennis", Description:"This exercise improve your health",completed: false
        }
    ]);
    return(        
        <>
       
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",background:"linear-gradient(to right,red,blue)",minHeight:"100vh"}}>
        <strong style={{marginBottom:"22px",color:"white",fontSize:"22px"}}>Todo List</strong>
        {Task.map((item)=>(
            <div key={item.id}
            style={{backgroundColor:item.completed ? "green" : ""}}>
                
            <input type="checkbox" 
            checked={item.completed} 
            onChange={(e)=>{
                setTask(Task.map(t=>
                    t.id===item.id
                    ?{...t,completed: e.target.checked}
                    :t
                ))
            }}/>
            <strong style={{color:"white"}}>{item.Title}</strong>

            </div>
            
      
        ))}
      <button
        type="button"
        style={{
            color: "white",
            backgroundImage: "linear-gradient(to right, #22d3ee, #06b6d4, #0891b2)", // cyan-400 to cyan-600
            border: "none",
            borderRadius: "8px",
            fontWeight: "500",
            fontSize: "14px",
            padding: "10px 20px",
            textAlign: "center",
            marginRight: "3px",
            marginBottom: "8px",
            cursor: "pointer",
            outline: "none",
            marginTop:"11px"
        }}
        >Add1</button>
        </div>
         </>
    )
}