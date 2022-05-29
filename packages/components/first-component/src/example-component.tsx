import ExampleComponentProps from "./example-component-props";
import React from 'react';

export const ExampleComponent = (props: ExampleComponentProps): React.ReactElement<ExampleComponentProps> => {
    return (<div>{props.id}</div>);
};

export default ExampleComponent;