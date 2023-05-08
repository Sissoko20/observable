import { Component, OnInit } from '@angular/core';
import { CountryDay } from './../../../type';
import { DataManagerService } from '../data-manager.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  myDataApi$: Observable<CountryDay[]>;

  constructor( private service:DataManagerService) {}
ngOnInit(){
 /*  this.service.getDataApi().subscribe((data:CountryDay[])=>{
    this.processData(data)
  }) */

  this.myDataApi$ = this.service.getDataApi();

}
processData(data: CountryDay[]){
console.log(data)
}

}
