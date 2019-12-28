import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';
import { DateAdapter } from '@angular/material/core';
import { Location } from '@angular/common';
import { Person } from 'src/app/classes/persons';
import { IPerson } from 'src/app/interfaces/person';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { IUser } from 'src/app/interfaces/user';
import { ITypePerson } from 'src/app/interfaces/typePerson';
import { TypesPersonService } from 'src/app/services/typesPerson/typesPerson.service';
import { Toaster } from 'src/app/commons/Toaster';
import { User } from 'src/app/classes/users';
import { isNull } from 'util';
import { PersonsService } from 'src/app/services/persons/persons.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  person: IPerson;
  avatarFile: File;
  myFormGroup: FormGroup;
  connectedUser: IUser;
  personTypeList: ITypePerson[];
  selectedTypePersonId: number;

  /**
   * Forms controllers
   */
  firstNameControl             = new FormControl('', [Validators.required]);
  lastNameControl          = new FormControl('', [Validators.required]);
  emailControl            = new FormControl('', [Validators.required, Validators.minLength(1), Validators.email]);
  birthDateControl   = new FormControl('', [Validators.minLength(0)]);
  mobileNumberControl     = new FormControl('', [Validators.pattern(/#^0[1-68]([-. ]?[0-9]{2}){4}$#/)]);

  constructor(private location: Location,
    private userService: UsersService,
    private adapter: DateAdapter<any>,
    private personsService: PersonsService,
    private typesPersonService: TypesPersonService
  ) {}

  ngOnInit() {
    /**
     * form initialization
     */
    this.adapter.setLocale('fr-FR');
    this.person               = new Person();
    this.person.birthDate = new Date();
    this.myFormGroup = new FormGroup({
      firstName: this.firstNameControl,
      lastName: this.lastNameControl,
      email: this.emailControl,
      mobileNumber: this.mobileNumberControl,
      birthDate: new FormControl(),
      isActive: new FormControl(),
      adress: new FormControl('', [Validators.minLength(0)])
    });
    // To retrieve the connected user
    this.userService.userConnectedSubject.subscribe(user => {
      this.connectedUser = user;
    });
    this.userService.getUserbyToken();
    // To have all types of persons
    this.typesPersonService.getAll()
    // .subscribe(datas => {
    //   console.log(datas)
    //   this.personTypeList = datas;
    // }, error => {
    //   console.error(error.message)
    //   // Toaster.error(error.message, 'Récupération de la liste des types de personnes impossible');
    // });
  }

  /**
   * Return to previous page
   */
  back() {
    this.location.back();
  }

  /**
   * To retrieve the selected typePerson id
   * @param p_typePersonId id of typePerson selected
   */
  onSelect(p_typePersonId: number) {
    this.selectedTypePersonId = p_typePersonId;
  }

  /**
   * formulaire validation
   */
  formValidation() {
    this.person = new Person();
    this.person.lastName = this.myFormGroup.get('lastName').value;
    this.person.firstName = this.myFormGroup.get('firstName').value;
    this.person.birthDate = this.myFormGroup.get('birthDate').value;
    this.person.mobileNumber = this.myFormGroup.get('mobileNumber').value;
    this.person.adress = this.myFormGroup.get('adress').value;
    this.person.email = this.myFormGroup.get('email').value;
    // Define type person if needed
    if (!isNull(this.personTypeList)) {
      if (this.selectedTypePersonId > 0) {
        this.person.typePerson = this.personTypeList.find(ptl => ptl.id === this.selectedTypePersonId);
      }
    }
    // Define isActive id needed
    if (!isNull(this.connectedUser && this.connectedUser.admin)) {
      this.person.isActive = this.myFormGroup.get('isActive').value;
    } else {
     this.person.isActive = true;
    }
    console.log(this.person)
    this.personsService.add(this.person).subscribe(data => {
      this.person = data;
      Toaster.showSuccessPopup(`L'enregistrement s'est correctement déroulé`, `Enregistrement effectué`);
      /**
       * Vérifier la présence du fichier image de l'avatar et l'enregistrement le cas échéant
       */
    }, error => {
      Toaster.error(error.message, `Echec de l'enregistrement`);
    });
  }

  sendFile(data) {
    if (this.avatarFile !== undefined && this.person.id !== undefined) {
      // this.myDataBase.envoiAvatar(this.avatarFile,
      //   this.person.id.toString()).subscribe(() => {}, err => this.httpErrorHandler.modalHttpError(err));
    }
  }

  fileSelection(event) {
    this.avatarFile = event.target.files[0];
}

}
