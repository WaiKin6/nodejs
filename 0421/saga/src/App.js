import React, { Component } from 'react'
import { Menu,Switch as Sswitch} from 'antd';
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom"
import Index from "./views/index"
import VentureProject from "./views/ventureProject";
import InvestmentAgency from "./views/investmentAgency";
import Investors from "./views/investors";
import Preferred from "./views/preferred";
import LatestVote from "./views/latestVote";
import FocusArea from "./views/focusArea";
import ItemFavorites from "./views/itemFavorites";
import axios from "axios"


class App extends Component {
  state = {
    theme: 'dark',
    current: '0',
    menuList: [
      { name: "首页", to: "/",component:Index},
      { name: "创业项目", to: "/ventureProject",component:VentureProject },
      { name: "投资机构", to: "/investmentAgency",component:InvestmentAgency },
      { name: "投资人", to: "/investors",component:Investors },
      { name: "优选", to: "/preferred",component:Preferred },
      { name: "最新获投", to: "/latestVote",component:LatestVote },
      { name: "关注领域", to: "/focusArea",component:FocusArea },
      { name: "项目收藏夹", to: "/itemFavorites",component:ItemFavorites }
    ],
  };
  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClick = e => {
    // console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <Router>
      <div className="App">
        <div className="top">

        </div>
        <div className="bottom">
          <div className={this.state.theme === 'dark' ? "left" : "left active"}>
            <Sswitch
              checked={this.state.theme === 'dark'}
              onChange={this.changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
            <br />
            <br />
            <Menu
              theme={this.state.theme}
              onClick={this.handleClick}
              style={{ width: 200 }}
              defaultOpenKeys={['sub1']}
              selectedKeys={[this.state.current]}
              mode="inline"
            >
              {
                this.state.menuList.map((item, index) => {
                  return <Menu.Item key={index}>
                        <NavLink to={item.to}>{item.name}</NavLink> 
                    </Menu.Item>
                })
              }
            </Menu>
          </div>
          <div className="right">
            <Switch>
            {
              this.state.menuList.map((v,i)=>{
                return <Route exact key={i} path={v.to} component={v.component}/>
              })
            }
            </Switch>
          </div>
        </div>
      </div>
      </Router>
    )
  }
  componentDidMount(){
    axios.get(" http://jsonplaceholder.typicode.com/posts").then(res=>{
      console.log(res);
    })
  }
}
export default App;



