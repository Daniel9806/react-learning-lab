import { useEffect, useMemo, useState } from 'react'

type ClockState = {
  now: Date
  running: boolean
}

export default function EffectsPage() {
  const [clock, setClock] = useState<ClockState>({ now: new Date(), running: true })
  const [query, setQuery] = useState('react')
  const [debounced, setDebounced] = useState(query)

  useEffect(() => {
    if (!clock.running) return

    const id = window.setInterval(() => {
      setClock((c) => ({ ...c, now: new Date() }))
    }, 1000)

    return () => window.clearInterval(id)
  }, [clock.running])

  useEffect(() => {
    const id = window.setTimeout(() => setDebounced(query), 350)
    return () => window.clearTimeout(id)
  }, [query])

  const time = useMemo(() => clock.now.toLocaleTimeString(), [clock.now])

  return (
    <section className="page">
      <h1 className="title">Efectos (useEffect)</h1>
      <p className="subtitle">useEffect sirve para sincronizar con algo externo: timers, red, DOM, subscriptions.</p>

      <div className="grid2">
        <div className="panel">
          <div className="panelTitle">1) Timer + cleanup</div>
          <div className="panelBody">
            <div className="panelRow">
              <div className="pill">Hora: {time}</div>
              <button className="button" onClick={() => setClock((c) => ({ ...c, running: !c.running }))}>
                {clock.running ? 'Pausar' : 'Reanudar'}
              </button>
            </div>
            <div className="muted">
              Ejercicio: remové el cleanup y mirá qué pasa al pausar/reanudar. Después arreglalo.
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panelTitle">2) Debounce (dependencias)</div>
          <div className="panelBody">
            <div className="field">
              <label className="label" htmlFor="q">Buscar</label>
              <input id="q" className="input" value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
            <div className="panelRow">
              <div className="pill">debounced: {debounced}</div>
            </div>
            <div className="muted">
              Ejercicio: cambiá el delay, probá usar `useMemo` para derivar valores, y analizá cuándo se ejecuta el effect.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
