import React, { useMemo, useDeferredValue } from "react";

const List = ({ input }) => {
  const defferdInput = useDeferredValue(input);
  const LIST_SIZE = 20000;
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(defferdInput);
    }
    return l;
  }, [defferdInput]);
  return (
    <div>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default List;
