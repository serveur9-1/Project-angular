import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CritereControllerService } from '../api/services';
import { EvenementControllerService } from '../api/services/evenement-controller.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-critere-add1',
  templateUrl: './critere-add1.component.html',
  styleUrls: ['./critere-add1.component.css']
})
export class CritereAdd1Component implements OnInit {

  critereForm!: FormGroup;
  eventId!: number;
  submitted =false;

  constructor(private critereService : CritereControllerService,private eventService: EvenementControllerService,private toastr: ToastrService, private fb: FormBuilder, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.critereFormInit()

  }

  critereFormInit(){
    this.critereForm = this.fb.group({
      critereId : [100000],
      critereBareme : ["", Validators.required],
      critereLibelle : ["", Validators.required],
      evenementId : this.eventId,
    })
  }

  onSubmit(){
    this.eventId = this.router.snapshot.params.id;
    if (!this.critereForm.valid) {
      this.toastr.error("Veuillez renseigner les champs réquis");
    } else {
      this.critereService.createOrUpdateCritereUsingPOST({...this.critereForm.value, evenement: {evenementId:this.eventId}})
      .subscribe(
        data =>  this.toastr.success("critère modifié avec succès"),
        error => this.toastr.error(error.message)
        );
    }
    }

}
