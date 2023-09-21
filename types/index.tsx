export type ServicesType = {
    id: string;
    title: string;
    description?: string;
};

export type ProjectsType = {
    id: string;
    client: string;
    title: string;
    image: string;
    categories: Array<string>;
    year?: string;
};

export type ReviewsType = {
    id: string;
    author: string;
    position: string;
    avatar: string;
    content: string;
};

export type CompaniesType = {
    id: string;
    image: string;
};

export type BlogsType = {
    id: string;
    author?: string;
    title: string;
    category: string;
    image: string;
    date: string;
};

type SocialsType = {
    icon: string;
    url: string;
};

export type TeamType = {
    id: string;
    title: string;
    position: string;
    photo: string;
    description?: string;
    socials: SocialsType[];
};

export type LinksType = {
    title: string;
    value: string;
    counter: number;
};

export type service_main_type = {
    id: string;
    title: string;
    position: string;
    photo: string;
    description?: string;
};
