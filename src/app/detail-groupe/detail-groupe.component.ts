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

  GroupeD: any = {};
  groupeId!: number;
  candidatId!: number;
  allCandid: Candidats[] = [];
  candidatByGroup: Groupe_candidats[] = [];

  addCandGroupForm!: FormGroup;
  submitted = false;

  constructor(private groupeCandidatService: GroupeCandidatControllerService, private groupeService: GroupeControllerService, private toastr: ToastrService, private fb: FormBuilder, private router: ActivatedRoute, private candidatService: CandidatControllerService) { }

  ngOnInit(): void {
    this.reloadData();
    this.groupeCFormInit();
    this.candidatByGroupe();
  }

  groupeCFormInit() {
    this.addCandGroupForm = this.fb.group({
      groupeCandidatId: [100000],
      candidatId: ["", Validators.required],
    })
  }

  reloadData() {
    this.allCandids();
    this.groupeId = this.router.snapshot.params.id;
    this.groupeService.getEvenementByIdUsingGET1(this.groupeId).subscribe(
      (res) => {
        this.GroupeD = res;
      },
      (error) => {
        console.error(error)
      }
    )
  }

  onSubmit() {


    console.log(this.addCandGroupForm.value)
    if (!this.addCandGroupForm.valid) {
      this.toastr.error("Veuillez choisir un candidat");
    } else {
      this.groupeCandidatService.createOrUpdateGroupeCandidatUsingPOST({ ...this.addCandGroupForm.value, candidat: { candidatId: this.addCandGroupForm.value.candidatId }, groupe: { groupeId: this.groupeId } })
        .subscribe(
          data => {

            this.toastr.success("candidat ajouté avec succès");
            this.reloadData();
            this.candidatByGroupe();
          },
          error => this.toastr.error(error.message)
        );
    }
  }

  allCandids() {

    this.candidatService.getAllCandidatsUsingGET().subscribe(
      (res) => {
        this.allCandid = res;
      },
      (error) => {
        console.error(error)
      }
    )
  }

  candidatByGroupe() {
    this.groupeId = this.router.snapshot.params.id;
    this.groupeCandidatService.getGroupeCandidatByGroupIdUsingGET(this.groupeId).subscribe(
      (res) => {
        this.candidatByGroup = res;
      },
      (error) => {
        console.error(error)
      }
    )
  }

  deletecandidat(candidatId: number) {
    this.candidatId = candidatId; // **stored particular Id**
  }
  deleteOK() {

    this.groupeCandidatService.deleteUsingDELETE3(this.candidatId)
      .subscribe(
        data => {
          this.toastr.success("utilisateur supprimé avec succès");
          this.candidatByGroupe();
        },
        error => console.log(error));
  }

}
