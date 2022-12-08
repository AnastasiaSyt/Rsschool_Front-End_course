import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '837676c4ddd4443d8926ea0713b77103', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
