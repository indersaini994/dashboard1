import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  onSubmit(){
      this.onClose();
  }

  onClose(){
     this.dialogRef.close();
  }

}
