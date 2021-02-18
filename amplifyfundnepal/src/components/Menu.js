import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Home from './View/Home';
import About from './View/AboutUs';
import Contact from './View/ContactUs';
import NgoApi from './NgoApi/NgoApi';
import GG from '../components/NgoApi/GlobalGivings'
import Email from './Email/Email';
import Im from './Interest/Interestmain'
//import I from './Interest/Interest'
import N from './Interest/NewAccount'
class MainMenu extends Component {   
    render() {
        return (
            <div>
                <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand href="#/">
                    <img height="40px" src="/images/fund.png" alt="logo" /> Home
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#NgoApi">Api</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <NavDropdown title="More" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">GG</NavDropdown.Item>
                                <NavDropdown.Item href="#email">Email</NavDropdown.Item>
                                <NavDropdown.Item href="#N">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#NgoApi">Ngo</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/NgoApi">
                            <NgoApi />
                        </Route>
                        <Route path="/action/3.1">
                            <GG />
                        </Route>
                        <Route path="/email">
                            <Email />
                        </Route>
                        <Route path="/i">
                            <Im />
                        </Route>
                        <Route path="/N">
                            <N />
                        </Route>
                    </Switch>
                </Router>

            </div>
        );
    }
}

export default MainMenu;
