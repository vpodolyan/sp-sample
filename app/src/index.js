import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import Counter from './components/Counter'; // eslint-disable-line
import reducers from './reducers';

const store = createStore(reducers);
const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState().counter}
      onIncrement={() => store.dispatch({type: 'INCREMENT'})}
      onDecrement={() => store.dispatch({type: 'DECREMENT'})}
    />,
    rootEl
  );
}

render();
store.subscribe(render);
