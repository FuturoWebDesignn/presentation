"use client"

import { useEffect } from "react"

export default function ScrollToSection() {
  useEffect(() => {
    // Función para manejar los clics en enlaces internos
    const handleInternalLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Verificar si es un enlace y si tiene un hash
      if (target.tagName === "A") {
        const href = (target as HTMLAnchorElement).getAttribute("href")

        if (href && href.startsWith("#")) {
          e.preventDefault()
          const id = href.substring(1)
          const element = document.getElementById(id)

          if (element) {
            // Desplazamiento suave a la sección
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })

            // Actualizar la URL sin recargar la página
            window.history.pushState(null, "", href)
          }
        }
      }
    }

    // Añadir el event listener
    document.addEventListener("click", handleInternalLinkClick)

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      document.removeEventListener("click", handleInternalLinkClick)
    }
  }, [])

  return null
}
