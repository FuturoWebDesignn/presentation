import { Shield, Twitter, Linkedin, Facebook, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-950 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-emerald-500 mr-3" />
              <h3 className="text-xl font-bold">CyberShield</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Soluciones avanzadas de ciberseguridad para proteger tu empresa en un panorama de amenazas en evolución.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-emerald-500">
                  Protección contra Amenazas
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-emerald-500">
                  Seguridad de Red
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-emerald-500">
                  Respuesta a Incidentes
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-emerald-500">
                  Evaluación de Vulnerabilidades
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-emerald-500">
                  Seguridad en la Nube
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-emerald-500">
                  Protección de Datos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500">
                  Liderazgo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500">
                  Noticias y Prensa
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500">
                  Socios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-emerald-500">
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500">
                  Whitepapers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500">
                  Casos de Estudio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500">
                  Herramientas de Seguridad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500">
                  Base de Conocimiento
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} CyberShield. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-emerald-500 text-sm">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-500 hover:text-emerald-500 text-sm">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-500 hover:text-emerald-500 text-sm">
                Política de Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
