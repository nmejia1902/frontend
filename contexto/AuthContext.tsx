"use client" 

import { createContext, useContext, useState, ReactNode } from "react" 
import { useRouter } from "next/navigation" 

type AuthType = { 
usuario: string 
autenticado: boolean 
iniciarSesion: (user: string, pass: string) => void 
cerrarSesion: () => void 
} 

const AuthContext = createContext<AuthType | null>(null) 

export function AuthProvider({ children }: { children: ReactNode }) { 

const [usuario, setUsuario] = useState<string>(""); 
const [autenticado, setAutenticado] = useState<boolean>(false); 
const router = useRouter(); 

const iniciarSesion = (user: string, pass: string) => { 
if(user === "admin" && pass === "admin123"){ 
setUsuario(user); 
setAutenticado(true); 
router.push("/presupuesto") 
}else{ 
alert("credenciales incorrectas") 
} 
} 

const cerrarSesion = () => { 
setUsuario(""); 
setAutenticado(false); 
router.push("/login") 
} 

return( 
<AuthContext.Provider value={{usuario, autenticado, iniciarSesion, cerrarSesion}}> 
{children} 
</AuthContext.Provider> 
) 
} 

export const useAuth = () => { 
const context = useContext(AuthContext) 
if(!context){ 
throw new Error("useAuth debe usarse dentro de AuthProvider")
} 
return context 
} 