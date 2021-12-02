import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Top from './Features/Top';
import Page1 from './Features/Page1';
import Page2 from './Features/Page2';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Top/>} />
                <Route path="/page1" element={<Page1/>} />
                <Route path="/page2" element={<Page2/>} />
                <Route path="*" element={<Top/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;