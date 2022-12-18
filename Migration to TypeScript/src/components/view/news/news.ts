import { NewsAPI } from '../../Types';
import './news.css';

interface INews {
    countNews: number,
    dateSize: number,
    draw: (data: NewsAPI[]) => void
}

class News implements INews {
    countNews = 10;
    dateSize = 10;
    draw(data: NewsAPI[]) {
        const news = data.length >= this.countNews ? data.filter((_item: NewsAPI, idx: number) => idx < this.countNews) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp: Element | null = document.querySelector('#newsItemTemp');
        if (newsItemTemp) {
            news.forEach((item: NewsAPI, idx: number) => {
                const newsClone = (newsItemTemp as HTMLTemplateElement).content.cloneNode(true) as DocumentFragment;
    
                if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

                const metaPhoto = newsClone.querySelector('.news__meta-photo');
                if (metaPhoto) {
                    (metaPhoto as HTMLElement).style.backgroundImage = `url(${
                        item.urlToImage || 'img/news_placeholder.jpg'
                    })`;
                }

                const metaAuthor = newsClone.querySelector('.news__meta-author');
                if(metaAuthor) {
                    metaAuthor.textContent = item.author || item.source.name;
                }
            
                const metaDate = newsClone.querySelector('.news__meta-date');
                if (metaDate) {
                    metaDate.textContent = item.publishedAt
                    .slice(0, this.dateSize)
                    .split('-')
                    .reverse()
                    .join('-');
                }
                
                const descriptionTitle = newsClone.querySelector('.news__description-title');
                if (descriptionTitle) {
                    descriptionTitle.textContent = item.title;
                }
                
                const descriptionSource = newsClone.querySelector('.news__description-source');
                if (descriptionSource) {
                    descriptionSource.textContent = item.source.name;
                }
                
                const descriptionContent =newsClone.querySelector('.news__description-content');
                if (descriptionContent) {
                    descriptionContent.textContent = item.description;
                }
                
                const readMore = newsClone.querySelector('.news__read-more a');
                if (readMore) {
                    readMore.setAttribute('href', item.url);
                }
                
                fragment.append(newsClone);
            });
        }

        const currentNews = document.querySelector('.news');
        (currentNews as HTMLElement).innerHTML = '';
        (currentNews as HTMLElement).appendChild(fragment);
    }
}

export default News;
