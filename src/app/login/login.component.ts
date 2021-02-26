import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JuryControllerService } from '../api/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted =false;
  logForm!: FormGroup;

  constructor(private juryService : JuryControllerService,private toastr: ToastrService, private fb: FormBuilder, private router: ActivatedRoute,private route: Router) { }

  ngOnInit(): void {
    this.loginForm();

  }

  loginForm() {
    this.logForm = this.fb.group({
      juryTelephone: ["", Validators.required],
    })
  }

  onSubmit() {

    if (!this.logForm.valid) {
      this.toastr.error("Veuillez renseigner un numéro valide");
    } else {
      this.juryService.getJuryByNumberUsingGET(this.logForm.value.juryTelephone).subscribe(
        data => {
          if (data) {
            this.route.navigate(['/vote',data]);
           
          } else {
            this.toastr.error("Vous n'existez pas , alors vous ne pouvez pas voter");
          }},
        error => console.log(error),
      )
      
    }
  }

}
