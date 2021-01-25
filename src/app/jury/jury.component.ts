import { Component, OnInit } from '@angular/core';
import { Jury } from '../api/models';
import { JuryControllerService } from '../api/services';

@Component({
  selector: 'app-jury',
  templateUrl: './jury.component.html',
  styleUrls: ['./jury.component.css']
})
export class JuryComponent implements OnInit {

  allJuries : Jury[] = []
  constructor(private juryService : JuryControllerService) { }

  ngOnInit(): void {
    this.reloadData();

  }
  reloadData(){

    this.juryService.getAllJuriesUsingGET().subscribe(

      (res)=>{
        this.allJuries = res;
        console.log(res)
      },
      (error) => {
        console.error(error)
      }
    )
  }

  deleteJury(juryId: any) {
    this.juryService.deleteUsingDELETE5(juryId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
