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

  allEvents : IParticipantService[] = [];
  evenementId!: number;
  constructor(private eventService: EvenementControllerService,private toastr: ToastrService) { }

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

  deleteEvenement(evenementId: number) {
    this.evenementId = evenementId ; // **stored particular Id**
  }
  deleteOK() {
    this.eventService.deleteUsingDELETE2(this.evenementId)
      .subscribe(
        data => {
          this.toastr.success("Critère supprimé avec succès");
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


}
