import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Groupes } from '../api/models';
import { GroupeControllerService } from '../api/services/groupe-controller.service';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {

  allgroupes : any = [];
  groupeId!: number;
  constructor(private groupeService : GroupeControllerService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.reloadData();

  }
  reloadData(){

    this.groupeService.getAllGroupesUsingGET().subscribe(

      (res)=>{
        this.allgroupes = res;
      },
      (error) => {
        console.error(error)
      }
    )
  }

  deleteGroupe(groupeId: number) {
    this.groupeId = groupeId ; 
  }
  deleteOK() {
    this.groupeService.deleteUsingDELETE4(this.groupeId)
      .subscribe(
        data => {
          this.toastr.success("groupe supprimé avec succès");
          this.reloadData();
        },
        error => console.log(error));
  }

}
