import React from 'react';
import ReactDOM from 'react-dom';
import {BasicExample,store} from './components/router/basic.js';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const render = () => {
	ReactDOM.render(<BasicExample />, document.getElementById('root'));
}
store.subscribe(render);
render();
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// 点击按钮，dispatch出发reducer方法生成新的state，新的state出发subscribe监听，重新渲染界面