import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import './Layout-style.css';
import Nav from './Nav';

const Layout = ({ children }) => {
    return (
        <>
            <Nav/>
                <Container>
                    { children }
                </Container>
            <Footer/>
        </>
    );
};

export default Layout;