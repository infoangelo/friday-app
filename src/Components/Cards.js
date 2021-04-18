import React from 'react';
import { Card, CardColumns } from 'react-bootstrap'

/* Recebo um array com dados recebidos da API da Marvel e
 crio os cards com as informações dos heróis ou das histórias em quadrinhos */

const Cards = (props) => {
    const card = props.cards.map((atributo) => {
        return (
        <Card style={{ width: '18rem' }} key={atributo.id}>
        <Card.Img variant="top" 
        src={`${atributo.thumbnail.path}.${atributo.thumbnail.extension}`} 
        alt={atributo.name} />
        <Card.Body>        
        <Card.Title>{ atributo.name?atributo.name:atributo.title }</Card.Title>
        <Card.Text>{atributo.description}</Card.Text>
        </Card.Body>
        </Card>
        )

})

return <CardColumns>{card}</CardColumns>
}

export default Cards;