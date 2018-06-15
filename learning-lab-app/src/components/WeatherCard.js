import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'
import ZipForm from "./WeatherCard/ZipForm";
import Time from "./WeatherCard/Time";

import './WeatherCard.css';

export default class WeatherCard extends Component{ 
    render(){
        let temperature = this.props.data ? this.props.data.main.temp : null;
        let weatherIcon = this.props.data ?
            'http://openweathermap.org/img/w/'+this.props.data.weather[0].icon+'.png' :
            null;
        return (
            <div className = "ui centered card">
            <Card>
                <Image className='weatherIcon' src={weatherIcon} size='small' centered />
                <Card.Content>
                    <Card.Header>City, State</Card.Header>
                    <Card.Meta>
                        <span className='time'>
                        <Time />
                        </span>
                    </Card.Meta>
                        <Card.Description className='temperature'>
                        {Math.round(temperature)+'\u00b0F'}
                        </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <ZipForm />
                </Card.Content>
            </Card>
            </div>
        )
    }
}
