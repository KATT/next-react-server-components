import { createContext, useContext } from "react";

const AppContext = createContext({
  foo: "bar"
});

export const AppContextProvider = (props) => {
  return (
    <AppContext.Provider value={{
      foo: "bar"
    }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);