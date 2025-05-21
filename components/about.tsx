"use client"

import { Users, Award, TrendingUp, Clock } from "lucide-react"
import { useState } from "react"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"

export default function About() {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-emerald-500" />,
      value: "500+",
      label: "Clientes Protegidos",
    },
    {
      icon: <Award className="h-8 w-8 text-emerald-500" />,
      value: "15+",
      label: "Años de Experiencia",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-emerald-500" />,
      value: "99.9%",
      label: "Tasa de Detección",
    },
    {
      icon: <Clock className="h-8 w-8 text-emerald-500" />,
      value: "<15min",
      label: "Tiempo de Respuesta",
    },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre CyberShield</h2>
            <p className="text-xl text-gray-400">Un socio de confianza en ciberseguridad desde 2008</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
              <p className="text-gray-300 mb-6">
                En CyberShield, nuestra misión es proteger a las organizaciones de las amenazas cibernéticas mediante
                soluciones de seguridad innovadoras, orientación experta y estrategias de defensa proactivas. Creemos
                que la ciberseguridad robusta no se trata solo de tecnología, sino de personas, procesos y vigilancia
                continua.
              </p>
              <p className="text-gray-300">
                Trabajamos como una extensión de tu equipo, proporcionando la experiencia y los recursos necesarios para
                asegurar tus activos digitales en un panorama de amenazas cada vez más complejo.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Nuestro Enfoque</h3>
              <p className="text-gray-300 mb-6">
                Adoptamos un enfoque holístico de la ciberseguridad, combinando tecnología avanzada con experiencia
                humana para crear sistemas de defensa en capas que protegen contra amenazas conocidas y emergentes.
              </p>
              <p className="text-gray-300">
                Nuestra metodología incluye monitorización continua, integración de inteligencia de amenazas y
                capacidades de respuesta rápida para garantizar que tu organización permanezca segura incluso cuando el
                panorama de amenazas evoluciona.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className="absolute inset-0">
          <CanvasRevealEffect
            animationSpeed={0.8} // Reducido de 2.5 a 0.8 para una animación más lenta
            containerClassName="bg-black"
            colors={[[0, 180, 0]]} // Verde brillante
            dotSize={2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
        </div>
      )}

      <div className="relative z-10">
        <div className="flex justify-center mb-4">{stat.icon}</div>
        <div className="text-3xl font-bold mb-2">{stat.value}</div>
        <div className="text-gray-400">{stat.label}</div>
      </div>
    </div>
  )
}
