import { Evenement } from './api/models/evenement';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  private API_SERVER = "http://127.0.0.1:8080";
  constructor(private httpClient: HttpClient) { }

  public save(evenement:Evenement){
    return this.httpClient.post<Evenement>(this.API_SERVER+`/evenements`,evenement);
  }
  
}
