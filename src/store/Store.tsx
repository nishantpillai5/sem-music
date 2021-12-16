import React from "react";
import { getAllGenres, getAllInstruments } from "src/api/dbpedia";
import { DropdownDictFetchType } from "src/utils/types";
import {
  StoreAction,
  StoreContextType,
  StoreProviderProps,
  StoreState,
} from "./types";

const initialState: StoreState = {
  loading: true,
  genres: {},
  instruments: {},
};
const reducer = (state: StoreState, action: StoreAction): StoreState => {
  switch (action.type) {
    case "set-genres":
      return { ...state, genres: action.payload };
    case "set-instruments":
      return { ...state, instruments: action.payload };
    case "set-loading":
      return { ...state, loading: action.payload };
  }
};

export const StoreContext = React.createContext<StoreContextType>({
  storeState: {
    loading: true,
    genres: {},
    instruments: {},
  },
  dispatch: () => null,
});

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [storeState, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const getInitialData = async () => {
      const genres = await getAllGenres();
      dispatch({ type: "set-genres", payload: genres });
      const instruments = await getAllInstruments();
      dispatch({ type: "set-instruments", payload: instruments });
      dispatch({ type: "set-loading", payload: false });
    };

    getInitialData();
  }, []);

  return (
    <StoreContext.Provider value={{ storeState, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
