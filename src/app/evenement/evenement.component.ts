import { Component, OnInit } from '@angular/core';
import { Evenement } from '../api/models';
import { EvenementControllerService } from '../api/services';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  allEvents : Evenement[] = [];
  constructor(private eventService: EvenementControllerService) { }

  ngOnInit(): void {
    this.reloadData();

  }
  reloadData(){

    this.eventService.getAllEvenementsUsingGET().subscribe(

      (res)=>{
        this.allEvents = res;
        console.log(res)
      },
      (error) => {
        console.error(error)
      }
    )
  }

  deleteEvent(evenementId: any) {
    this.eventService.deleteUsingDELETE2(evenementId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
