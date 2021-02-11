import { IParticipantService } from './../api/models/iparticipant-service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Evenement } from '../api/models';
import { JuryControllerService } from '../api/services';
import { EvenementControllerService } from '../api/services/evenement-controller.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-jury',
  templateUrl: './add-jury.component.html',
  styleUrls: ['./add-jury.component.css']
})
export class AddJuryComponent implements OnInit {

  allEvents : IParticipantService[] = [];
  juryForm!: FormGroup;
  juryId!: number;
  submitted =false;

  constructor(private juryService : JuryControllerService,private eventService: EvenementControllerService,private toastr: ToastrService, private fb: FormBuilder, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadData();
    this.juryFormInit()
    this.juryId = this.router.snapshot.params.id;
    if(this.juryId){
      this.juryService.getJuryByIdUsingGET(this.juryId).subscribe(
        data => this.juryForm = this.fb.group({
          juryId : data.juryId,
          juryCode : data.juryCode,
          juryEmail : data.juryEmail,
          juryNomComplet : data.juryNomComplet,
          juryTelephone : data.juryTelephone,
          evenementId : data.evenement?.evenementId,
        }),
        error => console.log(error)
      )
    }

  }

  juryFormInit(){
    this.juryForm = this.fb.group({
      juryId : [100000],
      juryCode : ["", Validators.required],
      juryEmail : ["", [Validators.required,Validators.email]],
      juryNomComplet : ["", Validators.required],
      juryTelephone : [""],
      evenementId : ["", Validators.required],
    })
  }

  reloadData(){

    this.eventService.getAllEvenementsUsingGET().subscribe(

      (res)=>{
        this.allEvents = res;
      },
      (error) => {
        console.error(error)
      }
    )
  }

  onSubmit(){
    if (!this.juryForm.valid) {
      this.toastr.error("Veuillez renseigner les champs réquis");
    } else {
      this.juryService.createOrUpdateJuryUsingPOST({...this.juryForm.value, evenement: {evenementId:this.juryForm.value.evenementId}})
      .subscribe(
        data => {
          if (this.juryId) {

            this.toastr.success("jury modifié avec succès");
              
            } else {
  
            this.toastr.success("jury ajouté avec succès");
            this.juryForm.reset();
            }
        },
        error => this.toastr.error(error.message)
        );
    }
    }

}
