import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="flex flex-col md:flex-row items-center justify-around p-6 max-w-7xl mx-auto gap-6 text-center md:text-left">
        {/* Foto circular */}
        <div className="flex-shrink-0">
          <Image  
            src="/images/maria.jpeg"
            alt="Foto de María Candelaria Fariña Rodríguez"
            width={250}
            height={250}
            className="w-60 h-60 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Texto presentación */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-4 text-white">Hola, soy <span className="highlight">María Candelaria Fariña Rodríguez</span></h1>
          <p className="text-lg text-white leading-relaxed">
            <br />
            Soy Ingeniera Informática con la mención en Tecnologías de la Información con más de 4 años de experiencia en desarrollo Full stack, creando aplicaciones web robustas, escalables y centradas en el usuario. He trabajado con tecnologías Frontend como Angular, React, TypeScript, JavaScript, y Backend como Node.js, GraphQL y Firebase. Además cuento con conocimientos de Java, Spring, Spring Boot y MongoDB.
            <br />
            <br />
            He participado en todas las fases del ciclo de vida del software, desde la definición de requisitos y arquitectura hasta el desarrollo, pruebas y despliegue en producción. Cuento con conocimientos en UX/UI, lo que me permite diseñar y construir interfaces atractivas e intuitivas, alineadas con los objetivos de negocio y las necesidades del usuario.
            Apasionada por el código limpio, las buenas prácticas y la innovación tecnológica, busco seguir aportando valor en equipos dinámicos y proyectos de alto impacto.
            <br />
            <br />
            Actualmente estoy abierto a nuevas oportunidades que me permitan seguir creciendo como Desarrolladora FrontEnd o Desarrolladora Full Stack.
            <br />
            <br />
            En este portfolio encontrarás algunos de mis proyectos y formas para contactarme. ¡Gracias por visitarme!
          </p>
        </div>
        
      </div>
    </main>
  );
}
