import { Component, OnInit } from '@angular/core';

declare const google: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-ajoutemail',
  templateUrl: './ajoutemail.component.html',
  styleUrls: ['./ajoutemail.component.css']
})

/** @title Simple form field */
@Component({
  selector: 'form-field-overview-example',
  templateUrl: 'form-field-overview-example.html',
  styleUrls: ['form-field-overview-example.css'],
})

export class AjoutemailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
export class FormFieldOverviewExample {}
