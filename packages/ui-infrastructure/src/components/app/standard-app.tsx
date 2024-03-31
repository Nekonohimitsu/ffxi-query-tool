import React from 'react';
import { Provider } from 'react-redux';
import { FFXIQueryToolStore } from '@ffxi-query-tool/store';
import { MagicDamagePage } from '@ffxi-query-tool/mdmg-calc-page';
import { Header } from '@ffxi-query-tool/header';

//Functional Component
const StandardApp = () => {
    return (
        <div>
            <Header/>
            <MagicDamagePage />
        </div>
    );
};

export default StandardApp;
