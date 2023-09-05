import { useEffect, useState } from 'react'

export function App() {
  const [value, setValue] = useState(false)
  useEffect(() => {
    console.log('value', value)
  })
  return (
    <>
      <button
        onClick={() => {
          setValue((pre) => !pre)
        }}
      >
        value: {value}
      </button>
    </>
  )
}
