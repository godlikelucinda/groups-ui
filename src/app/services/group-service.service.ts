import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from './group';

@Injectable({
  providedIn: 'root'
})
export class GroupServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllGroups() {
    return this.httpClient.get<Group[]>('http://localhost:8080/groups');
  }
}
