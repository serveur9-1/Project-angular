import { Component, OnInit } from '@angular/core';
import { Groupes } from '../api/models';
import { GroupeControllerService } from '../api/services';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {

  allgroupes : Groupes[] = [];
  constructor(private groupeService : GroupeControllerService) { }

  ngOnInit(): void {
    this.reloadData();

  }
  reloadData(){

    this.groupeService.getAllGroupesUsingGET().subscribe(

      (res)=>{
        this.allgroupes = res;
        console.log(res)
      },
      (error) => {
        console.error(error)
      }
    )
  }

  deleteGroupe(groupeId: any) {
    this.groupeService.deleteUsingDELETE4(groupeId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
