import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Evenement, Jury } from '../api/models';
import { EvenementControllerService, JuryControllerService } from '../api/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  allJuries:any[] = [];
  submitted =false;
  logForm!: FormGroup;

  constructor(private juryService : JuryControllerService,private toastr: ToastrService, private fb: FormBuilder, private router: ActivatedRoute,private route: Router) { }

  ngOnInit(): void {
    this.reloadData();
    this.loginForm();

  }
  reloadData(){

    this.juryService.getAllJuriesUsingGET().subscribe(

      (res)=>{
        this.allJuries = res;
      },
      (error) => {
        console.error(error)
      }
    )
  }

  loginForm() {
    this.logForm = this.fb.group({
      juryId: ["", Validators.required],
    })
  }

  onSubmit() {

    if (!this.logForm.valid) {
      this.toastr.error("Veuillez choisir un jury");
    } else {
      console.log(this.logForm.value.juryId);
      this.route.navigate(['/vote',this.logForm.value.juryId]);
    }
  }

}
