import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IArtist, IlastFmsearch } from 'src/app/ilast-fmsearch';
import { map, startWith } from 'rxjs/operators';

import { FormControl } from '@angular/forms';
import { LastfmService } from '../lastfm.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class HeaderComponent implements OnInit {
  myControl = new FormControl();
  options: IArtist[] = [
  ];
  filteredOptions: Observable<IArtist[]> | undefined;

  constructor(private route:ActivatedRoute,private router:Router,private _lastfmService: LastfmService) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
   }

   this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
         // trick the Router into believing it's last link wasn't previously loaded
         this.router.navigated = false;
         // if you need to scroll back to top, here is the right place
         window.scrollTo(0, 0);
      }
   });
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

  }

  updateMySelection(event: any) {

    
    this.router.navigateByUrl(`detail/${event}`)

  }
  async getLastFMArtistSearch(name:string ,limit:number) {
    const response: IlastFmsearch = await this._lastfmService.getArtistSearch(`artist=${name}`,limit);
     response.results?.artistmatches?.artist.forEach(artist=>
      this.options.push( artist))
     
    /*   response.results.artistmatches.artist.forEach(
      
      artist=> {this.name = artist.name,this.listeners= artist.listeners,this.picture= artist.image[0]['#text']}
      );
      */

  }


  displayFn(user: IArtist): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): IArtist[] {
    const filterValue = name.toLowerCase();
    this.getLastFMArtistSearch(filterValue,5);
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}