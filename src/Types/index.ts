import { StaticImageData } from 'next/image';

export type NavIteam = {
    title: string;
    path: string;
}

export type ProjectsHighlightProps = {
    _id: string
    title: string;
    img: string;
    client: string;
    work: Array<string>;

}

export type SectionHeaderProps = {
    title: string;
    desciption: string;
}


export type WorkCardProps = {
    img: StaticImageData;
    title: string;
    color: string;

}

export type Projcet = {
    title: string,
    img: string
}

export type ProjcetDetailsProps = {
    params:  { id: string }
}