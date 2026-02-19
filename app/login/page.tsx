"use client" 

import { useState } from "react" 
import { useAuth } from "@/contexto/AuthContext" 

export default function Login(){ 

const { iniciarSesion } = useAuth() 
const [usuario, setUsuario] = useState("") 
const [clave, setClave] = useState("") 

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">

                    <div className="card shadow">
                        <div className="card-body">
                            <h4 className="text-center mb-4">
                                Inicio de Sesion
                            </h4>

                            <input
                                className="form-control mb-3"
                                placeholder="Usuario"
                                value={usuario}
                                onChange={e => setUsuario(e.target.value)}
                            />

                            <input
                                type="password"
                                className="form-control mb-3"
                                placeholder="Clave"
                                value={clave}
                                onChange={e => setClave(e.target.value)}
                            />

                            <button
                                className="btn btn-primary w-100"
                                onClick={() => iniciarSesion(usuario, clave)}
                            >
                                Iniciar Sesion
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
} 