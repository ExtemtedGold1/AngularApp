import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFunctionalityComponent } from './add-functionality/add-functionality.component';
import { EditFunctionalityComponent } from './edit-functionality/edit-functionality.component';
import { HomeComponent } from './home/home.component';
import { ViewFunctionalityComponent } from './view-functionality/view-functionality.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent  },
  { path: 'Home/ViewFunctionality', component: ViewFunctionalityComponent },
  { path: 'AddFunctionality' , component: AddFunctionalityComponent },
  { path: 'EditFunctionality', component: EditFunctionalityComponent},
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
