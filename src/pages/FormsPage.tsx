import { useMemo, useState, type FormEvent } from 'react'

type Values = {
  email: string
  password: string
  remember: boolean
}

export default function FormsPage() {
  const [values, setValues] = useState<Values>({ email: '', password: '', remember: true })
  const [submitted, setSubmitted] = useState<Values | null>(null)

  const errors = useMemo(() => {
    const next: Record<string, string> = {}
    if (!values.email.includes('@')) next.email = 'Email inválido'
    if (values.password.length < 6) next.password = 'Mínimo 6 caracteres'
    return next
  }, [values.email, values.password])

  const canSubmit = Object.keys(errors).length === 0

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!canSubmit) return
    setSubmitted(values)
  }

  return (
    <section className="page">
      <h1 className="title">Formularios</h1>
      <p className="subtitle">Controlled inputs + validación + feedback.</p>

      <div className="grid2">
        <div className="panel">
          <div className="panelTitle">Login (demo)</div>
          <div className="panelBody">
            <form className="form" onSubmit={onSubmit}>
              <div className="field">
                <label className="label" htmlFor="email">Email</label>
                <input
                  id="email"
                  className="input"
                  value={values.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                />
                {errors.email ? <div className="error">{errors.email}</div> : null}
              </div>

              <div className="field">
                <label className="label" htmlFor="password">Password</label>
                <input
                  id="password"
                  className="input"
                  type="password"
                  value={values.password}
                  onChange={(e) => setValues((v) => ({ ...v, password: e.target.value }))}
                />
                {errors.password ? <div className="error">{errors.password}</div> : null}
              </div>

              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={values.remember}
                  onChange={(e) => setValues((v) => ({ ...v, remember: e.target.checked }))}
                />
                Recordarme
              </label>

              <button className="button" type="submit" disabled={!canSubmit}>
                Enviar
              </button>
            </form>

            <div className="muted">
              Ejercicio: agregá un campo “confirm password” y validación cruzada.
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panelTitle">Resultado</div>
          <div className="panelBody">
            {submitted ? (
              <pre className="code">{JSON.stringify(submitted, null, 2)}</pre>
            ) : (
              <div className="muted">Todavía no enviaste el formulario.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
