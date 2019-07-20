import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes} from '@angular/router';
import { RouterModule} from '@angular/router';
import { SigninComponent } from '../components/users/signin/signin.component';
import { SignupComponent} from '../components/users/signup/signup.component';
// import { DisplayDataTableComponent } from './display-data-table/display-data-table.component'
// import { ProfilNounouComponent } from './profil-nounou/profil-nounou.component'
// import { ContratComponent } from './contrat/contrat.component'

const Routes: Routes = [
  {path: 'signIn', component: SigninComponent},
  {path: 'signUp', component: SignupComponent},
  // {path: 'Profiles', component     : DisplayDataTableComponent},
  // {path: 'ProfileNounou', component: ProfilNounouComponent},
  // {path: 'Contrat', component      : ContratComponent},
  {path: '', redirectTo: 'signIn', pathMatch: 'full'},
]

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(Routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
