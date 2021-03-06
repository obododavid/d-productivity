import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { persistedStore } from './store/store'
import Root from './Root';
import { PersistGate } from 'redux-persist/integration/react';
import * as serviceWorker from './serviceWorker';

const MainRoot = (
    <Provider store={store}>
        <PersistGate persistor={persistedStore} loading={null}>
            <Root />
        </PersistGate>
    </Provider>
);

ReactDOM.render(MainRoot, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
