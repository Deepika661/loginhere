import React from 'react';
import {connect} from 'react-redux'


class FirstScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
   static getDerivedStateFromProps(nextProps, prevState){
     if(nextProps){
       console.log('sdfv',nextProps);
    }
    else return null;
  }
render() {
return (
'FirstScreen')  }
}

export default connect()(FirstScreen);
