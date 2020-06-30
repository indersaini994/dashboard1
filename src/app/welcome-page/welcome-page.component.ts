import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig} from "@angular/material";
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onLogin(){

      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus= true;
      dialogConfig.width = "30%";
      this.dialog.open(LoginComponent, dialogConfig);
  }

}
