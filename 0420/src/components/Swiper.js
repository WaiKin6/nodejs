import React, { Component } from 'react'
import { Carousel } from 'antd';

export default class Swiper extends Component {
    state={
        swiperList: ["/imgs/1.jpg", "/imgs/2.jpg", "/imgs/3.jpg", "/imgs/4.jpg", "/imgs/5.jpg"]
    }
    render() {
        return (
            <Carousel autoplay>
                {
                    this.state.swiperList.map((v,i)=>{
                        return <img key={i} src={v} alt=""/>
                    })
                }
            </Carousel>
        )
    }
}