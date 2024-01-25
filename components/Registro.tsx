"use client"
import Link from "next/link"
import { useState } from "react"
import fromStyle from "@/styles/formStyle.module.css" 

const Registro = ({onClose}:any)=>{
    const [email, setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [name, setName] = useState('')
    const handleRegister = ()=>{
        console.log(`login con correo: ${email}`)
        console.log(`login con password: ${password}`)
    }

    return(
        <div className={fromStyle.modal}>
            <div className={fromStyle.modalContent}>
                <h2>Registrarse</h2>
                <label htmlFor="name">Nombre: </label>
                <input type="name" id="name" value={name} onChange={(e)=>{
                    e.preventDefault()
                    setName(e.target.value)
                }}/>
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
                <button onClick={handleRegister}>Registrar</button>
                <p>¿Ya tienes cuenta? <Link href="/">Inicia Sesión</Link></p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    )
}

export default Registro