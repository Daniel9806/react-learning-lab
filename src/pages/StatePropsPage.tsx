import { useMemo, useState } from 'react'

type CounterProps = {
  value: number
  onIncrement: () => void
  step: number
}

function Counter({ value, onIncrement, step }: CounterProps) {
  return (
    <div className="panelRow">
      <div className="pill">value: {value}</div>
      <button className="button" onClick={onIncrement}>
        +{step}
      </button>
    </div>
  )
}

export default function StatePropsPage() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')

  const greeting = useMemo(() => {
    const n = name.trim()
    return n.length > 0 ? `Hola, ${n}` : 'Escribí tu nombre'
  }, [name])

  return (
    <section className="page">
      <h1 className="title">Estado + Props</h1>
      <p className="subtitle">
        Practicá composición y flujo de datos: el padre guarda el estado y el hijo recibe props.
      </p>

      <div className="grid2">
        <div className="panel">
          <div className="panelTitle">1) Lifting state up</div>
          <div className="panelBody">
            <div className="field">
              <label className="label" htmlFor="step">Step</label>
              <input
                id="step"
                className="input"
                type="number"
                value={step}
                min={1}
                max={10}
                onChange={(e) => setStep(Number(e.target.value || 1))}
              />
            </div>

            <Counter value={count} step={step} onIncrement={() => setCount((c) => c + step)} />
            <div className="muted">Tip: cambiá el `step` y mirá cómo cambia el comportamiento sin tocar el hijo.</div>
          </div>
        </div>

        <div className="panel">
          <div className="panelTitle">2) Estado controlado</div>
          <div className="panelBody">
            <div className="field">
              <label className="label" htmlFor="name">Nombre</label>
              <input
                id="name"
                className="input"
                value={name}
                placeholder="Daniel"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="panelRow">
              <div className="pill">{greeting}</div>
              <button className="buttonSecondary" onClick={() => setName('')}>
                Limpiar
              </button>
            </div>
            <div className="muted">
              Ejercicio: mové el estado del input a un componente hijo y devolvelo con props (two-way data flow).
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
