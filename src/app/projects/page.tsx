const proyectos = [
  {
    name: "Proyecto Sakura",
    description: "Animación floral en React",
    url: "https://github.com/tuusuario/proyecto-sakura",
  },
];

export default function ProyectosPage() {
  return (
    <section className="projects">
      <h2>Proyectos</h2>
      <div className="project-grid">
        {proyectos.map((p) => (
          <div key={p.name} className="project-card">
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <a href={p.url} target="_blank">Ver proyecto</a>
          </div>
        ))}
      </div>
    </section>
  );
}