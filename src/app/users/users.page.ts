import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataManagerService } from '../data-manager.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserApi } from 'type';
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
id:string;
activite$: Observable<any>;

  constructor(
    private actroute:ActivatedRoute,
    private service :DataManagerService
  ) { }

  ngOnInit() {
    this.activite$ = this.actroute.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getDetailsActivite(params.get('id'))
      )
    );
  }

}
