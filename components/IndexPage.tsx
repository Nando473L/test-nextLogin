'use client'
import { useState } from "react"
import Login from "./Login"
import Registro from "./Registro"

const IndexPage = ()=>{
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)

    const handelCloseLogin = ()=>{
        setShowLogin(false)
    }

    const handelCloseRegister = ()=>{
        setShowRegister(false)
    }

    return(
        <div>
            <button onClick={()=>{
                setShowLogin(true)
                
            }}>Iniciar Sesion</button>

            <br/>

            <button onClick={()=>{
                setShowRegister(true)
            }}>Registrarse</button>

            {showLogin && <Login onClose={handelCloseLogin}/>}
            {showRegister && <Registro onClose={handelCloseRegister}/>}
        </div>
    )
}

export default IndexPage