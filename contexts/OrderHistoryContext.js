import React, { useState, createContext } from "react";

export const OrderHistoryContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderHistory, setOrderHistory] = useState([]);
  return (
    <OrderHistoryContext.Provider value={{ orderHistory, setOrderHistory }}>
      {children}
    </OrderHistoryContext.Provider>
  );
};