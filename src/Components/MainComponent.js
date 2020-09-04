import React, { Component, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import MyCarousel from './Carousel';
import EditableUI from './EditableUI';
import Example from './UseEffectExample';


class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={MyCarousel} />
                    <Route exact path='/editable' component={EditableUI} />
                    <Route exact path='/example' component={Example} />
                </Switch>
            </div>
        )
    }

}

export default Main;

