import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { ListaComponent } from "./users/lista/lista.component";
import { UserComponent } from "./users/user/user.component";

const routes: Routes = [
  { path: "home", component: ListaComponent },
  { path: "user/:id", component: UserComponent },
  { path: "**", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
