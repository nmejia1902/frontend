"use client" 

import { useState } from "react" 
import { usePresupuesto } from "@/contexto/PresupuestoContext" 
import { useRouter } from "next/navigation" 

export default function Presupuesto(){ 

const { presupuesto, totalGastado, setPresupuesto } = usePresupuesto() 
const [valor, setValor] = useState("") 
const router = useRouter() 

const porcentaje = presupuesto > 0 ? (totalGastado / presupuesto) * 100 : 0 

const guardar = () => { 
setPresupuesto(Number(valor)) 
setValor("") 
} 

    return (
        <div className="container mt-5">

            <div className="card shadow p-4">
                <h4 className="mb-3">Ingrese el presupuesto mensual</h4>

                <div className="d-flex gap-2">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="presupuesto mensual"
                        value={valor}
                        onChange={e => setValor(e.target.value)}
                    />

                    <button
                        className="btn btn-success"
                        onClick={guardar}
                    >
                        Guardar
                    </button>
                </div>

                <hr />

                <p><strong>Presupuesto:</strong> Lps. {presupuesto}</p>
                <p><strong>Total gastado:</strong> Lps. {totalGastado}</p>

                {porcentaje >= 80 && porcentaje < 100 && (
                    <div className="alert alert-warning">
                        Alcanzo el 80% del presupuesto
                    </div>
                )}

                {porcentaje >= 100 && (
                    <div className="alert alert-danger">
                        Has superado el limite del presupuesto, debe ajustar gastos
                    </div>
                )}

                <button
                    className="btn btn-primary mt-3"
                    onClick={() => router.push("/gastos")}
                >
                    Ir a Registro de Gastos
                </button>
            </div>

        </div>
    )
} 