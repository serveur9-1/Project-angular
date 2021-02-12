import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventServiceService } from './../event-service.service';
import { Evenement } from './../api/models/evenement';
import { Component, OnInit } from '@angular/core';
import { EvenementControllerService } from '../api/services/evenement-controller.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  evenement!: Evenement;
  eventForm!: FormGroup;
  evenId!: number;
  submitted = false;
  userFile: any;
  public imagePath: any;
  imgURL: any;
  message: string | undefined;
  formData = new FormData();


  constructor(private eventService: EvenementControllerService, private toastr: ToastrService, private fb: FormBuilder, private router: ActivatedRoute, private HttpClient : HttpClient) { }
  get f() {
    return this.eventForm.controls;
  }
  ngOnInit(): void {
    this.evenFormInit()
    this.evenId = this.router.snapshot.params.id;
    if (this.evenId) {
      this.eventService.getEvenementByIdUsingGET(this.evenId).subscribe(
        data => this.eventForm.patchValue(data),
        error => console.log(error)
      )
    }
  }
  



  evenFormInit() {
    this.eventForm = this.fb.group({
      evenementId: [100000],
      evenementNom: ["", Validators.required],
      evenementType: ["Individuel", Validators.required],
      evenementDateDebut: ["", Validators.required],
      evenementDateFin: ["", Validators.required],
      evenementPhoto: []
    })
  }

  addData() {
    const optionRequete = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
      })
    };
    const evenement = this.eventForm.value;
    this.formData.append('evenement',evenement);
    console.log('eee', this.formData)
    this.HttpClient.post<Evenement>("http://127.0.0.1:8080/evenements",evenement).subscribe(
      (res)=>{
        console.log(res);
      },
      (error) => {
        console.error(error)
      }
    )
  }

  onSelectFile(event: any) {
    let blobTest : any;
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      let blob :any;
      // COnversion en type blob
       file.arrayBuffer().then((arrayBuffer: any) => {
        blobTest = arrayBuffer;
        this.f['evenementPhoto'].setValue(file);
        blob = new Blob([new Uint8Array(blobTest)], {type: file.type });
        console.log('file blob', blobTest   )
    });
      this.userFile = file;
      // this.f['evenementPhoto'].setValue(blobTest);
      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "cette image n'est pas supportée.";
        return;
      }
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };

    }
  }


  onSubmit() {

    if (!this.eventForm.valid) {
      this.toastr.error("Veuillez renseigner les champs réquis");
    } else {
      this.addData();
      // this.eventService.createOrUpdateEvenementUsingPOST(this.eventForm.value)
      // .subscribe(
      //   data => {
      //     if (this.evenId) {

      //     this.toastr.success("evenement modifié avec succès");

      //     } else {

      //     this.toastr.success("evenement ajouté avec succès");
      //     this.eventForm.reset();
      //     }
      //   },
      //   error => this.toastr.error(error.message)
      //   );
    }
  }

}
