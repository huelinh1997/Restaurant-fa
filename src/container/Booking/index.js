import React, { PureComponent } from 'react';
import { style } from './index.scss';

class Booking extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (

            <div id="booking" class="section">
                <div class="section-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7 col-md-push-5">
                                <div class="booking-cta">
                                    <h1>Make your reservation</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere, soluta magnam consectetur
                                        molestias itaque
                                        ad sint fugit architecto incidunt iste culpa perspiciatis possimus voluptates aliquid consequuntur
                                        cumque quasi.
                                        Perspiciatis.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4 col-md-pull-7">
                                <div class="booking-form">
                                    <form>
                                        <div class="form-group">
                                            <span class="form-label">Choose date</span>
                                            <input class="form-control" type="date" placeholder="When will you want to have a meal with him/her" />
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <span class="form-label">FROM</span>
                                                    <input class="form-control" type="text" required />
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <span class="form-label">ULTIL</span>
                                                    <input class="form-control" type="text" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <span class="form-label">Rooms</span>
                                                    <select class="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </select>
                                                    <span class="select-arrow"></span>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <span class="form-label">Adults</span>
                                                    <select class="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </select>
                                                    <span class="select-arrow"></span>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <span class="form-label">Children</span>
                                                    <select class="form-control">
                                                        <option>0</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                    </select>
                                                    <span class="select-arrow"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-btn">
                                            <button class="submit-btn">Check availability</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

Booking.propTypes = {

};

export default Booking;
