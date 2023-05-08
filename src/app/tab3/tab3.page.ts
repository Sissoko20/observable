import { Component,OnInit} from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User,UserApi } from './../../../type';
DataManagerService



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  id:string
  activite:any;
  DataApiUser$:Observable<UserApi[]>

  constructor(
    private serviceData: DataManagerService,
    private http: HttpClient,
    private actroute:ActivatedRoute,
    private service: DataManagerService
  ) {}

  ngOnInit(){
    /* this.id=this.actroute.snapshot.paramMap.get('id')

    this.serviceData.getDetailsActivite(this.id).subscribe((data)=>{
      this.activite=data
    })
 */
    this.DataApiUser$=this.serviceData.getAllActivityUsers()
 
  }

 
}
