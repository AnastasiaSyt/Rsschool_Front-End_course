import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '8959bf591fa74fa9a5b19147ebdb584f', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
