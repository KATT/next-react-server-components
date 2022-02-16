import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, []);
  return (
    <AppContext.Provider value={{ mounted }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);