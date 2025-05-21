"use client"

import { Shield, Lock, AlertTriangle, Search, Server, Database, Code, Fingerprint } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { useState } from "react"

export default function Services() {
  const services = [
    {
      icon: <Shield className="h-10 w-10 text-emerald-500" />,
      title: "Protección contra Amenazas",
      description:
        "Detección y prevención avanzada de amenazas para proteger tus sistemas contra malware, ransomware y ataques de día cero.",
    },
    {
      icon: <Lock className="h-10 w-10 text-emerald-500" />,
      title: "Seguridad de Red",
      description: "Asegura tu infraestructura de red con firewalls, VPNs y sistemas de prevención de intrusiones.",
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-emerald-500" />,
      title: "Respuesta a Incidentes",
      description: "Respuesta rápida a incidentes de seguridad con recuperación integral y análisis forense.",
    },
    {
      icon: <Search className="h-10 w-10 text-emerald-500" />,
      title: "Evaluación de Vulnerabilidades",
      description: "Identifica y remedia vulnerabilidades de seguridad antes de que puedan ser explotadas.",
    },
    {
      icon: <Server className="h-10 w-10 text-emerald-500" />,
      title: "Seguridad en la Nube",
      description: "Protege tu infraestructura y aplicaciones en la nube con soluciones de seguridad especializadas.",
    },
    {
      icon: <Database className="h-10 w-10 text-emerald-500" />,
      title: "Protección de Datos",
      description: "Salvaguarda datos sensibles con cifrado, controles de acceso y prevención de pérdida de datos.",
    },
    {
      icon: <Code className="h-10 w-10 text-emerald-500" />,
      title: "Desarrollo Seguro",
      description: "Integra la seguridad en tu ciclo de desarrollo con revisiones de código y pruebas de seguridad.",
    },
    {
      icon: <Fingerprint className="h-10 w-10 text-emerald-500" />,
      title: "Gestión de Identidad",
      description:
        "Implementa sistemas robustos de autenticación y control de acceso para proteger las identidades de los usuarios.",
    },
  ]

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" id="servicios">
            Nuestros Servicios de Ciberseguridad
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Protección integral para los activos digitales más valiosos de tu organización
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Card
      className="bg-gray-800 border-gray-700 hover:border-emerald-500 transition-all duration-300 relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className="absolute inset-0 z-0">
          <CanvasRevealEffect
            animationSpeed={1} // Reducido de 3 a 1 para una animación más lenta
            containerClassName="bg-black"
            colors={[
              [0, 100, 0], // Verde oscuro
              [0, 180, 0], // Verde medio
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        </div>
      )}

      <CardHeader className="pb-2 relative z-10">
        <div className="mb-4">{service.icon}</div>
        <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <CardDescription className="text-gray-400">{service.description}</CardDescription>
      </CardContent>
    </Card>
  )
}
