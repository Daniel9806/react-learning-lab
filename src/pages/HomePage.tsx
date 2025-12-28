import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <section className="page">
      <h1 className="title">React Learning Lab</h1>
      <p className="subtitle">
        Este proyecto está armado como un laboratorio: cada módulo tiene ejemplos interactivos para que cambies código y
        observes el resultado.
      </p>

      <div className="grid">
        <Link className="card" to="/modules/state-props">
          <div className="cardTitle">Estado + Props</div>
          <div className="cardBody">Composición, props, estado local, lifting state up.</div>
        </Link>
        <Link className="card" to="/modules/effects">
          <div className="cardTitle">Efectos</div>
          <div className="cardBody">useEffect, cleanup, dependencias, sincronización.</div>
        </Link>
        <Link className="card" to="/modules/forms">
          <div className="cardTitle">Formularios</div>
          <div className="cardBody">Controlled components, validación, UX.</div>
        </Link>
        <Link className="card" to="/modules/fetch">
          <div className="cardTitle">Data Fetching</div>
          <div className="cardBody">fetch, loading/error, abort, cache simple.</div>
        </Link>
        <Link className="card" to="/modules/context">
          <div className="cardTitle">Context</div>
          <div className="cardBody">Context API, providers, evitar rerenders.</div>
        </Link>
        <Link className="card" to="/modules/performance">
          <div className="cardTitle">Performance</div>
          <div className="cardBody">memo, useMemo, useCallback, render tracking.</div>
        </Link>
      </div>

      <div className="panel">
        <div className="panelTitle">Cómo practicar</div>
        <div className="panelBody">
          <ol className="list">
            <li>Entrá a un módulo.</li>
            <li>Cambiá una cosa (por ejemplo dependencias de un hook, props, etc.).</li>
            <li>Observá el comportamiento y tratá de explicar por qué pasa.</li>
            <li>Volvé a “dejarlo bien” y anotá la regla mental que te sirve.</li>
          </ol>
        </div>
      </div>
    </section>
  )
}
