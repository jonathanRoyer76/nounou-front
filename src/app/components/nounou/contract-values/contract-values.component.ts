import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContractValuesService } from '../../../services/nounou/contract-values/contract-values.service';
import { DefaultContractValues } from '../../../classes/defaultContractValues';
import { Toaster } from 'src/app/commons/Toaster';

@Component({
  selector: 'app-profil-nounou',
  templateUrl: './contract-values.component.html',
  styleUrls: ['./contract-values.component.scss']
})
export class ContractValuesComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private serviceContractValues: ContractValuesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
    this.serviceContractValues.getLastContractValues().subscribe(data => {
      console.log(data)
    })
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      tauxHoraire      : ['', Validators.required],
      montantRepas     : ['', Validators.required],
      montantIndemnites: ['', Validators.required],
      montantGouter    : ['', Validators.required],
      baremeKm         : ['', Validators.required]
    });
  }

  validation() {
    const profil               = new DefaultContractValues();
    const formulaire           = this.userForm.value;
    profil.vehicleAmount          = formulaire['baremeKm'];
    profil.gouterAmount    = formulaire['montantGouter'];
    profil.dailyAmount = formulaire['montantIndemnites'];
    profil.mealAmount      = formulaire['montantRepas'];
    profil.netHourly       = formulaire['tauxHoraire'];
    this.serviceContractValues.addDefaultContractValues(profil).subscribe(retour => {
      if (retour) {
        Toaster.showSuccessPopup('Profil mis à jour', 'Fermer');
      }
    });
  }
}
