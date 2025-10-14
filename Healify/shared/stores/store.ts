import { makeAutoObservable } from 'mobx';

class RuntimeStore{
  showHeaderDrawer = true;
  showHeaderTabs = true;
  showHeaderTools = true;

  constructor() {
    makeAutoObservable(this);
  }
  
  setShowHeaderDrawer(value: boolean) {
    this.showHeaderDrawer = value;
  }

  setShowHeaderTabs(value: boolean) {
    this.showHeaderTabs = value;
  }
}

export const runtimeStore = new RuntimeStore();