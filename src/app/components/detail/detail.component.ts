import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Spacecraft } from 'src/app/models/model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  
  constructor(private dialogRef: MatDialogRef<DetailComponent>, @Inject(MAT_DIALOG_DATA) public item: Spacecraft,) { }

  


}
