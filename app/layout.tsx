import { AuthProvider } from "@/contexto/AuthContext" 
import { PresupuestoProvider } from "@/contexto/PresupuestoContext" 
import { GastosProvider } from "@/contexto/GastosContext" 
import "bootstrap/dist/css/bootstrap.min.css" 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>
          <PresupuestoProvider>
            <GastosProvider>
              {children}
            </GastosProvider>
          </PresupuestoProvider>
        </AuthProvider>
      </body>
    </html>
  )
} 