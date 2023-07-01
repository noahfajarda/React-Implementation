import React, { useState } from "react";

export default function UpdatedComponent(OriginalComponent) {
  return function NewComponent() {
    // only 1 state is used
    const [money, setMoney] = useState(10);

    const handleIncrease = () => {
      setMoney(money * 2);
    };

    return <OriginalComponent handleIncrease={handleIncrease} money={money} />;
  };
}
