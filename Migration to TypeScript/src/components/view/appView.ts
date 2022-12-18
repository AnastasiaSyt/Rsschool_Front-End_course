import { DataNews, DataSources } from '../Types';
import News from './news/news';
import Sources from './sources/sources';

interface IAppView {
    news: News,
    sources: Sources,
    drawNews: (data: DataNews) => void,
    drawSources: (data: DataSources) => void
}

export class AppView implements IAppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: DataNews) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: DataSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
