import { IParticipantService } from './../api/models/iparticipant-service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { JuryControllerService } from '../api/services';
import { EvenementControllerService } from '../api/services/evenement-controller.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-jury1',
  templateUrl: './add-jury1.component.html',
  styleUrls: ['./add-jury1.component.css']
})
export class AddJury1Component implements OnInit {
  allEvents : IParticipantService[] = [];
  juryForm!: FormGroup;
  eventId!: number;
  submitted =false;

  constructor(private juryService : JuryControllerService,private eventService: EvenementControllerService,private toastr: ToastrService, private fb: FormBuilder, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.juryFormInit()

  }

  juryFormInit(){
    this.juryForm = this.fb.group({
      juryId : [100000],
      juryCode : ["", Validators.required],
      juryEmail : ["", [Validators.required,Validators.email]],
      juryNomComplet : ["", Validators.required],
      juryTelephone : [""],
      evenementId : this.eventId,
    })
  }

  onSubmit(){
    this.eventId = this.router.snapshot.params.id;
    if (!this.juryForm.valid) {
      this.toastr.error("Veuillez renseigner les champs réquis");
    } else {
      this.juryService.createOrUpdateJuryUsingPOST({...this.juryForm.value, evenement: {evenementId:this.eventId}})
      .subscribe(
        data =>  this.toastr.success("jury ajouté avec succès"),
        error => this.toastr.error(error.message)
        );
    }
    }

}
