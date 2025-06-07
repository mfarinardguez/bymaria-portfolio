export default function AboutPage() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center p-6 max-w-4xl mx-auto gap-6 text-center md:text-left h-[calc(100vh-64px)]">
      {/* Foto circular */}
      <div className="flex-shrink-0">
        <img
          src="/tu-foto.jpg"
          alt="Foto de María Candelaria Fariña Rodríguez"
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />
      </div>

      {/* Texto presentación */}
      <div className="flex-1">
        <h1 className="text-3xl font-semibold mb-4">Hola, soy <span className="highlight">María Candelaria Fariña Rodríguez</span></h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Soy desarrolladora web apasionada por crear experiencias bonitas y funcionales. Me encanta trabajar con tecnologías modernas como React, Next.js y TypeScript, siempre buscando mejorar mis habilidades y aprender cosas nuevas.
          <br />
          <br />
          En este portfolio encontrarás algunos de mis proyectos destacados y formas para contactarme. ¡Gracias por visitarme! 🌸
        </p>
      </div>
    </main>
  );
}
