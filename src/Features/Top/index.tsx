import * as React from 'react';
import { Link } from 'react-router-dom';

import Title from '~/components/Title';

interface Props {}

function Top({  }:Props){
    return (
        <div>
            <Link to="/page1">Page 1</Link>
            <Link to="/page2">Page 2</Link>
            <Title label="Hellow World!" />
        </div>
    )
}

export default Top;