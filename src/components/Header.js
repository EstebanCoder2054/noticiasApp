import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {

    return(
        <nav className="nav-wrapper light-blue darken-3">
        <a href="#!" className="brand-logo center">{props.titulo}</a>
        </nav>
    )
    
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;