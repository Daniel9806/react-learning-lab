import { useEffect, useMemo, useRef, useState } from 'react'

type User = {
  id: number
  name: string
  email: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function FetchPage() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)
  const [users, setUsers] = useState<User[]>([])
  const [filter, setFilter] = useState('')

  const abortRef = useRef<AbortController | null>(null)

  async function load() {
    abortRef.current?.abort()
    const controller = new AbortController()
    abortRef.current = controller

    setStatus('loading')
    setError(null)

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users', { signal: controller.signal })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = (await res.json()) as User[]
      setUsers(data)
      setStatus('success')
    } catch (e) {
      if (e instanceof DOMException && e.name === 'AbortError') return
      setError(e instanceof Error ? e.message : 'Error desconocido')
      setStatus('error')
    }
  }

  useEffect(() => {
    void load()
    return () => abortRef.current?.abort()
  }, [])

  const filtered = useMemo(() => {
    const f = filter.trim().toLowerCase()
    if (!f) return users
    return users.filter((u) => u.name.toLowerCase().includes(f) || u.email.toLowerCase().includes(f))
  }, [filter, users])

  return (
    <section className="page">
      <h1 className="title">Data Fetching</h1>
      <p className="subtitle">Loading / error / success + AbortController + filtro derivado.</p>

      <div className="panel">
        <div className="panelTitle">Usuarios</div>
        <div className="panelBody">
          <div className="panelRow">
            <button className="button" onClick={() => void load()} disabled={status === 'loading'}>
              Recargar
            </button>
            <input
              className="input"
              placeholder="Filtrar por nombre o email"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>

          {status === 'loading' ? <div className="muted">Cargando…</div> : null}
          {status === 'error' ? <div className="error">{error}</div> : null}

          {status === 'success' ? (
            <div className="listBox">
              {filtered.map((u) => (
                <div className="listItem" key={u.id}>
                  <div className="listTitle">{u.name}</div>
                  <div className="muted">{u.email}</div>
                </div>
              ))}
            </div>
          ) : null}

          <div className="muted">
            Ejercicio: agregá cache simple (por ejemplo en un Map) para no refetchear si ya tenés datos.
          </div>
        </div>
      </div>
    </section>
  )
}
