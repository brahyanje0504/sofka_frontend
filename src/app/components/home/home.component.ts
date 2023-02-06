import { Component, OnInit } from '@angular/core';
import { ResponseData, Spacecraft } from 'src/app/models/model';
import { ServicesService } from 'src/app/services/services.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { DetailComponent } from '../detail/detail.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private services: ServicesService, public dialog: MatDialog) {

  }


  countries: string[] = []
  fuels: string[] = []
  data: Spacecraft[] = []
  backup: Spacecraft[] = []
  countrySelected: string = ""
  categorySelected: string = ""
  fuelSelected: string = ""
  activeSelected: string = ""

  ngOnInit(): void {
    this.services.GetAll().subscribe(r => {
      this.data = r.body?.data
      this.backup = r.body?.data

      this.services.GetCountries().subscribe(c => {
        this.countries = c.body?.data

      })

      this.services.GetFuels().subscribe(c => {
        this.fuels = c.body?.data
      })


    })
  }


  openCreate() {
    this.dialog.open(CreateComponent, {
      width: '40%'
    }).afterClosed().subscribe(result => {
      this.ngOnInit()
    });
  }

  details(item: Spacecraft) {
    this.dialog.open(DetailComponent, {
      width: '80%',
      height: '70%',
      data: item
    })
  }

  deleteFilters() {
    window.location.reload()
  }

  filterCategory(category: string) {
    this.data = this.backup
    this.countrySelected = ""
    this.fuelSelected = ""
    this.activeSelected = ""
    let data: Spacecraft[] = []
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].type_spacecraft == category) {
        data.push(this.data[i])
      }
    }
    this.data = data
  }

  filterCountry(country: string) {
    this.categorySelected = ""
    this.fuelSelected = ""
    this.activeSelected = ""
    this.data = this.backup
    let data: Spacecraft[] = []
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].country == country) {
        data.push(this.data[i])
      }
    }
    this.data = data
  }

  filterFuel(fuel: string) {
    this.countrySelected = ""
    this.categorySelected = ""
    this.activeSelected = ""
    this.data = this.backup
    let data: Spacecraft[] = []
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].type_fuel == fuel) {
        data.push(this.data[i])
      }
    }
    this.data = data

  }

  filterActive(active: string) {
    this.countrySelected = ""
    this.fuelSelected = ""
    this.categorySelected = ""
    this.data = this.backup
    let data: Spacecraft[] = []
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].activated ==  JSON.parse(active)) {
        data.push(this.data[i])
      }
    }
    this.data = data

  }


}
