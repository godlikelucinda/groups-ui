import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from './group';

@Injectable({
  providedIn: 'root'
})
export class GroupServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllGroups() {
    // return this.httpClient.get<Group[]>('http://localhost:8080/groups');
    return [
      {
        id: "01",
        name: "Fußballgruppe",
        description: "Gruppe für Steves Fußballtraining."
      },
      {
        id: "02",
        name: "Fitness-Club",
        description: "Tobis Gruppe fürs Fitness-Studio."
      }
    ];
  }
}
