import {Component, Input, Output, EventEmitter, OnInit,ChangeDetectionStrategy} from '@angular/core'

import {Observable} from 'rxjs';
@Component({
selector:'childComponent',
templateUrl:'./child.component.html',



})
export class childComponent  {
 
  @Input('parentData') incomingData: string;
  
    @Output('childData') outgoingData = new EventEmitter<string>();
  
    childSampleData :string = "";
     number=[1,2,3];
    constructor() { }
    source=Observable.create(observer=>{for(let n of this.number) {observer.next(n);}observer.complete()}).subscribe();
    public sendData(data:any){
      this.outgoingData.emit(data);
    }
  }