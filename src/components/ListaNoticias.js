//este componente solo llamará al componente de noticia
import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';

const ListaNoticias = (props) => {
    return(
        <div className=" row">
            {props.noticias.map(noticia => {
                return(
                    <Noticia
                        key={noticia.url}
                        noticia={noticia}
                    />
                )
            })}
        </div>
    )
}

ListaNoticias.propTypes = {
    noticias : PropTypes.array.isRequired
}

export default ListaNoticias;