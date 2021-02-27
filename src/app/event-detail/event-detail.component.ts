import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Evenement, Jury, Criteres,Groupes } from '../api/models';
import { GroupeControllerService,EvenementControllerService, JuryControllerService, CritereControllerService,CandidatControllerService, VotesGroupeOrCandidatControllerService } from '../api/services';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event : Evenement = {};
  evenementId!: number;
  allJuries : Jury[] = []
  juryId!: number;
  allCriteres :Criteres[] = [];
  critereId!: number;
  allCandidats :any[] = [];
  candidatId!: number;
  allgroupes : any = [];
  resultGroupes : any = [];
  resultCandidats : any = [];
  groupeId!: number;
  
  constructor(private voteService : VotesGroupeOrCandidatControllerService,private groupeService : GroupeControllerService,private candidatsService : CandidatControllerService,private critereService : CritereControllerService,private juryService : JuryControllerService,private eventService: EvenementControllerService,private toastr: ToastrService,private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){

    this.evenementId = this.router.snapshot.params.id;
    this.eventService.getEvenementByIdUsingGET(this.evenementId).subscribe(
      data => this.event = data,
      error => console.log(error),
    );

    this.juryService.getJuryByEventIdUsingGET(this.evenementId).subscribe(

      (res)=>{
        this.allJuries = res;
      },
      (error) => {
        console.error(error)
      }
    );

    this.critereService.getCritereByEvenementIdUsingGET(this.evenementId).subscribe(

      (res) => {
        this.allCriteres = res;
      },
      (error) => {
        console.error(error)
      }
    );
    this.candidatsService.getCandidatByEventIdUsingGET(this.evenementId).subscribe(
      (res)=>{
        this.allCandidats = res;
      },
      (error) => {
        console.error(error)
      }
    );
    this.groupeService.getGroupeByEventIDUsingGET(this.evenementId).subscribe(

      (res)=>{
        this.allgroupes = res;
      },
      (error) => {
        console.error(error)
      }
    );
    this.resultCandidData();
    this.resultGroupeData();
  }

  resultCandidData(){

    this.voteService.getResultatUsingGET(this.evenementId).subscribe(

      (res)=>{
        this.resultCandidats = res;
      },
      (error) => {
        console.error(error)
      }
    )
  }

  resultGroupeData(){

    this.voteService.getResultgroupByEventUsingGET(this.evenementId).subscribe(

      (res)=>{
        this.resultGroupes = res;
      },
      (error) => {
        console.error(error)
      }
    )

  }

  deleteJury(juryId: number) {
    this.juryId = juryId ; 
  }
  deleteOK() {
    this.juryService.deleteUsingDELETE5(this.juryId)
      .subscribe(
        data => {
          this.toastr.success("jury supprimé avec succès");
          this.reloadData();
        },
        error => this.toastr.error(error));
  }

  deleteCritere(critereId: number) {
    this.critereId = critereId ; // **stored particular Id**
  }
  deleteOK1() {
    this.critereService.deleteUsingDELETE1(this.critereId)
      .subscribe(
        data => {
          this.toastr.success("Critère supprimé avec succès");
          this.reloadData();
        },
        error => this.toastr.error("Critère supprimé avec succès"));
  }

  deleteCandidat(candidatId: number) {
    this.candidatId = candidatId ; 
  }
  deleteCandidOK() {
    this.candidatsService.deleteUsingDELETE(this.candidatId)
      .subscribe(
        data => {
          this.toastr.success("candidat supprimé avec succès");
          this.reloadData();
        },
        error => this.toastr.error(error.message));
  }
  deleteGroupe(groupeId: number) {
    this.groupeId = groupeId ; 
  }

  deleteGroupeOK() {
    this.groupeService.deleteUsingDELETE4(this.groupeId)
      .subscribe(
        data => {
          this.toastr.success("groupe supprimé avec succès");
          this.reloadData();
        },
        error => console.log(error));
  }

}
