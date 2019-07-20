import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';
import { DateAdapter } from '@angular/material/core';
import { Location } from '@angular/common';
import { Person } from 'src/app/classes/persons';
import { IPerson } from 'src/app/interfaces/person';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  person: IPerson = new Person();
  private avatarFile: File;
  myFormGroup: FormGroup;

  /**
   * Forms controllers
   */
  firstNameControl             = new FormControl('', [Validators.required]);
  lastNameControl          = new FormControl('', [Validators.required]);
  passwordControl        = new FormControl('', [Validators.required, Validators.minLength(1)]);
  emailControl            = new FormControl('', [Validators.required, Validators.minLength(1), Validators.email]);
  birthDateControl   = new FormControl('', [Validators.minLength(0)]);
  mobileNumberControl     = new FormControl('', [Validators.pattern(/#^0[1-68]([-. ]?[0-9]{2}){4}$#/)]);

  constructor(private location: Location,
    private userService: UsersService,
    private adapter: DateAdapter<any>,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.adapter.setLocale('fr-FR');
    this.person               = new Person();
    this.person.birthDate = new Date();
    this.myFormGroup            = new FormGroup({
      firstName            : this.firstNameControl,
      lastName         : this.lastNameControl,
      password       : this.passwordControl,
      confirmPassword: this.passwordControl,
      email           : this.emailControl,
      mobileNumber    : this.mobileNumberControl,
      birthDate  : new FormControl(),
      adress        : new FormControl('', [Validators.minLength(0)])
    });
  }

  test() {
    console.log(this.person.birthDate);
  }

  retour() {
    this.location.back();
  }

  validation() {
    // this.authenticationService.signUp(this.person).subscribe(data => {
    //     this.person = data;
    //     this.envoiFichier(data);
    //   }, err => {
    //     console.log(err.error);
    //   });
  }

  envoiFichier(data) {
    if (this.avatarFile !== undefined && this.person.id !== undefined) {
      // this.myDataBase.envoiAvatar(this.avatarFile,
      //   this.person.id.toString()).subscribe(() => {}, err => this.httpErrorHandler.modalHttpError(err));
    }
  }

  selectionFichier(event) {
    this.avatarFile = event.target.files[0];
}

}
