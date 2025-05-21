"use client"

import { Button } from "@/components/ui/button"
import { Shield, Lock, ArrowRight } from "lucide-react"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Canvas Reveal Effect Background */}
      <div className="absolute inset-0">
        <CanvasRevealEffect
          animationSpeed={0.8} // Reducido de 2 a 0.8 para una animación más lenta
          containerClassName="bg-black"
          colors={[
            [0, 180, 0], // Verde brillante
            [0, 220, 0], // Verde aún más brillante
            [100, 255, 100], // Verde claro
          ]}
          dotSize={3}
          opacities={[0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1]}
        />
        {/* Overlay gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-6">
          <Shield className="h-12 w-12 text-emerald-500 mr-3" />
          <h1 className="text-3xl font-bold tracking-tight">CyberShield</h1>
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold text-center max-w-4xl mx-auto leading-tight">
          Protección Avanzada para tus Activos Digitales
        </h2>

        <p className="mt-6 text-xl text-gray-300 text-center max-w-2xl mx-auto">
          Soluciones integrales de ciberseguridad para proteger tu empresa de las amenazas emergentes en el panorama
          digital actual.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-md text-lg"
            onClick={() => (window.location.href = "#servicios")}
          >
            Protégete Ahora
          </Button>
          <Button
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-6 rounded-md text-lg"
            onClick={() => (window.location.href = "#contacto")}
          >
            Solicitar Consulta
          </Button>
        </div>

        <div className="mt-16 flex items-center justify-center">
          <div className="flex items-center space-x-2 text-emerald-500">
            <Lock className="h-5 w-5" />
            <span>Certificado ISO 27001</span>
          </div>
          <span className="mx-4 text-gray-600">|</span>
          <div className="flex items-center space-x-2 text-emerald-500">
            <Shield className="h-5 w-5" />
            <span>Cumplimiento NIST</span>
          </div>
          <span className="mx-4 text-gray-600">|</span>
          <div className="flex items-center space-x-2 text-emerald-500">
            <ArrowRight className="h-5 w-5" />
            <span>Monitoreo 24/7</span>
          </div>
        </div>
      </div>
    </section>
  )
}
