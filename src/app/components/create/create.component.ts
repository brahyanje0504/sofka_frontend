import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Spacecraft } from '../../models/model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private service: ServicesService,
    private dialogRef: MatDialogRef<CreateComponent>) { }

  validateForm!: FormGroup;
  base64textString: string = ""
  category: string = ""
  isChecked = true;

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      type_spacecraft: [''],
      tons_of_thrust: [0, [Validators.required]],
      tons_of_weight: [0, [Validators.required]],
      type_fuel: ['', [Validators.required]],
      height: [0, [Validators.required]],
      country: ['', [Validators.required]],
      objective: ['', [Validators.required]],
      activated: [false, [Validators.required]],
      people_capacity: [0, [Validators.required]],
      transport_capacity: [0, [Validators.required]],
      massive_speed: [0, [Validators.required]],
      propulsion_system: ['', [Validators.required]],
    });
  }

  save() {
    if (this.validateForm.valid) {
      this.service.Save(this.buildParameters()).subscribe(r => {
        if (!r.body?.status) {
          alert(r.body?.message)
        }
        this.dialogRef.close()
      })

    }
  }

  getCategory(category: string){
    this.category = category
  }


  buildParameters(): Spacecraft {
    return {

      name: this.validateForm.value.name,
      type_spacecraft: this.category,
      tons_of_thrust: this.validateForm.value.tons_of_thrust,
      tons_of_weight: this.validateForm.value.tons_of_weight,
      type_fuel: this.validateForm.value.type_fuel,
      height: this.validateForm.value.height,
      country: this.validateForm.value.country,
      objective: this.validateForm.value.objective,
      activated: this.isChecked,
      people_capacity: this.validateForm.value.people_capacity,
      transport_capacity: this.validateForm.value.transport_capacity,
      massive_speed: this.validateForm.value.massive_speed,
      propulsion_system: this.validateForm.value.propulsion_system,
      image: this.base64textString,

    } as Spacecraft
  }


    handleFileSelect(evt:any){
      var files = evt.target.files;
      var file = files[0];

    if (files && file) {
        var reader = new FileReader();
        reader.onload =this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
    }
  }



  _handleReaderLoaded(readerEvt:any) {
     var binaryString = readerEvt.target.result;
            this.base64textString= `data:image/jpeg;base64,${btoa(binaryString)}` ;
            console.log(this.base64textString);
    }


}
