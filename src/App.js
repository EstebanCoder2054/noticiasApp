import React, {Component, Fragment} from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component{
  
constructor(props){
  super(props);

  this.state = {
    noticias: []
  }
}

componentDidMount(){
  this.consultarNoticias();
}

//función que hace el llamado a la API (por medio GET)
consultarNoticias = async (categoria = 'general') => { 
  const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=ecebd62a07804d30951e196333eb6c06`;
  
  const respuesta = await fetch(url);
  const noticias = await respuesta.json();
  console.log(noticias);
  this.setState({
    noticias: noticias.articles
  })
}

  render(){
    return(
      <Fragment>
        <Header
          titulo='Noticias React API'
        />

        <div className="container white contenedor-noticias">

            <Formulario 
              consultarNoticias={this.consultarNoticias}
            />

            <ListaNoticias
              noticias={this.state.noticias}
            />
        </div>
      </Fragment>
    );
  }
}

export default App;
