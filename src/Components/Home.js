import React, { Component } from 'react';
import NavigationBar from './NavigationBar'
import apikey from './ApiKey'
import Cards from './Cards';

/* Componente principal onde mantenho os states e 
as principais funções */

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '',
                    selectedOption: 'characters?nameStartsWith',
                    error: null,
                    isLoaded: false,
                    cards: []
                    };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    /* Obtém os dados das HQs e dos personagens */

    handleData() {
        fetch(`https://gateway.marvel.com/v1/public/${this.state.selectedOption}=${this.state.name}&limit=25&${apikey()}`)
        .then(res => res.json())
        .then(
            (result) => {
              this.setState({
                isLoaded: true,
                cards: result.data.results
            });
        }
        )
    }

    /* Captura alterações na caixa de busca e armazena no state*/

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    /* Faz com que no submit os dados vindos da Marvel seja alterados através 
    da função handleData */

    handleSubmit(event) {
        console.log(this.state)
        this.handleData()
        event.preventDefault();
    }

    render() {
        return <>
        <NavigationBar onSubmit={this.handleSubmit} onChange={this.handleChange} />
        <Cards cards={this.state.cards} />
        </>
    }

}

export default Home;

