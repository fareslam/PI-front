import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PredictionComponent } from './dashboard/prediction/prediction.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'd',
    component: DashboardComponent,
    children: [{ path: 'prediction', component: PredictionComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
