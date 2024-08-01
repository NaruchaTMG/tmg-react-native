import {createContext, useContext} from 'react';
import {makeAutoObservable} from 'mobx';

export class Store {
  identity: string = "720011100022233"

  constructor() {
    makeAutoObservable(this)
  }
}

export const store = new Store()
export const StoreContext = createContext<Store>({} as Store);
export const StoreProvider = StoreContext.Provider;
export const useStore = (): Store => useContext(StoreContext);
