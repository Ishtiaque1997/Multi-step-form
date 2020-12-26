import React, { Component } from 'react'
import  MuiThemeProvide from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
 continue = e=>{
  e.preventDefault();
  this.props.nextStep();
 }
  back = e=>{
  e.preventDefault();
  this.props.prevStep();
 }
 render() {
  const {values,handleChange}=this.props;

  return (
   <MuiThemeProvide>
    <React.Fragment>
     <AppBar title="Enter Personal Details" />
     <TextField
     hintText="Enter your Occupation"
     floatingLabelText="Your Occupation"
     onChange={handleChange('occupation')}
     defaultValue={values.occupation}
     />
     <br/>
       <TextField
     hintText="Enter your City"
     floatingLabelText="City"
     onChange={handleChange('city')}
     defaultValue={values.city}
     />
     <br/>
       <TextField
     hintText="Enter your Bio"
     floatingLabelText="Bio"
     onChange={handleChange('bio')}
     defaultValue={values.bio}
     />
     <br/>
     <RaisedButton
     label="Continue"
     primary={true}
     style={styles.button}
     onClick={this.continue}
     />
     <RaisedButton
     label="Back"
     primary={false}
     style={styles.button}
     onClick={this.back}
     />
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
export default FormPersonalDetails
