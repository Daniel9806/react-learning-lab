# React Learning Lab

Proyecto práctico para aprender React con ejercicios por módulos. Está hecho con **Vite + React + TypeScript**.

## Requisitos

- Node.js (LTS recomendado)
- npm

## Instalación y ejecución

```bash
npm install
npm run dev
```

Abrí la URL que te muestre la terminal (normalmente `http://localhost:5173`).

## Cómo usar este laboratorio

- Entrá a un módulo desde la barra de navegación.
- Modificá el código del módulo (en `src/pages/*`).
- Observá el comportamiento y explicá el “por qué”.
- Volvé a dejarlo correcto y anotá la regla mental.

## Módulos incluidos

- **Inicio**: panorama general.
- **Estado/Props** (`src/pages/StatePropsPage.tsx`): props, estado local, lifting state up.
- **Efectos** (`src/pages/EffectsPage.tsx`): `useEffect`, dependencias, cleanup, debounce.
- **Forms** (`src/pages/FormsPage.tsx`): controlled inputs, validación, UX.
- **Fetch** (`src/pages/FetchPage.tsx`): loading/error/success, `AbortController`, filtro derivado.
- **Context** (`src/pages/ContextPage.tsx`): Context API + memoización del `value`.
- **Performance** (`src/pages/PerformancePage.tsx`): `memo`, `useMemo`, `useCallback`.

## Retos sugeridos (rápidos)

1. **Estado/Props**: separar el input de nombre en un componente hijo y manejarlo con props.
2. **Efectos**: provocar un bug removiendo el cleanup, describir el síntoma y corregirlo.
3. **Forms**: agregar `confirm password` con validación cruzada.
4. **Fetch**: implementar un cache simple (por ejemplo, `Map`) y un botón “Limpiar cache”.
5. **Context**: mover el provider a `main.tsx` para hacerlo global.
6. **Performance**: medir qué cambia si quitás `useMemo` / `useCallback`.
