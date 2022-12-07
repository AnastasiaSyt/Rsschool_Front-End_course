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