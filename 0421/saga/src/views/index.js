import React, { Component } from 'react'
import Swiper from "../components/Swiper"

export default class index extends Component {
    render() {
        return (
            <>
               <div className="swiper">
              <Swiper />
            </div>
            <div className="main">
              <div className="main-top">
                <div className="main-top-left">
                  <div className="title">
                    <h2>发现新项目</h2> <span>查看更多 ></span>
                  </div>
                  <div className="left-cont">
                    {
                      [1, 2, 3, 4, 5].map(v => {
                        return <div className="item" key={v}>
                          <div className="one">
                            <img src="https://pic.jingdata.com/com_logo_v3/logo_off_9244815.jpg" alt="" />
                          </div>
                          <div className="two">
                            <h3>至朴度假</h3>
                           旅行度假服务提供商
                           {/* <p></p> */}
                          </div>
                          <div className="three">旅游.未融资</div>
                          <div className="four">四川省</div>
                        </div>
                      })
                    }
                  </div>
                </div>
                <div className="main-top-right">
                  <div className="title">
                    <h2>融资速递</h2> <span>一键提交新项目 ></span>
                  </div>
                  <div className="main-top-right-in">
                    {
                      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(v => {
                        return <div key={v} className="item">
                          <div className="item-left">
                            <p>Global Wind Power France</p>
                            <p>并购 / 未披露</p>
                            <p><span>投资方: Total</span></p>
                          </div>
                          <div className="item-right">
                            <p className="bord"><span>能源矿产</span></p>
                            <p className="gray">04-14</p>
                          </div>
                        </div>
                      })
                    }
                  </div>
                </div>
              </div>
              <div className="main-bottom">
                <div className="title">
                  <h2>优选项目</h2> <span>查看更多 ></span>
                </div>
                <div className="bottom-cont">
                  {
                    [0, 1, 2, 3].map(v => {
                      return <div className="item" key={v}>
                        <div className="bleft">
                          <img src="https://pic.36krcnd.com/avatar/201708/13161314/6v2wnq8rkong9icy.png" alt="" />
                        </div>
                        <div className="bright">
                          <h3>拇指推</h3>
                          <p className="gray">互联网营销推广应用</p>
                          <p>天使轮  工具  广东省</p>
                        </div>
                      </div>
                    })
                  }
                </div>
              </div>
            </div>  
            </>
        )
    }
}
