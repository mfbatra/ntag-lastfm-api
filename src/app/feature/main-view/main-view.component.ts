import { Component, Input, OnInit } from '@angular/core';

import { ILastFMData } from 'src/app/ilast-fmdata';
import { LastfmService } from 'src/app/lastfm.service';
import { Router } from '@angular/router';

export interface Country {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

@Input() public parentData: string | undefined;


  country: Country[] = [
    { value: 'pakistan', viewValue: 'Pakistan' },
    { value: 'germany', viewValue: 'Germany' },
    { value: 'china', viewValue: 'China' }
  ];

  selected = this.country[1].value;
  names: string[] = [];
  picture = [];
  name:string="";
  mbid:string="";
  response:ILastFMData | undefined;

  constructor(private router:Router,private _lastfmService: LastfmService) {


  }

  ngOnInit(): void {
    this.getLastFMGeoData();

  }
  changeCountry(event: any) {
    this.names = [];
    this.getLastFMGeoData();
  }

  getDetails(name: string) {

    this.name=name;
    this.router.navigateByUrl(`detail/${name}`)

  }
  async getLastFMGeoData() {
    this.response = await this._lastfmService.getArtistByCountry(this.selected);
   /*  response.topartists.artist.forEach(
      artist => { this.names.push(artist.name) }
    ); */
  }



}