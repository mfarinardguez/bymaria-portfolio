"use client";

import { Card } from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";

type Proyecto = {
  nombre: string;
  descripcion: string;
  githubUrl: string;
};

const proyectos = [
  {
    name: "E-commerce con Angular + Backend personalizado",
    description: "Sitio web que permite comprar y vender productos de kpop a través de internet.",
    url: "https://github.com/lariarguez/ecommerce.git",
  },
  { 
    name: "Trabajo Fin de Grado (Vue.js + Java Spring Boot + MongoDB)",
    description: "Herramienta web para planificar tus vacaciones día a día.",
    url: "https://github.com/lariarguez/touristic-route-designer.git",
  },
  {
    name: "Pokedex (HTML + CSS + Javacript)",
    description: "Pokemon",
    url: "https://github.com/lariarguez/pokedex.git"
  }
];

export default function ProyectosPage() {
  return (
    <div className="min-h-screen bg-pink-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        🌸 Mis Proyectos 🌸
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {proyectos.map((proyecto, index) => (
          <Card
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
          >
            <div>
              <h2 className="text-xl font-semibold text-pink-700 mb-2">
                {proyecto.name}
              </h2>
              <p className="text-gray-600 text-sm">{proyecto.description}</p>
            </div>
            <div className="mt-4">
              <a
                href={proyecto.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-pink-600 hover:underline"
              >
                <FaGithub className="w-5 h-5 mr-2" />
                Ver en GitHub
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}