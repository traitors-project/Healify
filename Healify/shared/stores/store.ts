import { makeAutoObservable } from 'mobx';

class RuntimeStore{
  showHeaderDrawer = true;
  showHeaderTabs = true;
  showHeaderTools = true;
  toolType = ''
  stressValue = 0
  toolComplited = false
  resultType = ''
  testPhq9Score = 0

  constructor() {
    makeAutoObservable(this);
  }
  
  setShowHeaderDrawer(value: boolean) {
    this.showHeaderDrawer = value;
  }

  setShowHeaderTabs(value: boolean) {
    this.showHeaderTabs = value;
  }
  setToolType(value: string) {
    this.toolType = value
  }
  setStressValue(value: number) {
    this.stressValue = value
  }
  setToolComplited(value: boolean) {
    this.toolComplited = value
  }
  setResultType(value: string) {
    this.resultType = value
  }
  resetToolState(){
    this.toolType = '';
    this.stressValue = 0;
    this.toolComplited = false;
    this.resultType = '';
  }
  setTestPhq9Score(value: number){
    this.testPhq9Score = value
  }
  resetTestPhq9Score(){
    this.testPhq9Score = 0
  }

}

export const runtimeStore = new RuntimeStore();