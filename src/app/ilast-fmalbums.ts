export interface IlastFmalbums {

    topalbums:IAlbums;
    
    
    }
    
    export interface IAlbums
    
    {
    
      album:IAlbum[];
    
    
    
    }
    
    
    export interface IAlbum
    {
        name: string;
        playcount:number;
        mbid:string;
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