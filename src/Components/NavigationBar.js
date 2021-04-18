import React, { Component } from 'react'
import { Navbar, Form, FormControl, Button, Nav, Col } from 'react-bootstrap'

/* Usando Bootstrap gero uma barra de navegação que recebe as funções
de controle via PROPS e assim o state é atualizado no componente Home. */

class NavigationBar extends Component{
    render() {
       return   (<Navbar bg="dark" variant="dark" fixed="top">
       <Navbar.Brand>Marvel</Navbar.Brand>
       <Nav className="mr-auto">
         <Nav.Link>Favoritos</Nav.Link>
       </Nav>
       <Form onSubmit={this.props.onSubmit}>
        <Form.Row>
        <Col xs="auto">
         <FormControl type="text" placeholder="Search" name="name" onChange={this.props.onChange} />
        </Col>
        <Col xs="auto">
         <FormControl as="select" name="selectedOption" onChange={this.props.onChange}>
             <option value="characters?nameStartsWith">Characteres</option>
             <option value="comics?titleStartsWith">Comics</option>
         </FormControl>
        </Col>
        <Col xs="auto">
         <Button variant="outline-info" type="submit">Search</Button>
        </Col>
        </Form.Row>
       </Form>
     </Navbar>
     )
    }
}

export default NavigationBar;