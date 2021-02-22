import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Evenement, IParticipantService } from '../api/models';
import { EvenementControllerService } from '../api/services/evenement-controller.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  allEvents : any = [];
  evenementId!: number;
  constructor(private eventService: EvenementControllerService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.reloadData();

  }
  reloadData(){

    this.eventService.getAllEvenementsUsingGET().subscribe(

      (res)=>{
        this.allEvents = res;
        console.log(this.allEvents);
      },
      (error) => {
        console.error(error)
      }
    )
  }

  deleteEvenement(evenementId: number) {
    this.evenementId = evenementId ; 
  }
  deleteOK() {
    this.eventService.deleteUsingDELETE2(this.evenementId)
      .subscribe(
        data => {
          this.toastr.success("Evenement supprimé avec succès");
          this.reloadData();
        },
        error => console.log(error));
  }


}
