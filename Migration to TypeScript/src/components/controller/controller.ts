import AppLoader from './appLoader';
import { DataNews, DataSources, Endpoints, GenericCallback } from '../Types';

class AppController extends AppLoader {
    getSources(callback: GenericCallback<DataSources>) {
        super.getResp(
            {
                endpoint: Endpoints.SOURCES,
            },
            callback
        );
    }

    getNews(e: Event, callback: GenericCallback<DataNews>) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target?.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId && sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: Endpoints.EVERYTHING,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target?.parentNode as HTMLElement;
        }
    }
}

export default AppController;