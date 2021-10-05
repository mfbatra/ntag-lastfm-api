import { Component, OnInit } from '@angular/core';
import { IlastFmartistsearch } from 'src/app/ilast-fmartistsearch';
import { LastfmService } from 'src/app/lastfm.service';

@Component({
  selector: 'app-search-artists',
  templateUrl: './search-artists.component.html',
  styleUrls: ['./search-artists.component.css']
})
export class SearchArtistsComponent implements OnInit {

  searchResult: string[] = [];
  artistName: string[] = [];

  constructor(private _lastfmService: LastfmService) { }

  ngOnInit(): void {



    
  }


  async getLastFMArtistInfo(artist:string,limit:number) {
    const response: IlastFmartistsearch = await this._lastfmService.getArtist(artist,limit);
  }

}
