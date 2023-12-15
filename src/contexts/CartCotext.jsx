import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const clear = () => setItems([]);

  const addItem = (item, quantity) => {
    const exists = items.some(i => i.id === item.id);

    if (exists) {
      const updateItem = items.map(i => {
        if (i.id === item.id) {
          return { ...i, quantity: i.quantity + quantity };
        } else {
          return i;
        }
      })
      setItems(updateItem);
    } else {
      setItems((prev) => {
        return [...prev, { ...item, quantity }];
      });
    }
  };

  const removeItem = (id) => {
    const eliminar = items.filter((prev) => prev.id !== id);
    setItems(eliminar);
  };

  return (
    <CartContext.Provider value={{ addItem, clear, items, removeItem, }}>
      {children}
    </CartContext.Provider>
  );
}