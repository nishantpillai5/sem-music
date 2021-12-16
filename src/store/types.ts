import { FetchDictionary } from "src/utils/types";

export interface StoreContextType {
  storeState: StoreState;
  dispatch: React.Dispatch<StoreAction>;
}

export interface StoreProviderProps {}
export type StoreState = {
  loading: boolean;
  instruments: FetchDictionary;
  genres: FetchDictionary;
};

export type StoreAction =
  | { type: "set-loading"; payload: boolean }
  | { type: "set-genres"; payload: FetchDictionary }
  | { type: "set-instruments"; payload: FetchDictionary };
