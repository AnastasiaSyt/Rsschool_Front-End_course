export enum Endpoints {
    EVERYTHING = 'everything',
    SOURCE = 'source'
}

export enum UrlMethods {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE'
}

export type Options = {
    [key: string]: string
}

export type ResponseConfig = {
    endpoint: Endpoints,
    options?: Options
}

export interface NewsAPI {
    source: {id: string, name: string};
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}