import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Title from '~/components/Title';

interface Props {

}

function Page2({ }: Props){

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate(-1)}>Previous Page</button>
            <Link to="/">Top</Link>
            <Link to="/page1">Page1</Link>
            <Title label="Page2"></Title>
        </div>
    )
}

export default Page2;