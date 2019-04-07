import { Component, OnInit } from '@angular/core';
import { GroupServiceService } from '../services/group-service.service';
import { Group } from '../services/group';

@Component({
  selector: 'app-groups-overview',
  templateUrl: './groups-overview.component.html',
  styleUrls: ['./groups-overview.component.css']
})
export class GroupsOverviewComponent implements OnInit {

  groups: Group[];

  constructor(private groupService: GroupServiceService) { }

  ngOnInit() {
    this.groupService.getAllGroups().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response) {
    this.groups = response;
  }

}
