"use client"
import { useState } from "react"

const Counter = ()=>{
    const [cont, setCont] = useState(0)
    const [showMessage, setShowMessage]=useState(false)

    return(
        <>
            <h1>El contador es: {cont}</h1>
            <button onClick={()=>{
                setCont(cont+1)
            }}>  +  </button>
            <br/>
            <button onClick={()=>{
                setCont(0)
            }}>  Reiniciar  </button>
            <br/>
            <br/>
            <button onClick={()=>{
                setShowMessage(!showMessage)
            }}> {!showMessage? "Mostrar Texto": "Ocultar Texto"}</button>
            {
                showMessage && <p>Hola mundo</p>
            }
        </>
    )
}

export default Counter