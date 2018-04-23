import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

export class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      score: 0
    }
    this.handleScoreChange = this.handleScoreChange.bind(this)
  }

  handleScoreChange(score) {
    this.setState({score})
  }

  render() {
    return(
      <Navbar>
    <Navbar.Header>
      <Navbar.Brand className="link">
        <a href="/">What Do You Know?</a>
      </Navbar.Brand>

    </Navbar.Header>

    <Nav>
      <NavItem>

      </NavItem>
    </Nav>
  </Navbar>

    )
  }

}

//ReactDOM.render(<Header />, document.getElementById('header'))
