import React, { Component } from 'react';

import './Restaurant.css';

export default class Restaurant extends Component {
    constructor(props) {
        super(props);
        const { restaurant } = props;

        let image_url = "";
        if (restaurant.photo) {
            if (restaurant.photo.images) {
                image_url = restaurant.photo.images.medium.url;
            }
        }

        this.state = {
            name: restaurant.name,
            image_url: image_url,
            website_url: restaurant.website,
            phone: restaurant.phone
        };
    }

    render() {
        return (
            <div className="Restaurant">
                <div className="Restaurant-image">
                    <a href={this.state.website_url}>
                        <img src={this.state.image_url} />
                    </a>
                </div>

                <div className="Restaurant-name">{this.state.name}</div>
                <div className="Restaurant-phone">{this.state.phone}</div>
            </div>
        );
    }
}
