import React, { Component } from 'react';
import { Card, Button, TextBox, Modal } from './components/basic';
import { Menu } from './components/menu'
import { Navbar } from './components/static'
import { FormSection } from './components/formSection'
import logo from './logo.svg';
import './App.css';
import { firebaseapp } from './firebase.js'

class App extends Component {
  state = {
    email: '',
    password: '',
    openModal: false,
  }

  loginAuth() {
    
    let { email, password } = this.state
    
    email = email.trim()
    password = password.trim()


    firebaseapp.auth().signInWithEmailAndPassword( email, password )
      .then(()=> window.location = 'http://www.google.com')
      .catch(() => {
        this.setState({
          openModal: true,
        })
      })
  }

  renderModal() {
    return this.state.openModal ? 
    <Modal backgroundClick={()=> {
      this.setState({
        openModal: false,
      })
      this.renderModal()
    }}>
      <h2>Failed</h2>
      <p>Login Salah, mohon dicoba lagi</p>
      <p>clue( mail: test@mail.com || password: 123456 )</p>
      <Button color='fail' onClick={()=>{
        this.setState({
          openModal: false,
        })
        this.renderModal()
      }}> Ok </Button>
    </Modal> : <div></div>
  }

  render() {
    return (
      <div style={{ height:'100vh' }}>
        <Navbar logo={logo}></Navbar>
        <Menu/>
        {this.renderModal()}
        <FormSection>
          <form onSubmit = {(e) => {
            e.preventDefault();
            this.loginAuth()
          }}>
            <Card style={styles.FormStyle} >
              <h1>Login Form</h1>
              <TextBox type='' onChange={(e)=>{
                this.setState({
                  email: e.target.value
                })
              }} placeholder='Username'/>
              <TextBox type='password' onChange={(e)=>{
                this.setState({
                  password: e.target.value
                })
              }} placeholder='Password'/>
              <Button type='submit' color='success'>Login</Button>
            </Card>
          </form>
        </FormSection>
      </div>
    );
  }
}

const styles = {
  FormStyle: { 
    textAlign:'center',
    marginRight: 100,
    marginLeft: 100,
    marginBottom:100,
    paddingLeft:100,
    paddingRight: 100,
    paddingBottom: 100,
  }
}

export default App;
