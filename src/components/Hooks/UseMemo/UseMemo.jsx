import { useState, useMemo } from "react";
// memoization
// store so that value can be retrieved without repeating computation

// can help optimize computation cost or improve performance

// deal with expensive computations that hurt performance

// cache a value so it doesn't need to be recalculated

export default function UseMemo() {
  const [count, setCount] = useState(60);

  const expensiveCount = useMemo(() => {
    return count ** 2;
    // recompute when count changes
  }, [count]);

  return (
    <div>
      <h1>UseMemo</h1>
    </div>
  );
}
