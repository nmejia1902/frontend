"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type PresupuestoType = {
    presupuesto: number
    totalGastado: number
    setPresupuesto: (valor: number) => void
    actualizarGasto: (monto: number) => void
}

const PresupuestoContext = createContext<PresupuestoType | null>(null)

export function PresupuestoProvider({ children }: { children: ReactNode }) {

    const [presupuesto, setPresupuestoState] = useState(0)
    const [totalGastado, setTotalGastado] = useState(0)

    const setPresupuesto = (valor: number) => {
        setPresupuestoState(valor)
        setTotalGastado(0)
    }

    const actualizarGasto = (monto: number) => {
        setTotalGastado((prev) => prev + monto)
    }

    return (
        <PresupuestoContext.Provider
            value={{ presupuesto, totalGastado, setPresupuesto, actualizarGasto }}>
            {children}
        </PresupuestoContext.Provider>
    )
}

export const usePresupuesto = () => {
    return useContext(PresupuestoContext)!
} 