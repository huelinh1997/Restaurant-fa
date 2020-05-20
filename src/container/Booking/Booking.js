import React, { PureComponent } from 'react';
import { style } from './index.scss';

class Booking extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dishes_list: [], // danh sách thức ăn được chọn lấy từ localStorage hoặc được truyền qua properties
        };
    }

    componentDidMount() {

    }

    onSubmit() {

    }

    render() {
        return (

            <div id="booking" class="section">
                <div class="section-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7 col-md-push-5">
                                <div class="booking-cta">
                                    <h1> When are you available </h1>
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
                                    <div class="form-group">
                                        <span class="form-label">Choose date</span>
                                        <input class="form-control" type="date" placeholder="When will you want to have a meal your future lover" />
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
                                    <div class="form-btn">
                                        <button class="submit-btn" data-toggle="modal" data-target="#myModal">Booking for a meal</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal" id="myModal">
                    <div class="modal-dialog">
                        <div class="modal-content">

                            <div class="modal-header">
                                <h4 class="modal-title">YOUR HAVE ORDERED</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div class="modal-body">
                                <ul>
                                    {
                                        this.state.dishes_list.map((dish, index) => {
                                            return <li data-toggle="tooltip" data-placement="left" title="{dish.food_item_desc}">
                                                {dish.food_item_name}
                                                <span class="badge badge-info">{dish.food_item_price}</span>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>

                            <div class="modal-footer">
                                <button ></button>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
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
