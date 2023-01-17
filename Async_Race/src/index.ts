import App from './components/app/app';
//import Router from './components/app/router';
import './global.css';

new App();
//app.start();

// const content = document.body;

// if (content) {
//   new Router(content);
// }



// http://127.0.0.1:3000
// const base = 'http://127.0.0.1:3000';
// const garage = `${base}/garage`;

// const getCars = async (page: number, limit = 7) => {
//   const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
//   const count = await response.json();
//   console.log(count);
//   console.log(count.length);
//   return count;
// //   return {
// //     items: await response.json(),
// //     count: response.headers.get('X-Total-Count'),
// //   };
// };

// getCars(1);
//console.log(getCars(1));



