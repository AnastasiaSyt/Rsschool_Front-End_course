// interface LoaderProperties  {
//   baseLink: string;
//   options: string;
// }

class Loader {
    _baseLink: string;
    _options: {apiKey: string};
    constructor(baseLink: string, options: {apiKey: string}) {
        this._baseLink = baseLink;
        this._options = options;
    }

    getResp(
        { endpoint: 'everything' | 'source', options = {} },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options, endpoint): string {
        const urlOptions = { ...this._options, ...options };
        let url: string = `${this._baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method, endpoint, callback, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
