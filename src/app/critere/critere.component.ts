import { Component, OnInit } from '@angular/core';
import { Criteres } from '../api/models';
import { CritereControllerService } from '../api/services';

@Component({
  selector: 'app-critere',
  templateUrl: './critere.component.html',
  styleUrls: ['./critere.component.css']
})
export class CritereComponent implements OnInit {

  allCriteres :Criteres[] = [];
  constructor(private critereService : CritereControllerService) { }

  ngOnInit(): void {
    this.reloadData();

  }
  reloadData(){

    this.critereService.getAllCriteresUsingGET().subscribe(

      (res)=>{
        this.allCriteres = res;
        console.log(res)
      },
      (error) => {
        console.error(error)
      }
    )
  }

  deleteCritere(critereId: any) {
    this.critereService.deleteUsingDELETE1(critereId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
