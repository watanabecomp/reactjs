import React from 'react';
import { Helmet } from 'react-helmet'


class Head extends React.Component {
    render() {
      return (
        <> 
          <Helmet>
            <title>Oh my teeth</title>
            <meta charset="utf-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
            <link rel="icon" href="favicon.png"/>
          </Helmet>
        </>
      );
    }
  }

  
export default Head;