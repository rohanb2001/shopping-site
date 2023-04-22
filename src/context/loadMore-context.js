import { createContext, useEffect, useState } from "react";

const LoadMoreContext = createContext({
  loadContent: null,
  visibleData: null,
  allItemsLength: null,
  updateValue: function () {},
});

export function LoadMoreContextProvider(props) {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(12);
  const [allItems, setAllItems] = useState(0);

  function showItemsHandler() {
    console.log("clicked");
    setVisible((prevValue) => prevValue + 4);
  }

  useEffect(() => {
    fetch(`http://localhost:3000/getAllitems?_limit=${visible}`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [items]);

  useEffect(() => {
    fetch(`http://localhost:3000/getAllitems`)
      .then((response) => response.json())
      .then((data) => setAllItems(data.length));
  });

  const context = {
    loadContent: items,
    visibleData: visible,
    allItemsLength: allItems,
    updateValue: showItemsHandler,
  };

  return (
    <LoadMoreContext.Provider value={context}>
      {props.children}
    </LoadMoreContext.Provider>
  );
}

export default LoadMoreContext;
