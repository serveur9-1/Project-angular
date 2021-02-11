import { Component, OnInit } from '@angular/core';
import { Criteres } from '../api/models';
import { CritereControllerService } from '../api/services/critere-controller.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-critere',
  templateUrl: './critere.component.html',
  styleUrls: ['./critere.component.css']
})
export class CritereComponent implements OnInit {

  allCriteres :Criteres[] = [];
  critereId!: number;
  constructor(private critereService : CritereControllerService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.reloadData();

  }
  reloadData(){

    this.critereService.getAllCriteresUsingGET().subscribe(

      (res)=>{
        this.allCriteres = res;
      },
      (error) => {
        console.error(error)
      }
    )
  }
  deleteCritere(critereId: number) {
    this.critereId = critereId ; // **stored particular Id**
  }
  deleteOK() {
    this.critereService.deleteUsingDELETE1(this.critereId)
      .subscribe(
        data => {
          this.toastr.success("Critère supprimé avec succès");
          this.reloadData();
        },
        error => this.toastr.error("Critère supprimé avec succès"));
  }
}
