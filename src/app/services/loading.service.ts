import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingStateSub = new Subject<boolean>();
  private loadingStateAux = false;

  setLoadingState(state) {
    this.loadingStateSub.next(state);
    this.loadingStateAux = state;
  }

  clearLoadingState() {
    this.loadingStateSub.next();
  }

  getLoadingState(): Observable<any> {
    return this.loadingStateSub.asObservable();
  }

  getLoadingStateAux(){
    return this.loadingStateAux;
  }
}
