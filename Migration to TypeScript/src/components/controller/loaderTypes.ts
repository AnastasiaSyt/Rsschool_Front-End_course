export enum Endpoints {
    EVERYTHING = 'everything',
    SOURCES = 'sources'
}

export enum UrlMethods {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE'
}

export type Options = {
    sources?: string;
}

export type LoaderOptions = {
    apiKey: string;
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

export interface SourcesAPI {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export type GenericCallback<T> = (data: T) => void;

export type DataNews = {
    articles: NewsAPI[];
} 

export type DataSources = {
    sources: any[];
} 
