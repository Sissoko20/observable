import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryDay, User,UserApi } from './../../type';


@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  id: string;
  private apiUrlv="https://date.nager.at/api/v2/publicholidays/2020/US"
  private apiUrl ="https://my-json-server.typicode.com/Sissoko20/userbd/users"

  constructor(
    private http: HttpClient
  ) { }

  getDataUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  getDataApi():Observable<CountryDay[]> {
    return this.http.get<CountryDay[]>(this.apiUrlv)
  }
  getDetailsActivite(id:string){
    
    return this.http.get(apiUrlv2 + "/" +id)
    
  }
  getAllActivityUsers():Observable<UserApi[]>{
    return this.http.get<UserApi[]>(apiUrlv2)
  }
}
const apiUrlv2 ="https://my-json-server.typicode.com/Sissoko20/userbd/users"
