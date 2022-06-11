import React from 'react';
import { Provider } from 'react-redux';
import { FFXIQueryToolStore } from '@ffxi-query-tool/store';
import { Header } from '@ffxi-query-tool/header';

//Functional Component
const StandardApp = () => {
    return (
        <Header />
        // <Provider store={FFXIQueryToolStore}>
        //     <Header />
        // </Provider>
    );
};

export default StandardApp;
