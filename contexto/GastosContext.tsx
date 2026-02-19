"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from "react"
import { usePresupuesto } from "./PresupuestoContext"


type Gasto = {
    categoria: string
    monto: number
    fecha: string
}


type GastosType = {
    gastos: Gasto[]
    agregarGasto: (gasto: Gasto) => void
    obtenerGastos: () => void
}

const GastosContext = createContext<GastosType | null>(null)


export function GastosProvider({ children }: { children: ReactNode }) {

    const [gastos, setGastos] = useState<Gasto[]>([])
    const { actualizarGasto } = usePresupuesto()

    const obtenerGastos = async () => {
        const res = await fetch("http://localhost:5000/gasto")
        const data = await res.json()
        setGastos(data)
    }

    const agregarGasto = async (gasto: Gasto) => {

        await fetch("http://localhost:5000/gasto", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(gasto)
        })

        actualizarGasto(gasto.monto)
        obtenerGastos()
    }


    useEffect(() => {
        obtenerGastos()
    }, [])

    return (
        <GastosContext.Provider value={{ gastos, agregarGasto, obtenerGastos }}>
            {children}
        </GastosContext.Provider>
    )
}

export const useGastos = () => {
    const context = useContext(GastosContext)
    if (!context) {
        throw new Error("useGastos debe usarse dentro de GastosProvider")
    }
    return context
} 