import {EdgeInsets} from 'react-native-safe-area-context';

export class UIStore {
  safeAreaInsets: EdgeInsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  language: string = "th"

  constructor() {
  }

  setUIInsets(insets: EdgeInsets) {
    this.safeAreaInsets = insets
  }

  get insets() {
    return this.safeAreaInsets;
  }
}
