import React from 'react';
import './css/custom.css';
import {connect} from 'react-redux';
import changeData from './actions/ActionImages/Images.js'
// class Renderimage extends React.Component{
//   changeImage(img){
//     this.props.onChange(img)
//   }
//   render()
//   {
//     return (<img src={this.props.data.imgurl} width="100" height="100" onClick={this.changeImage.bind(this,this.props.data.imgurl)}/>)
//   }
// }
// class App extends React.Component
// {
//   constructor(props)
//   {
//     super()
//     {
//       this.state={
//         data:[{"imgurl":"\images\\cat-1285634_960_720.png"},{"imgurl":"\images\\Images.jpg"},{"imgurl":"\images\\pexels-photo-248797.jpeg"}],
//         bigImage:"\images\\cat-1285634_960_720.png"
//       }
//     }
//   }
//   renderImages(){
//     return  this.state.data.map((data,idx)=>(<Renderimage data={data} key={idx} onChange={this.onImageChange.bind(this)}/>))
//   }
//   onImageChange(img)
//   {
//     this.setState({
//       bigImage:img
//     })
//   }
//   render()
//   {
    // return (<div>
    //           <div className="bigImage">
    //             <img src={this.state.bigImage} width="400" height="400" />
    //           </div>
    //         <div>
    //         <br/>
    //         <br/>
    //           <div className="smallImage">
    //             {this.renderImages()}
    //           </div>
    //         </div>
    //        </div>)
//   }
// }


class Renderimage extends React.Component{
 
    changeImage(img){
     this.props.onChange(img)
    }

  render()
  {
    return (<img src={this.props.data.imgurl} width="100" height="100" onClick={this.changeImage.bind(this,this.props.data.imgurl)}/>)
  }
}
class App extends React.Component {

    constructor(props)
  {
    super()
    {
      this.state={
        data:props.images
      }
    }
  }

    onImageChange(img)
  {
    this.props.onChange(img)
  }
    renderImages(){
    return  this.state.data.map((data,idx)=>(<Renderimage data={data} key={idx} onChange={this.onImageChange.bind(this)}/>))
  }

  render()

  {
      return (<div>
          <div className="bigImage">
            <img src={this.props.image.imgurl} width="400" height="400" />
          </div>
        <div>
        <br/>
        <br/>
          <div className="smallImage">
          {this.renderImages()}
          </div>
        </div>
    </div>)
  }
}

function mapStateToProps(state){
  return {
    image:state.images,
    images:state.Allimages
  }
}
function mapDispatchToProps(dispatch){
  
  return {
    onChange:(data)=>{
      dispatch(changeData(data))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);