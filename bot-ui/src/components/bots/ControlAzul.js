import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import{ Redirect } from 'react-router-dom';
import InputPortal from '../InputPortal';
import { useLocation } from 'react-router-dom';


const theme = {
  background: '#f5f8fb',
  fontFamily: 'monospace',
  headerBgColor: '#6960EC',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#6960EC',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps_entry = [
  {
    id: 'intro-message-1',
    message : 'Control Transfer Successful ',
    trigger: 'intro-message-2',
  },
  {
    id: 'intro-message-2',
    message: 'Starting Bot Interface..',
    trigger: 'intro-message-3',
  },
  {
    id: 'intro-message-3',
    message: 'Hello! I am CS-Bot-6960EC CodeName Azul!',
    trigger: 'intro-message-4',
  },
  {
    id : 'intro-message-4',
    message: 'My job as Bot-6960EC is to accept the text-input for processing.',
    trigger: 'input-portal-1',  
  },
  {
    id:'input-portal-1',
    message: 'Redirecting to Input Portal ...  ',
    trigger : 'control-transfer',
  },
  {
    id : 'control-transfer',
    message: ' ',
    end: true,
  },
]

const steps_exit = [
  {
    id: 'intro-message-1',
    message : 'Input Reception Successful ',
    trigger: 'intro-message-2',
  },
  {
    id: 'intro-message-2',
    message: 'Sending Target Text to Server for processing...',
    trigger: 'intro-message-3',
  },
  {
    id: 'intro-message-3',
    message: 'Now, Transferring Control to Roux ...',
    trigger: 'control-transfer',
  },
  {
    id : 'control-transfer',
    message: ' ',
    end: true,
  },
]


class ControlAzul extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect : false
    }
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect && this.props.interface == "init") {
      return <Redirect to="/takeinput/portal" />
    }
    if (this.state.redirect && this.props.interface == "re") {
      return <Redirect to="/results"/>
    }
  }
    render() {
      console.log(this.props.interface);
    return (
            <div>
              <ThemeProvider theme = {theme}>
                <ChatBot
                  handleEnd={this.setRedirect}
                  botDelay = '1500'
                  customDelay = '1600'
                  enableSmoothScroll = 'true'
                  headerTitle="Server - Azul"
                  speechSynthesis = {{ enable: true, lang: 'en' }}
                  steps = {this.state.interface ? steps_entry : steps_exit}
                />
              </ThemeProvider>
              {this.renderRedirect()}
            </div>
        )
    }
}

export default ControlAzul;