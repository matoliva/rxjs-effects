import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, tap } from "rxjs/operators";
import { UserService } from "src/app/services/user.service";
import { loadUsers, loadUsersSuccess } from "../actions";

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.userService
          .getUsers()
          .pipe(map((users) => loadUsersSuccess({ users: users })))
      )
    )
  );
}
