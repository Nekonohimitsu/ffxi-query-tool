import React from 'react';
import { Provider } from 'react-redux';
import { FFXIQueryToolStore } from '@ffxi-query-tool/store';
import { Header } from '@ffxi-query-tool/header';

class StandardApp extends React.Component {
    public render() {
        return (
            <Provider store={FFXIQueryToolStore}>
                <Header />
            </Provider>
        );
    }
}

export default StandardApp;
