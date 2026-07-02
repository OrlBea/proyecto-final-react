function AboutPage() {
  return (
    <section className="page text-page">
      <h1>🎮Game Zone🎮</h1>
      <p class="descripcion-proyecto">
        <strong>GameZone</strong> es una aplicación web frontend desarrollada con React como proyecto final del curso. 
        Su propósito es ofrecer una plataforma donde los usuarios puedan descubrir y consultar información sobre los videojuegos de la saga <strong>The Legend of Zelda</strong> utilizando una API pública. 
        La aplicación integra funcionalidades como búsqueda dinámica, navegación entre páginas, visualización de detalles, gestión de favoritos con almacenamiento local y un diseño responsivo. 
        Durante su desarrollo se aplicaron los principales conceptos de React, incluyendo componentes reutilizables, Props, Hooks, React Router, Context API, consumo de APIs y persistencia de datos, cumpliendo con los requisitos técnicos establecidos para el proyecto final.
      </p>
      <br />
      <h2><strong>Conceptos aplicados</strong></h2>
      <ul>
        <li>Componentes y props</li>
        <li>useState y eventos</li>
        <li>useEffect para consumo de API</li>
        <li>useMemo, useCallback y custom hooks</li>
        <li>React Router DOM v6</li>
        <li>Context API y localStorage</li>
      </ul>
    </section>
  );
}

export default AboutPage;
