import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { ILastFMData } from './ilast-fmdata';
import { IlastFmartistsearch } from './ilast-fmartistsearch';
import { IlastFmtracks } from './ilast-fmtracks';
import { IlastFmalbums } from './ilast-fmalbums';
import { IlastFmsearch } from 'src/app/ilast-fmsearch';

const fmurl="http://ws.audioscrobbler.com/2.0/"
const apikey="d6d60f54e451cc6bd5ff2983cc47e020";
const geoartistlimit=10;
const track=5;
const album=5;
@Injectable({
  providedIn: 'root'
})
export class LastfmService {


  constructor(private http: HttpClient,
    ) { }

  getArtistByCountry(country: string): Promise<ILastFMData>{

    return this.http.get<ILastFMData>(fmurl+"?method=geo.gettopartists&limit="+geoartistlimit+"&country="+country+"&api_key="+apikey+"&format=json").toPromise();
  }

  getArtist(search:string,limit:number): Promise<IlastFmartistsearch> {

    return this.http.get<IlastFmartistsearch>(fmurl+"?method=artist.getinfo&"+search+"&limit="+limit+"&api_key="+apikey+"&format=json").toPromise();


  }

  getArtistSearch(search:string,limit:number): Promise<IlastFmsearch>
  {

    return this.http.get<IlastFmsearch>(fmurl+"?method=artist.search&"+search+"&limit="+track+"&api_key="+apikey+"&format=json").toPromise();

  }

  getArtistTracks(search:string): Promise<IlastFmtracks>{

    return this.http.get<IlastFmtracks>(fmurl+"?method=artist.gettoptracks&"+search+"&limit="+track+"&api_key="+apikey+"&format=json").toPromise();

  }
  getArtistAlbums(search:string): Promise<IlastFmalbums>{

    return this.http.get<IlastFmalbums>(fmurl+"?method=artist.gettopalbums&"+search+"&limit="+album+"&api_key="+apikey+"&format=json").toPromise();

  }


}
