import { useEffect, useState } from 'react';
import { Button } from 'src/Components';

export function App() {
  const [value, setValue] = useState(false);
  useEffect(() => {
    console.log('value', value);
  });
  return (
    <>
      <Button
        onClick={() => {
          setValue((pre) => !pre);
        }}
      >
        value: {value}
      </Button>
    </>
  );
}
