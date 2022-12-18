import { SourcesAPI } from '../../Types';
import './sources.css';

interface ISources {
    draw: (data: SourcesAPI[]) => void
}

class Sources implements ISources {
    draw(data: SourcesAPI[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');
        if (sourceItemTemp) {
            data.forEach((item: SourcesAPI) => {
                const sourceClone = (sourceItemTemp as HTMLTemplateElement).content.cloneNode(true) as DocumentFragment;
                
                const itemName = sourceClone.querySelector('.source__item-name');
                if (itemName) {
                    itemName.textContent = item.name;
                }
                
                const sourceItem = sourceClone.querySelector('.source__item');
                if (sourceItem) {
                    sourceItem.setAttribute('data-source-id', item.id);
                }
                
                fragment.append(sourceClone);
            });
        }

        const sources = document.querySelector('.sources');
        (sources as HTMLElement).append(fragment);
    }
}

export default Sources;