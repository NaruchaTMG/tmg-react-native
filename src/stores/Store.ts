import {createContext, ReactNode, useContext} from 'react';
import {action, computed, observable} from 'mobx';
import {UIStore} from './ui/UIStore.ts';
import {AuthStore} from './auth/AuthStore.ts';

export class Store {
  authStore?: AuthStore;
  uiStore?: UIStore;

  identity: string = '720011100022233';
  @observable accessor count: number = 0;
  counter = 0;

  constructor() {
    this.init()
  }

  init() {
    this.authStore = new AuthStore(this)
    this.uiStore = new UIStore()
  }

  @computed
  get doubleCount() {
    return this.count * 2;
  }

  @action
  increment() {
    this.count += 1;
    console.log(this.count);
  }

  @action
  decrement() {
    this.count -= 1;
    console.log(this.count);
  }
}

export const store = new Store();
export const StoreContext = createContext<Store>({} as Store);
export const StoreProvider = StoreContext.Provider;
export const useStore = (): Store => useContext(StoreContext);
