import { Component, OnInit } from '@angular/core';
import { Candidats } from '../api/models';
import { CandidatControllerService } from '../api/services';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {
  allCandidats : Candidats[] = [];
  constructor(private candidatsService : CandidatControllerService) { }

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

  deleteCandidat(candidatId: any) {
    this.candidatsService.deleteUsingDELETE(candidatId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
