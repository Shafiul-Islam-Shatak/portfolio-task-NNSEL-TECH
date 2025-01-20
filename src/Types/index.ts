import { StaticImageData } from 'next/image';

export type NavIteam = {
    title : string;
    path : string;
}

export type ProjectsHighlightProps = {
    title : string;
    img : string;
    client : string;
    work : Array<string>;

}

export type SectionHeaderProps = {
    title : string;
    desciption : string;
}


export type WorkCardProps = { 
    img: StaticImageData; 
    title: string; 
    color: string; 
   
}
