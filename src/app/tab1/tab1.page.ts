import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { Observable } from 'rxjs';
import { User } from './../../../type';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( 
    private datamanager:DataManagerService
    ) {}

  ngOnInit(){
this.datamanager.getDataUser().subscribe((data:User[])=>{
  this.processData(data)
})

  }

  processData(data:User[]){
      console.log(data)
  }

}
