import { memo, useCallback, useMemo, useState } from 'react'

function slowSum(n: number) {
  let acc = 0
  for (let i = 0; i < n; i++) {
    acc += i
  }
  return acc
}

type ChildProps = {
  label: string
  onClick: () => void
}

const ChildButton = memo(function ChildButton({ label, onClick }: ChildProps) {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  )
})

export default function PerformancePage() {
  const [n, setN] = useState(200000)
  const [count, setCount] = useState(0)

  const result = useMemo(() => slowSum(n), [n])

  const inc = useCallback(() => {
    setCount((c) => c + 1)
  }, [])

  return (
    <section className="page">
      <h1 className="title">Performance</h1>
      <p className="subtitle">useMemo + useCallback + memo para controlar rerenders y cálculos costosos.</p>

      <div className="grid2">
        <div className="panel">
          <div className="panelTitle">Cálculo costoso</div>
          <div className="panelBody">
            <div className="field">
              <label className="label" htmlFor="n">N</label>
              <input
                id="n"
                className="input"
                type="number"
                value={n}
                min={10000}
                step={10000}
                onChange={(e) => setN(Number(e.target.value || 0))}
              />
            </div>
            <div className="pill">slowSum(n): {result}</div>
            <div className="muted">Ejercicio: sacá el useMemo y sentí el lag cuando hacés click en el contador.</div>
          </div>
        </div>

        <div className="panel">
          <div className="panelTitle">Callbacks estables</div>
          <div className="panelBody">
            <div className="panelRow">
              <div className="pill">count: {count}</div>
              <ChildButton label="Increment" onClick={inc} />
            </div>
            <div className="muted">Ejercicio: reemplazá `useCallback` por una función inline y compará rerenders.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
