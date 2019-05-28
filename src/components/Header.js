
import React from 'react';
import ProtoTypes from 'prop-types';

class Header extends React.Component {
    openHamMenu = () => {
        this.props.controlHamMenu(true);
    };

    closeHamMenu = () => {
        this.props.controlHamMenu(false);
    };
    render() {
        return (
            <header>
            <div class="header ">
                <ul class="c_res_pc">
                <li><a href="#block_works">How it works</a></li>
                <li><a href="#block_price">Price</a></li>
                <li><a href="#block_results">Results</a></li>
                <li><a href="#block_clinic">Clinic</a></li>
                </ul>
                <div className={`c_res_sp ${ this.props.openHamMenuStatus ? 'js-opened' : ''}`}>
                    <div 
                        className={`nav-open-btn ${ this.props.openHamMenuStatus ? 'js-hidden' : ''}`}
                        onClick={this.openHamMenu}
                    >
                        <div class="nav-open-btn__bar"></div>
                        <div class="nav-open-btn__bar"></div>
                        <div class="nav-open-btn__bar"></div>
                    </div>
                    <nav className={`nav ${ this.props.openHamMenuStatus ? 'js-opened' : ''}`}>
                        <div class="nav__close" onClick={this.closeHamMenu}></div>
                        <ul class="nav__list">
                        <li class="nav__item">
                            <a class="nav__link" href="#block_works" >How it works</a>
                        </li>
                        <li class="nav__item">
                            <a class="nav__link" href="#block_price" >Price</a>
                        </li>
                        <li class="nav__item">
                            <a class="nav__link" href="#block_results">Results</a>
                        </li>
                        <li class="nav__item">
                            <a class="nav__link" href="#block_clinic" >Clinic</a>
                        </li>
                        </ul>
                    </nav>
                </div>
            </div>
            </header>
        );
    }
}

Header.protoTypes = {
    controlHamMenu: ProtoTypes.func,
    openHamMenuStatus: ProtoTypes.bool,
}

export default Header;