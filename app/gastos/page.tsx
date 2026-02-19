"use client" 

import { useState } from "react" 
import { useGastos } from "@/contexto/GastosContext" 
import { usePresupuesto } from "@/contexto/PresupuestoContext" 
import { useRouter } from "next/navigation" 

export default function Gastos(){ 

const { agregarGasto, gastos } = useGastos() 
const { presupuesto } = usePresupuesto() 
const router = useRouter() 

const [categoria, setCategoria] = useState("") 
const [monto, setMonto] = useState("") 
const [fecha, setFecha] = useState("") 

const guardar = () => { 
agregarGasto({ 
categoria, 
monto: Number(monto), 
fecha 
}) 

setCategoria("") 
setMonto("") 
setFecha("") 
} 

    return (
        <div className="container mt-5">

            <div className="card shadow p-4">

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4>Registro de gastos</h4>

                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => router.push("/presupuesto")}
                    >
                        Volver a Presupuesto
                    </button>
                </div>

                <p><strong>Presupuesto:</strong> Lps. {presupuesto}</p>

                <div className="row mb-3">
                    <div className="col">
                        <input
                            className="form-control"
                            placeholder="Categoria"
                            value={categoria}
                            onChange={e => setCategoria(e.target.value)}
                        />
                    </div>

                    <div className="col">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Monto"
                            value={monto}
                            onChange={e => setMonto(e.target.value)}
                        />
                    </div>

                    <div className="col">
                        <input
                            type="date"
                            className="form-control"
                            value={fecha}
                            onChange={e => setFecha(e.target.value)}
                        />
                    </div>

                    <div className="col">
                        <button
                            className="btn btn-success w-100"
                            onClick={guardar}
                        >
                            Guardar
                        </button>
                    </div>
                </div>

                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>Categoria</th>
                            <th>Cantidad</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gastos.map((g, i) => (
                            <tr key={i}>
                                <td>{g.categoria}</td>
                                <td>{g.monto}</td>
                                <td>{g.fecha}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    )
} 