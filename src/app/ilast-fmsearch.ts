export interface IlastFmsearch {

    results:IArtists;
}

export interface IArtists 
{

    artistmatches:IArtista;
}

export interface IArtista
{
    artist:IArtist[];
}

export interface IArtist
{
    name: string;
    stats:stats;
    mbid:string;
    url:string;
    image:image[];


}
export interface image

{

    ["#text"]:string;
    size:string;

}

export interface stats

{
    listeners:string;
    playcount:string;


}