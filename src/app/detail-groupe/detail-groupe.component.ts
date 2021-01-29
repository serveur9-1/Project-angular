import { Groupe_candidats } from './../api/models/groupe-_candidats';
import { CandidatComponent } from './../candidat/candidat.component';
import { Candidats } from './../api/models/candidats';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Groupes } from '../api/models';
import { CandidatControllerService, GroupeCandidatControllerService, GroupeControllerService } from '../api/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-groupe',
  templateUrl: './detail-groupe.component.html',
  styleUrls: ['./detail-groupe.component.css']
})
export class DetailGroupeComponent implements OnInit {
  
  GroupeD = {};
  groupeId!: number; 
  allCandid : Candidats[] = [];

  addCandGroupForm!: FormGroup;
  submitted =false;

  constructor(private groupeCandidatService : GroupeCandidatControllerService,private groupeService : GroupeControllerService ,private toastr: ToastrService, private fb: FormBuilder, private router:ActivatedRoute, private candidatService : CandidatControllerService ) { }

  ngOnInit(): void {
    this.reloadData();
    this.addCandGroupForm = this.fb.group({
      groupeCandidatId : [100000],
      candidatId : ["", Validators.required],
    })
  }

  reloadData(){
    this.allCandids();
    this.groupeId = this.router.snapshot.params.id;
    this.groupeService.getEvenementByIdUsingGET1(this.groupeId).subscribe(
      (res)=>{
        this.GroupeD = res;
      },
      (error) => {
        console.error(error)
      }
    )
  }

  onSubmit(){
    if (!this.addCandGroupForm.valid) {
      this.toastr.error("Veuillez choisir un candidat");
    } else {
      console.log(this.addCandGroupForm)
      this.groupeCandidatService.createOrUpdateGroupeCandidatUsingPOST(this.addCandGroupForm.value)
      .subscribe(
        data => {
         
          this.toastr.success("candidat ajouté avec succès");
          this.addCandGroupForm.reset();
          console.log(data);
        },
        error => this.toastr.error(error.message)
        );
    }
    }

  allCandids(){

    this.candidatService.getAllCandidatsUsingGET().subscribe(
      (res)=>{
        this.allCandid = res;
        console.log('testt',this.allCandid);
      },
      (error) => {
        console.error(error)
      }
    )
  }

}
