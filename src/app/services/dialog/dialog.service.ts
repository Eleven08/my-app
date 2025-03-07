import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Injector } from '@angular/core';

import { AddUserComponent } from '../../components/add-user/add-user.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private injector: Injector, private dialog: MatDialog) {}

  openAddUserDialog() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '500px',
    });

    return dialogRef.afterClosed();
  }
}
