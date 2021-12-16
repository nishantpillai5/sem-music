import { DropdownDictFetchType } from "src/utils/types";

export interface StoreContextType {
  storeState: StoreState;
  dispatch: React.Dispatch<StoreAction>;
}

export interface StoreProviderProps {}
export type StoreState = {
  loading: boolean;
  instruments: DropdownDictFetchType;
  genres: DropdownDictFetchType;
};

export type StoreAction =
  | { type: "set-loading"; payload: boolean }
  | { type: "set-genres"; payload: DropdownDictFetchType }
  | { type: "set-instruments"; payload: DropdownDictFetchType };
