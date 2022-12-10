import { DataNews, DataSources, Endpoints, GenericCallback, LoaderOptions, Options, ResponseConfig, UrlMethods } from "./loaderTypes";

const defaultCallback: GenericCallback<DataNews> | GenericCallback<DataSources> = () => {
    console.error('No callback for GET response');
};

console.log(defaultCallback);

class Loader {
    _baseLink: string;
    _options: LoaderOptions;
    constructor(baseLink: string, options: LoaderOptions) {
        this._baseLink = baseLink;
        this._options = options;
    }

    getResp(
        config: ResponseConfig,
        callback = defaultCallback
    ) {
        const { endpoint, options } = config;
        this.load(UrlMethods.GET, endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Options, endpoint: Endpoints): string {
        const urlOptions = { ...this._options, ...options };
        let url = `${this._baseLink}${endpoint}?`;

        Object.entries(urlOptions).forEach(([key, value]) => {
            url += `${key}=${value}&`;
        });
        return url.slice(0, -1);
    }

    load(method: UrlMethods, endpoint: Endpoints, callback: GenericCallback<DataNews> | GenericCallback<DataSources>, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
