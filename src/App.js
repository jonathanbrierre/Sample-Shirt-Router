import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import Shirt from './Components/Shirt'
import NotFound from './Components/NotFound'
import NavBar from './Components/NavBar'

class App extends React.Component {

  state = {
    shirts: [
      {
        id:1,
        imageUrl: 'https://cdni.llbean.net/is/image/wim/224582_36814_41?hei=1095&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2'
      },
      {
        id:2,
        imageUrl: 'https://prochemicalanddye.net/media/extendware/ewimageopt/media/inline/ac/4/t-shirts-with-polyester-thread-sizes-s-xl-55d.jpg'
      },
      {
        id:3,
        imageUrl: 'https://rendering.documents.cimpress.io/v1/vp/preview?width=690&height=690&quality=80&scene=https://scenes.documents.cimpress.io/v1/scenes/1cce36d1-28e0-4ef5-9df9-6c2c1a756ae9'
      }
    ]
  }


  renderShirts = (routerProps) => {
    let shirtId = parseInt(routerProps.match.params.id)
    let foundShirt = this.state.shirts.find(shirtObj => shirtObj.id === shirtId)
    return (foundShirt ? <Shirt shirt={foundShirt}/> : <NotFound/>)
  }



  render(){
    return(
    <div className="App">
      <NavBar shirts = {this.state.shirts}/>
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route path = '/shirts/:id' render = {routerProps => this.renderShirts(routerProps)} />
        <Route component = {NotFound} />
      </Switch>
    </div>
  )}
}

export default App;
