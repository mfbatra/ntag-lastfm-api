import { Component, OnInit } from '@angular/core';
import { IArtist, IlastFmartistsearch } from 'src/app/ilast-fmartistsearch';

import { ActivatedRoute } from '@angular/router';
import { IlastFmalbums } from 'src/app/ilast-fmalbums';
import { IlastFmtracks } from 'src/app/ilast-fmtracks';
import { LastfmService } from 'src/app/lastfm.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  artist:IArtist | undefined
  name: string | undefined;
  listeners:string | undefined;
  picture:string | undefined;
  albums: string[] = [];
  album_images: string[] = [];
  track_images: string[] = [];
  album_playcount: number[] = [];
  track_playcount: number | undefined;
  mbid: string;
  response:IlastFmalbums | undefined;
  tracks:IlastFmtracks | undefined;

  constructor(private route:ActivatedRoute,private _lastfmService: LastfmService) { 

  this.mbid = this.route.snapshot.paramMap.get('mbid') || ''
  // @ts-ignore
    Window['dvself'] = this
  }

  ngOnInit(): void {
  this.getLastFMArtistInfo(this.mbid,1);
  this.getLastFMAlbums(this.mbid);
  this.getLastFMTracks(this.mbid);

  }



  async getLastFMArtistInfo(mbid:string ,limit:number) {
    const response: IlastFmartistsearch = await this._lastfmService.getArtist(`mbid=${mbid}`,limit);
     this.artist = response.artist

    /*   response.results.artistmatches.artist.forEach(
      
      artist=> {this.name = artist.name,this.listeners= artist.listeners,this.picture= artist.image[0]['#text']}
      );
      */

  }


  async getLastFMAlbums(mbid:string) {
    this.response = await this._lastfmService.getArtistAlbums(`mbid=${mbid}`);
    
    /*  response.topalbums.album.forEach(album=>
       
      {
      this.albums.push(album.name),
    this.album_images.push(album.image[0]["#text"]),
    this.album_playcount.push(album.playcount)
  }
      
      ); */
  }

  async getLastFMTracks(mbid:string) {
    this.tracks = await this._lastfmService.getArtistTracks(`mbid=${mbid}`);
/*     response.toptracks.track.forEach(track => 
      
     { this.tracks.push(track.name),
    this.track_images.push(track.image[0]["#text"]),
  console.log(track)}      
      
      );
  }
 */
  }

}
