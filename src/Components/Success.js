import React, { Component } from 'react'
import  MuiThemeProvide from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
 continue = e=>{
  e.preventDefault();

  this.props.nextStep();
 }
  back = e=>{
  e.preventDefault();
  this.props.prevStep();
 }
 render() {
  // const {values:{firstName,lastName,email,occupation,city,bio}}=this.props;

  return (
   <MuiThemeProvide>
    <React.Fragment>
     <AppBar title="Success" />
     <h1>Thank you for your submission</h1>
     <p>You will get email with further instructions</p>
    </React.Fragment>
   </MuiThemeProvide>
  )
 }
}
const styles={
 button:{
  margin:15
 }
}
export default Success
