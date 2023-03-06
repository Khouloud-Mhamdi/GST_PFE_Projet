import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  signupForm !: FormGroup ; 
  text !: String ;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      nom : ["", [Validators.required, Validators.minLength(3)]], 
      prenom : ["", [Validators.required , Validators.minLength(3)]], 
      email : ["", [Validators.email,Validators.required]],
      mdp : ["", [Validators.required , Validators.minLength(5) , Validators.maxLength(10)]], 
      confirm : ["" , Validators.required]
     });
  }
  signup(){
   this.signupForm.reset();
   alert("compte crée avec succée ! ");
  }

}
