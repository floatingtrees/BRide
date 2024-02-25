import React from 'react'
import Navbar from './components/Navbar';
import SearchResult from './SearchResult.jsx';

function LandingPage() {
    return (
    <>
        <div>
            <Navbar/>
        </div>
        <div>
            <SearchResult/>
        </div>

    </>);
}

export default LandingPage;