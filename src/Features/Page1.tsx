import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Title from '~/components/Title';

interface Props {

}

function Page1({ }: Props){

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate(-1)}>Previous Page</button>
            <Link to="/">Top</Link>
            <Link to="/page2">Page2</Link>
            <Title label="Page1"></Title>
        </div>
    )
}

export default Page1;