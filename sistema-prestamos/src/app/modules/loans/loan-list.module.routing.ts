import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoansComponent } from "./pages/loans/loans.component";

const routes: Routes = [
  {
    path:"",
    component: LoansComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanModuleRouting {}
