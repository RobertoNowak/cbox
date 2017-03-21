import { Injectable } from '@angular/core';

@Injectable()
export class StateService {
  _state = { };
  constructor() {
    this.state.loadingText = "";
    this.state.isLoading = 0;
    this.state.admin_menu_selected = 1;
    this.state.login_message = "";
    this.state.one_page_menu_selected = 1;
  }
  // already return a clone of the current state
  get state() {
    return this._state = this._clone(this._state);
  }
  // never allow mutation
  set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }
  public setLoading(loadingText: string){
    this.state.isLoading ++;
    this.state.loadingText = loadingText;
  }

  public closeLoading(){
    if(this.state.isLoading > 0)
      this.state.isLoading --;
  }

  get(prop?: any) {
    // use our state getter for the clone
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  set(prop: string, value: any) {
    // internally mutate our state
    return this._state[prop] = value;
  }


  _clone(object) {
    // simple object clone
    return JSON.parse(JSON.stringify( object ));
  }
}
