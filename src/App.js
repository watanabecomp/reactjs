import React from 'react';
import Head from './components/Head';
import Header from './components/Header';
import BlockBana from './components/BlockBana';
import BlockWorks from './components/BlockWorks';
import BlockPrice from './components/BlockPrice';
import BlockResults from './components/BlockResults';
import BlockClinic from './components/BlockClinic';
import BlockSNS from './components/BlockSNS';
import Footer from './components/Footer';
import MainModal from './components/MainModal';
import './css/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openHamMenuStatus: false,
      openModalStatus: false,
    };
  }

  controlHamMenu = flag => {
    this.setState({ openHamMenuStatus: flag });
  };
  
  controlModal = flag => {
    this.setState({ openModalStatus: flag });
  };

  render () {
    return (
      <div className={`App ${ this.state.openModalStatus ? "modal" : ""}`}>
        <Head />
        <Header
          controlHamMenu={this.controlHamMenu}
          openHamMenuStatus={this.state.openHamMenuStatus}
        />
        <BlockBana 
          controlModal={this.controlModal}/>
        <BlockWorks />
        <BlockPrice />
        <BlockResults />
        <BlockClinic />
        <BlockSNS />
        <Footer />
        <MainModal 
          controlModal={this.controlModal}
          openModalStatus={this.state.openModalStatus}
        />
      </div>
    );
  }
}

export default App;
