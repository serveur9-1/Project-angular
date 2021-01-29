import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Candidats } from '../api/models';
import { CandidatControllerService } from '../api/services/candidat-controller.service';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {
  allCandidats : Candidats[] = [];
  candidatId!: number;
  constructor(private candidatsService : CandidatControllerService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.reloadData();
    
  }

  reloadData() {
    this.candidatsService.getAllCandidatsUsingGET().subscribe(
      (res)=>{
        this.allCandidats = res;
        console.log(res)
      },
      (error) => {
        console.error(error)
      }
    )
  }

  deleteCandidat(candidatId: number) {
    this.candidatId = candidatId ; // **stored particular Id**
    console.log(this.candidatId)
  }
  deleteOK() {
    this.candidatsService.deleteUsingDELETE(this.candidatId)
      .subscribe(
        data => {
          this.toastr.success("candidat supprimé avec succès");
          console.log(data);
          this.reloadData();
        },
        error => this.toastr.error(error.message));
  }

}
