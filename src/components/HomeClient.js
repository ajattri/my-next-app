// components/HomeClient.js

import React, { useState } from "react";

function HomeClient() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <main>
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={handleAdd}>Add</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
      </div>
    </main>
  );
}

export default HomeClient;
