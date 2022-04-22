import React, { Component } from 'react';
import GoogleMaps from "simple-react-google-maps"
import './_Map.css'

export default class Maps extends Component {
    render() {
        return (
            <div className="containerMap">
                <GoogleMaps className="containerMap_map"
                    apiKey={"AIzaSyBP18PsvaERpQs9KaMDO-tjPzyRlEJMV4E"}
                    style={{height: "400px", width: " 300px"}}
                    zoom={15}
                    center={{
                        lat: -34.77251292237324, 
                        lng: -58.61525010219461
                    }}
                    markers={{lat: -34.77251292237324, 
                        lng: -58.61525010219461}}
                />
            </div>
        )
    }
}