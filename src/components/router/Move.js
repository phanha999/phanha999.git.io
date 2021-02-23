import React, { Component } from 'react';
import {
    Route,
  } from "react-router-dom";
import ContainerApp from '../ContainerApp';
import Cart from '../Cart';
import ProductNew from '../productComponents/ProductNew';
import ProductTrend from '../productComponents/ProductTrend';
import ProductSale from '../productComponents/ProductSale';
import NewSpaper from '../NewSpaper';
import Contacts from '../Contacts';

class Move extends Component {
    render() {
        return (    
            <div>
                <Route exact path="/" component={ContainerApp} />
                <Route exact path="/home" component={ContainerApp} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/new" exact component={ProductNew} />
                <Route path="/trend" exact component={ProductTrend} />
                <Route path="/sale" exact component={ProductSale} />
                <Route path="/newspaper" exact component={NewSpaper} />
                <Route path="/contacts" exact component={Contacts} />
            </div>
        );
    }
}

export default Move;