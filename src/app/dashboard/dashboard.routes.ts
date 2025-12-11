import { Routes } from "@angular/router";
import { Dashboard } from "./dashboard";
import { Chart } from "./chart/chart";
import { Report } from "./report/report";

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      { path: 'chart', component: Chart },
      { path: 'report', component: Report },
      { path: '', redirectTo: 'chart', pathMatch: 'full' }
    ]
  }
];
