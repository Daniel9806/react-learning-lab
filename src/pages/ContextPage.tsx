import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

type Theme = 'dark' | 'light'

type ThemeContextValue = {
  theme: Theme
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  const value = useMemo<ThemeContextValue>(() => {
    return {
      theme,
      toggle: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    }
  }, [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

function ThemeDemo() {
  const { theme, toggle } = useTheme()

  return (
    <div className={theme === 'dark' ? 'themeCard dark' : 'themeCard light'}>
      <div className="panelRow">
        <div className="pill">theme: {theme}</div>
        <button className="button" onClick={toggle}>
          Toggle
        </button>
      </div>
      <div className="muted">
        Ejercicio: mové el `ThemeProvider` a `main.tsx` y hacelo global. Luego agregá un segundo valor al contexto.
      </div>
    </div>
  )
}

export default function ContextPage() {
  return (
    <section className="page">
      <h1 className="title">Context</h1>
      <p className="subtitle">Compartir estado sin prop drilling. Ojo con rerenders: memorizá el `value`.</p>

      <ThemeProvider>
        <div className="panel">
          <div className="panelTitle">Theme context (demo)</div>
          <div className="panelBody">
            <ThemeDemo />
          </div>
        </div>
      </ThemeProvider>
    </section>
  )
}
