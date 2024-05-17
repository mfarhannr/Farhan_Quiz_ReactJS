import React, { useState, useEffect } from "react";

function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count: ${count}`);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}

export default Count;
