import React, { Component } from 'react';
import { Card, CardTitle } from 'reactstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import * as Images from './Shared/Images'
import { connect } from 'react-redux';
import { setZoomState } from '../redux/ActionCreators';
import ModalExample from './ModalComponent';
import Editable from "./Editable";

const mapStateToProps = state => {
    return {
        zoomed: state.zoomed
    }
}

{/* <img src={require(`${props.item.source}`)}/> */ }
// { Images.Images.map(row => <img src={require(`${row.source}`)} />) }

class MyCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focusedImage: 0,
            isModalOpen: false
        }
        this.hideModal = this.hideModal.bind(this)
    }

    showModal(id) {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
            focusedImage: parseInt(id)
        });
    }
    hideModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }

    render() {
        return (
            <div>
                {Images.Images.slice(1, 8).map(row =>
                    <img src={require(`${row.source}`)}
                        style={{ width: "10%" }}
                        alt={row.origin}
                        onMouseOver={() => this.showModal(row.id)}
                    />)
                }
                <ModalExample item={Images.Images[this.state.focusedImage]} isModalOpen={this.state.isModalOpen} hideModal={this.hideModal} />
            </div>
        );
    }
}
export default connect(mapStateToProps)(MyCarousel);


// Create a Higher Order Component for: 1 for the Question, 2 for the description. Localstorage for a json file



