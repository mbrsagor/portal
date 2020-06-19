import React, { Component } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Slide from './Slide';

class Home extends Component {

    render() {
        return (
            <>
                <Header />
                <Slide />
                <Footer />
            </>
        );
    }
}

export default Home;
