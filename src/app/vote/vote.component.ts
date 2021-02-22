import { Vote_candidats } from './../api/models/vote-_candidats';
import { Vote_groupes } from './../api/models/vote-_groupes';
import { Comment_groupe } from './../api/models/comment-_groupe';
import { Comment_candidat } from './../api/models/comment-_candidat';
import { Candidats } from './../api/models/candidats';
import { HttpClient } from '@angular/common/http';
import { Groupes } from './../api/models/groupes';
import { Criteres } from './../api/models/criteres';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Evenement, Jury } from '../api/models';
import { CandidatControllerService, CritereControllerService, EvenementControllerService, GroupeControllerService, VotesGroupeOrCandidatControllerService } from '../api/services';
import { JuryControllerService } from '../api/services/jury-controller.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentCandidatOrGroupeControllerService } from '../api/services/comment-candidat-or-groupe-controller.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  jury: any = {};
  events: any = {};
  criteres: Criteres[] = [];
  groupes: any[] = [];
  candidats: Candidats[] = [];
  juryId!: number;
  eventId!: number;
  Nbre!: number;
  type!: string;
  commentForm!: FormGroup;
  noteForm!: FormGroup;
  candidId!: number;
  groupId!: number;
  groupeId!: number;
  critereId!: number;
  candidatId!: number;
  currentRate: any[] = [];

  constructor(private votesGroupeOrCandidatControllerService: VotesGroupeOrCandidatControllerService, private HttpClient: HttpClient, private commentCandidatOrGroupeService: CommentCandidatOrGroupeControllerService, private groupeService: GroupeControllerService, private candidatService: CandidatControllerService, private critereService: CritereControllerService, private juryService: JuryControllerService, private toastr: ToastrService, private eventService: EvenementControllerService, private router: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.reloadData();
    this.eventData();
    this.commentFormInit();
    this.noteFormInit();

  }
  reloadData() {
    this.juryId = this.router.snapshot.params.id;
    this.juryService.getJuryByIdUsingGET(this.juryId).subscribe(

      (res) => {
        this.jury = res;
      },
      (error) => {
        console.error(error)
      }
    )
  }

  eventData() {
    this.juryId = this.router.snapshot.params.id;
    this.eventService.getEvenementByJuryIdUsingGET(this.juryId).subscribe(

      (res) => {
        this.events = res;
        this.critereData();
        this.candidatevent();

      },
      (error) => {
        console.error(error)
      }
    )
  }

  critereData() {
    this.eventId = this.events.evenementId;
    this.critereService.getCritereByEvenementIdUsingGET(this.eventId).subscribe(

      (res) => {
        this.criteres = res;
        this.Nbre = this.additional(this.criteres);
      },
      (error) => {
        console.error(error)
      }
    )
  }

  additional(critere: any) {
    let nbre = 0;
    console.log('critere', critere);
    for (let i = 0; i < critere.length; i++) {
      nbre = nbre + parseInt(critere[i].critereBareme);

    }
    return nbre;
  }

  candidatevent() {
    this.eventId = this.events.evenementId;
    this.type = this.events.evenementType;
    if (this.type == "Groupe") {
      this.groupeService.getGroupeByEventIDUsingGET(this.eventId).subscribe(

        (res) => {
          this.groupes = res;
          console.log('groupe', this.groupes)
        },
        (error) => {
          console.error(error)
        }

      )
    } else {
      this.candidatService.getCandidatByEventIdUsingGET(this.eventId).subscribe(

        (res) => {
          this.candidats = res;
          console.log('candidat', this.candidats)
        },
        (error) => {
          console.error(error)
        }

      )
    }


  }

  candidat1(candidId: number) {
    this.candidId = candidId;
    this.commentFormInit();
    this.commentForm1();
    this.noteForm1();
  }

  groupe1(groupeId: number) {
    this.groupeId = groupeId;
    this.commentFormInit();
    this.commentForm1();
    this.noteForm1();
  }

  commentFormInit() {

    this.type = this.events.evenementType;
    this.juryId = this.router.snapshot.params.id;
    if (this.type == "Groupe") {
      console.log('b1');
      this.commentForm = this.fb.group({
        commentaireGroupeId: [100000],
        commentaire: ["", Validators.required],
        groupeId: this.groupId,
        juryId: this.juryId,
        evenementId: this.events.evenementId,

      })
    } else {
      this.commentForm = this.fb.group({
        commentaireCandidatId: [100000],
        commentaire: ["", Validators.required],
        candidatId: this.candidId,
        juryId: this.juryId,
        evenementId: this.events.evenementId,
      })
    }

  }

  commentForm1() {
    this.juryId = parseInt(this.router.snapshot.params.id);
    if (this.juryId && this.candidId && this.events.evenementId) {

      if (this.type == "Groupe") {

        this.HttpClient.get<Comment_groupe>("http://127.0.0.1:8080/comment_groupe/" + this.events.evenementId + "/" + this.juryId + "/" + this.groupeId).subscribe(
          data => this.commentForm = this.fb.group({
            commentaireGroupeId: data.commentaireGroupeId,
            commentaire: data.commentaire,
            groupeId: data.groupes?.groupeId,
            juryId: data.jury?.juryId,
            evenementId: data.evenement?.evenementId,
          }),
          error => console.log(error)
        )

      } else {

        this.HttpClient.get<Comment_candidat>("http://127.0.0.1:8080/comment_candidat/" + this.events.evenementId + "/" + this.juryId + "/" + this.candidId).subscribe(
          data => this.commentForm = this.fb.group({
            commentaireCandidatId: data.commentaireCandidatId,
            commentaire: data.commentaire,
            candidatId: data.candidats?.candidatId,
            juryId: data.jury?.juryId,
            evenementId: data.evenement?.evenementId,
          }),
          error => console.log(error)
        )
      }

    }

  }


  noteForm1() {
    this.juryId = parseInt(this.router.snapshot.params.id);
    console.log('tester',this.juryId, this.candidId, this.events.evenementId, this.critereId);
    if (this.juryId, this.candidId, this.events.evenementId, this.critereId) {

      if (this.type == "Groupe") {

        this.HttpClient.get<Vote_groupes>("http://127.0.0.1:8080/vote_groupe/" + this.events.evenementId + "/" + this.juryId + "/" + this.groupeId + "/" + this.critereId).subscribe(
          data => this.noteForm = this.fb.group({
            voteGroupeId: data.voteGroupeId,
            note: data.note,
            groupeId: data.groupe?.groupeId,
            juryId: data.jury?.juryId,
            evenementId: data.evenement?.evenementId,
            critereId: data.critere?.critereId,
          }),
          error => console.log(error)
        )

      } else {

        this.HttpClient.get<Vote_candidats>("http://127.0.0.1:8080/vote_candidat/" + this.events.evenementId + "/" + this.juryId + "/" + this.candidId + "/" + this.critereId).subscribe(
          data => this.noteForm = this.fb.group({
            voteCandidatId: data.voteCandidatId,
            note: data.note,
            candidatId: data.candidat?.candidatId,
            juryId: data.jury?.juryId,
            evenementId: data.evenement?.evenementId,
            critereId: data.critere?.critereId,
          }),
          error => console.log(error)
        )
      }

    }

  }


  critereGet(critereId: number) {

    this.critereId = critereId;
    this.noteForm1();

  }

  noteFormInit() {

    this.type = this.events.evenementType;
    this.juryId = this.router.snapshot.params.id;
    if (this.type == "Groupe") {

      this.noteForm = this.fb.group({
        voteGroupeId: [100000],
        note: ["", Validators.required],
        groupeId: this.groupId,
        juryId: this.juryId,
        evenementId: this.events.evenementId,
        critereId: this.critereId,

      })
    } else {
      this.noteForm = this.fb.group({
        voteCandidatId: [100000],
        note1: ["", Validators.required],
        candidatId: this.candidId,
        juryId: this.juryId,
        evenementId: this.events.evenementId,
        critereId: this.critereId,
      })
    }

  }

  onSubmitComment() {
    
    if (!this.commentForm.valid) {
      this.toastr.error("Veuillez commenter");
    } else {
      if (this.events.evenementType == "Groupe") {
        this.commentCandidatOrGroupeService.createOrUpdateCommentGroupeUsingPOST({
          ...this.commentForm.value,
          evenement: { evenementId: this.events.evenementId },
          groupes: { groupeId: this.groupId },
          jury: { juryId: this.juryId }
        })
          .subscribe(
            data => this.toastr.success("Commentaire enregistré avec succès"),
            error => this.toastr.error(error.message)
          );
      } else {
        this.commentCandidatOrGroupeService.createOrUpdateCommentCandidatUsingPOST({
          ...this.commentForm.value,
          evenement: { evenementId: this.events.evenementId },
          candidats: { candidatId: this.candidId },
          jury: { juryId: this.juryId }
        })
          .subscribe(
            data => this.toastr.success("Commentaire enregistré avec succès"),
            error => this.toastr.error(error.message)
          );
      }

    }
  }


  onSubmitNote(critereId: number, critereBareme: any, note: number) {
    this.critereId = critereId;

    note = (note * critereBareme) / 5;
    console.log(this.noteForm);
    if (this.events.evenementType == "Groupe") {
      this.commentCandidatOrGroupeService.createOrUpdateCommentGroupeUsingPOST({
        ...this.noteForm.value,
        note: note,
        critereId: critereId,
      })
        .subscribe(
          data => this.toastr.success("Commentaire enregistré avec succès"),
          error => this.toastr.error(error.message)
        );
    } else {
      this.votesGroupeOrCandidatControllerService.createOrUpdateVoteCandidatUsingPOST({
        ...this.noteForm.value,
        note: note,
        critere: { critereId: critereId },
        candidat: { candidatId: this.candidId },
        evenement: { evenementId: this.events.evenementId },
        jury: { juryId: this.juryId }

      }).subscribe(
        data => this.toastr.success("vote enregistré avec succès"),
        error => this.toastr.error(error.message)
      );
    }


  }



}
