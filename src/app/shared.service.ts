import { Injectable } from '@angular/core';
@Injectable()
//this is for the data items that have to be shared among different components
export class SharedService {
    public name:string='';
    public score:number=0;
    constructor() {
        
    }
}