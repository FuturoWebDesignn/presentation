import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "CyberShield transformó nuestra postura de seguridad. Su equipo identificó vulnerabilidades que desconocíamos e implementó soluciones robustas que nos han mantenido protegidos.",
      author: "Sara Jiménez",
      position: "CIO, Soluciones FinTech S.A.",
    },
    {
      quote:
        "Después de sufrir una brecha de seguridad, contratamos a CyberShield. Su respuesta a incidentes fue excepcional, y las medidas preventivas que implementaron nos han dado confianza en nuestra seguridad.",
      author: "Miguel Chen",
      position: "Director de TI, Corporación Global de Retail",
    },
    {
      quote:
        "Trabajar con CyberShield ha sido un cambio radical para nuestros esfuerzos de cumplimiento. Su experiencia en requisitos regulatorios nos ahorró innumerables horas y aseguró que cumpliéramos con todos los estándares.",
      author: "David Rodríguez",
      position: "Oficial de Cumplimiento, Sistemas de Salud",
    },
  ]

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que Dicen Nuestros Clientes</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Confiado por organizaciones de diversas industrias para ofrecer soluciones de seguridad excepcionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-emerald-500 mb-4" />
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-400">{testimonial.position}</div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-x-8 gap-y-4">
            <div className="text-xl font-bold text-gray-400">Confían en Nosotros:</div>
            <div className="text-xl font-bold text-gray-500">Fortune 500</div>
            <div className="text-xl font-bold text-gray-500">Finanzas Globales</div>
            <div className="text-xl font-bold text-gray-500">Sector Salud</div>
            <div className="text-xl font-bold text-gray-500">Gobierno</div>
            <div className="text-xl font-bold text-gray-500">Tecnología</div>
          </div>
        </div>
      </div>
    </section>
  )
}
