import { Endpoints, ResponseConfig, UrlMethods } from "./loaderTypes";

const defaultCallback = () => {
    console.error('No callback for GET response');
};

class Loader {
    _baseLink: string;
    _options: {apiKey: string};
    constructor(baseLink: string, options: {apiKey: string}) {
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

    makeUrl(options: any, endpoint: Endpoints): string {
        const urlOptions = { ...this._options, ...options };
        let url = `${this._baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: UrlMethods, endpoint: Endpoints, callback: (data: any) => void, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
