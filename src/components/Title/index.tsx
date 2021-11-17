import * as React from 'react';
import styled from 'styled-components';

const Label = styled.h1`
    color:red;
`;
interface Props {
    label: string;
}

function Title({ label }:Props){
    return <Label>{label}</Label>
}

export default Title;