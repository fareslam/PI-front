import { Routes } from "@angular/router";

import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { TableListComponent } from "../../table-list/table-list.component";
import { TypographyComponent } from "../../typography/typography.component";
import { IconsComponent } from "../../icons/icons.component";
import { MapsComponent } from "../../maps/maps.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { UpgradeComponent } from "../../upgrade/upgrade.component";
import { ResilienceComponent } from "app/resilience/resilience.component";
import { EmissionsComponent } from "app/emissions/emissions.component";
import { PovertyComponent } from "app/poverty/poverty.component";
import { FreshwaterComponent } from "app/freshwater/freshwater.component";
import { HungerComponent } from "app/hunger/hunger.component";
import { ClimateComponent } from "app/climate/climate.component";
import { PredictionComponent } from "app/prediction/prediction.component";
import { HomeComponent } from "app/home/home.component";
import { SdgsComponent } from "app/sdgs/sdgs.component";
import { UserGuardService } from "app/services/user-guard.service";
import { RecComponent } from "app/rec/rec.component";

export const AdminLayoutRoutes: Routes = [
  { path: "", redirectTo: "/dashboard/home", pathMatch: "full" },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [UserGuardService],
  },
  {
    path: "user-profile",
    component: UserProfileComponent,
    canActivate: [UserGuardService],
  },

  {
    path: "resilience",
    component: ResilienceComponent,
    canActivate: [UserGuardService],
  },
  {
    path: "hunger",
    component: HungerComponent,
    canActivate: [UserGuardService],
  },

  {
    path: "climate",
    component: ClimateComponent,
    canActivate: [UserGuardService],
  },
  {
    path: "poverty",
    component: PovertyComponent,
    canActivate: [UserGuardService],
  },
  {
    path: "water",
    component: FreshwaterComponent,
    canActivate: [UserGuardService],
  },

  {
    path: "emissions",
    component: EmissionsComponent,
    canActivate: [UserGuardService],
  },
  { path: "home", component: HomeComponent, canActivate: [UserGuardService] },
  { path: "sdgs", component: SdgsComponent, canActivate: [UserGuardService] },

  { path: "prediction", component: PredictionComponent, canActivate: [UserGuardService] },
  { path: "rec", component: RecComponent, canActivate: [UserGuardService] },

];
