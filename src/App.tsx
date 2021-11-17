import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

const Title = styled.h1`
    color:red;
`;
interface Props {}

function App({}:Props){
    return <Title>Hellow Webpack</Title>
}

ReactDOM.render(<App/>, document.getElementById('app'));