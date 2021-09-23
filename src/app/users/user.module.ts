import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListaComponent } from "./lista/lista.component";
import { UserComponent } from "./user/user.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ListaComponent, UserComponent],
  exports: [ListaComponent, UserComponent],
})
export class UsersModule {}
