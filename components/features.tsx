import { CheckCircle } from "lucide-react"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"

export default function Features() {
  const features = [
    "Centro de Operaciones de Seguridad 24/7",
    "Inteligencia de Amenazas en Tiempo Real",
    "Protección Avanzada de Endpoints",
    "Arquitectura Zero Trust",
    "Gestión de Cumplimiento Normativo",
    "Formación en Concienciación de Seguridad",
    "Pruebas de Penetración",
    "Detección y Respuesta Gestionadas",
    "Transformación Segura a la Nube",
    "Evaluación y Gestión de Riesgos",
    "Monitorización Continua",
    "Orquestación de Seguridad Automatizada",
  ]

  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Canvas Reveal Effect Background - subtle version */}
      <div className="absolute inset-0 opacity-30">
        <CanvasRevealEffect
          animationSpeed={0.3} // Reducido de 0.8 a 0.3 para una animación más lenta
          containerClassName="bg-black"
          colors={[
            [0, 100, 0], // Verde oscuro
            [0, 120, 0], // Verde medio
          ]}
          dotSize={1.5}
          opacities={[0.1, 0.2, 0.2, 0.3, 0.3, 0.4, 0.4, 0.5, 0.5, 0.6]}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegir CyberShield?</h2>
            <p className="text-xl text-gray-400">
              Nuestro enfoque integral de ciberseguridad ofrece una protección inigualable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700 relative overflow-hidden">
            {/* Inner card effect */}
            <div className="absolute inset-0 opacity-40">
              <CanvasRevealEffect
                animationSpeed={0.5} // Reducido de 1.5 a 0.5 para una animación más lenta
                containerClassName="bg-black"
                colors={[[0, 150, 0]]} // Verde medio
                dotSize={2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/70" />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-center">Experiencia Líder en Seguridad</h3>
              <p className="text-gray-300 mb-6 text-center">
                Nuestro equipo incluye profesionales certificados en seguridad con experiencia protegiendo empresas
                Fortune 500 y agencias gubernamentales.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-4 py-2 bg-gray-800 rounded-full border border-gray-700 text-sm">
                  Certificado CISSP
                </div>
                <div className="px-4 py-2 bg-gray-800 rounded-full border border-gray-700 text-sm">Certificado CEH</div>
                <div className="px-4 py-2 bg-gray-800 rounded-full border border-gray-700 text-sm">
                  Certificado CISM
                </div>
                <div className="px-4 py-2 bg-gray-800 rounded-full border border-gray-700 text-sm">
                  Certificado OSCP
                </div>
                <div className="px-4 py-2 bg-gray-800 rounded-full border border-gray-700 text-sm">
                  Especialista en Seguridad AWS
                </div>
                <div className="px-4 py-2 bg-gray-800 rounded-full border border-gray-700 text-sm">
                  Experto en Seguridad Azure
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
