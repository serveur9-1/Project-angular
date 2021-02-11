import { IParticipantService } from './../api/models/iparticipant-service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Evenement } from '../api/models';
import { GroupeControllerService, EvenementControllerService } from '../api/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  allEvents : IParticipantService[] = [];
  groupForm!: FormGroup;
  submitted =false;
  groupeId!: number;
  
  constructor(private groupService : GroupeControllerService,private eventService: EvenementControllerService,private toastr: ToastrService, private fb: FormBuilder, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadData();
    this.groupeForm();
    this.groupeId = this.router.snapshot.params.id;
    if(this.groupeId){
      this.groupService.getEvenementByIdUsingGET1(this.groupeId).subscribe(
        data => this.groupForm = this.fb.group({
          groupeId : data.groupeId,
          groupeCode : data.groupeCode,
          groupeNom : data.groupeNom,
          groupePhoto : data.groupePhoto,
          evenementId : data.evenement?.evenementId,
        }),
        error => console.log(error)
      )
    } 

  }

  groupeForm(){
    this.groupForm = this.fb.group({
      groupeId : [100000],
      groupeCode : ["", Validators.required],
      groupeNom : ["", Validators.required],
      groupePhoto : [null],
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
    if (!this.groupForm.valid) {
      this.toastr.error("Veuillez renseigner les champs réquis");
    } else {
      this.groupService.createOrUpdateGroupeUsingPOST({...this.groupForm.value, evenement: {evenementId:this.groupForm.value.evenementId}})
      .subscribe(
        data => {
          this.toastr.success("critère ajouté avec succès");
          this.groupForm.reset();
        },
        error => this.toastr.error(error.message)
        );
    }
    }

}
