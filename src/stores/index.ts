import {createContext, useContext} from 'react';
import {action, computed, makeObservable, observable} from 'mobx';

export class Store {
  identity: string = "720011100022233"
  count: number = 0
  counter = 0

  constructor() {
    makeObservable(this, {
      count: observable,
      counter: observable,
      doubleCount: computed,
      increment: action,
      decrement: action,
    })
  }

  get doubleCount() {
    return this.count * 2;
  }

  increment() {
    this.count += 1
    console.log(this.count)
  }

  decrement() {
    this.count -= 1
    console.log(this.count)
  }
}

export const store = new Store()
export const StoreContext = createContext<Store>({} as Store);
export const StoreProvider = StoreContext.Provider;
export const useStore = (): Store => useContext(StoreContext);
