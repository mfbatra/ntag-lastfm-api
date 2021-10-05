export interface ILastFMData {

topartists:IArtists;


}

export interface IArtists

{

  artist:IArtist[];



}


export interface IArtist
{
    name: string;
    listeners:string;
    mbid:string;
    url:string;
    image:image[];


}

export interface image

{

  ["#text"]:string;
  size:string;

}