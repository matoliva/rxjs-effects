import { Component, ComponentFactoryResolver, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { filter } from "rxjs/operators";
import { User } from "src/app/models/user.model";
import { AppState } from "src/app/store/app.reducers";
import * as actions from "../../store/actions";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styles: [],
})
export class UserComponent implements OnInit {
  id: string;
  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store
      .select("user")
      .pipe(filter((userState) => userState.user !== null))
      .subscribe(({ user }) => (this.user = user));

    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get("id");
      this.store.dispatch(actions.loadUser({ id: this.id }));
    });
  }
}
