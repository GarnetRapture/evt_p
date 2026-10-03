import { render } from 'solid-js/web';
import { SiteRoot } from '@evtp/app/root/SiteRoot';
import '@evtp/style/site/site.css';

const root = document.getElementById('root');
if (root === null) throw new Error('Root element not found');

root.replaceChildren();
render(() => <SiteRoot />, root);
