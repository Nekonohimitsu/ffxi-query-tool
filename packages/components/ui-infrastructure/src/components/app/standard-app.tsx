import React from 'react';
import { Provider } from 'react-redux';
import { FFXIQueryToolStore } from '@ffxi-query-tool/store';

class StandardApp extends React.Component {
    public render(): React.ReactNode {
        return (
            <Provider store={FFXIQueryToolStore}>
                <div>Hello</div>
            </Provider>
        );
    }
}

export default StandardApp;
