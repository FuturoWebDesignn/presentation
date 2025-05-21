"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor, completa todos los campos obligatorios.")
      return
    }

    // Simulación de envío exitoso
    console.log("Datos del formulario:", formData)
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.")
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    })
  }

  return (
    <section className="py-20 bg-gray-900" id="contacto">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-400">
              Ponte en contacto con nuestros expertos en seguridad para discutir tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre Completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Correo Electrónico
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Nombre de la Empresa
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Servicio de Interés
                    </label>
                    <Select onValueChange={handleSelectChange} value={formData.service}>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        <SelectItem value="threat-protection">Protección contra Amenazas</SelectItem>
                        <SelectItem value="network-security">Seguridad de Red</SelectItem>
                        <SelectItem value="incident-response">Respuesta a Incidentes</SelectItem>
                        <SelectItem value="vulnerability-assessment">Evaluación de Vulnerabilidades</SelectItem>
                        <SelectItem value="cloud-security">Seguridad en la Nube</SelectItem>
                        <SelectItem value="data-protection">Protección de Datos</SelectItem>
                        <SelectItem value="other">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6">
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensaje
                </Button>
              </form>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-6">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-emerald-500 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Correo Electrónico</p>
                    <a href="mailto:contacto@cybershield.com" className="text-emerald-400 hover:text-emerald-300">
                      contacto@cybershield.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-emerald-500 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Llámanos</p>
                    <a href="tel:+34900123456" className="text-emerald-400 hover:text-emerald-300">
                      +34 900 123 456
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-emerald-500 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Visítanos</p>
                    <address className="not-italic text-gray-400">
                      Calle Cibernética 123
                      <br />
                      Planta 5
                      <br />
                      28001 Madrid, España
                    </address>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="font-medium mb-4">Respuesta de Emergencia</h4>
                <p className="text-gray-400 mb-4">
                  Para incidentes de seguridad urgentes, contacta con nuestro equipo de respuesta 24/7:
                </p>
                <a
                  href="tel:+34900999999"
                  className="inline-flex items-center text-red-400 hover:text-red-300 font-medium"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  +34 900 999 999
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
