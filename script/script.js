import 'normalize.css';
import '/sass/style.scss';

import Bricks from 'bricks.js';


const instance = Bricks({
    container: '.item_layout',
    packed: 'data-packed',
    sizes: [
        { columns: 2, gutter: 25},
        { mq: '800px', columns: 3, gutter: 25},
    ]
})

document.querySelector('.item_layout').style.margin = "0 auto";
document.querySelector('.item_layout').style.position = "absolute";

instance.pack();