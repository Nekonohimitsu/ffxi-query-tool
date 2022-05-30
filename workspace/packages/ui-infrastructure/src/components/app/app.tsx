import * as React from 'react';
import { render } from 'react-dom';
import StandardApp from './standard-app';

const InitApplication = (): void => {
    const rootElement = document.createElement('div');
    rootElement.id = 'container';
    rootElement.style.setProperty('position', 'fixed');
    rootElement.style.setProperty('left', '0');
    rootElement.style.setProperty('right', '0');
    rootElement.style.setProperty('top', '0');
    rootElement.style.setProperty('bottom', '0');
    rootElement.style.setProperty('margin', '0');
    rootElement.style.setProperty('padding', '0');

    document.body.appendChild(rootElement);

    render(<StandardApp />, rootElement);
};

export default InitApplication;
