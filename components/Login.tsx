"use client"
import Link from "next/link"
import { useState } from "react"
import fromStyle from "@/styles/formStyle.module.css" 

const Login = ({onClose}:any)=>{
    const [email, setEmail] = useState('')
    const [password , setPassword] = useState('')
    const handleLogin = ()=>{
        console.log(`login con correo: ${email}`)
        console.log(`login con password: ${password}`)
    }

    return(
        <div className={fromStyle.modal}>
            <div className={fromStyle.modalContent}>
                <h2>Iniciar Sesión</h2>
                <label htmlFor="email">Correo: </label>
                <input type="email" id="email" value={email} onChange={(e)=>{
                    e.preventDefault()
                    setEmail(e.target.value)
                }}/>
                <label htmlFor="password">Contraseña: </label>
                <input type="password" id="password" value={password} onChange={(e)=>{
                    e.preventDefault()
                    setPassword(e.target.value)
                }}/>
                <button onClick={handleLogin}>Login</button>
                <p>¿No tienes cuenta? <Link href="/pages/registro">Registrate</Link></p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    )
}

export default Login