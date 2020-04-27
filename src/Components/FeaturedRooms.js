import React, { Component } from 'react'
import {Context} from '../context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'

export default class FeaturedRooms extends Component {
    static contextType = Context
    render() {
       let {loading, featuredRooms : myRooms} = this.context
       
       myRooms = myRooms.map(room =>{
           return <Room key ={room.id} roomie ={room}/>
       })
       
        return (
            <section className ="featured-rooms">
                <Title title ="featured rooms"/>

                <div className="featured-rooms-center">
                    {loading ? <Loading/> : myRooms}
                </div>

              
            </section>
        )
    }
}
 