export interface IlastFmtracks {

    toptracks:ITracks;
    
    
    }
    
    export interface ITracks
    
    {
    
      track:ITrack[];
    
    
    
    }
    
    
    export interface ITrack
    {
        name: string;
        playcount:string;
        mbid:string;
        listners:string;
        url:string;
        artist:artist[];
        image:image[];
    
    }
    
    export interface artist
    
    {
    
       mbid:string;
       name:string;
       url:string;
    
    }
    export interface image

{

  ["#text"]:string;
  size:string;

}