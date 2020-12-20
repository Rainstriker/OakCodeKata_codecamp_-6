import React from 'react';

class WizardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      emailAddress: '',
      username: '',
      password: ''
    }
    
    this.changeEmail = this.changeEmail.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.handlerKeypress = this.handlerKeypress.bind(this);
    this.handlerDisable = this.handlerDisable.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  changeEmail(event) {
    this.setState({ emailAddress: event.target.value });
  }

  changeUser(event) {
    this.setState({ username: event.target.value });
  }

  changePassword(event) {
    this.setState({ password: event.target.value });
  }

  prev() {
    let current = this.state.currentStep;
    current = current <= 1 ? 1 : current - 1;
    this.setState({ currentStep: current });
  }
  next() {
    let current = this.state.currentStep;
    current = current >= 2 ? 3 : current + 1;
    this.setState({ currentStep: current });
  }

  renderStep() {
    let current = this.state.currentStep;
    if (current === 1) {
      return <Step1 changeEmail={this.changeEmail} onKeyPress={this.handlerKeypress} />;
    } else if (current === 2) {
      return <Step2 changeUser={this.changeUser} onKeyPress={this.handlerKeypress} />;
    } else if (current === 3) {
      return <Step3 changePassword={this.changePassword} onKeyPress={this.handlerKeypress} />;
    }
    return this.renderSubmit();
  }

  handlerKeypress(event) {
    if (event.key === 'Enter') {
      if (this.state.currentStep === 3) {
        this.handlerSubmit();
      } else {
        this.next();
      }
    }
  }

  handlerDisable() {
    if (this.state.currentStep === 1) {
      return !this.state.emailAddress;
    } else if (this.state.currentStep === 2) {
      return !this.state.username;
    } else if (this.state.currentStep === 3) {
      return !this.state.password;
    }
    return false;
  } 

  handlerSubmit() {
    let current = this.state.currentStep;
    if (current === 3) {
      alert(
        `Your registration detail: \n 
        Email: ${this.state.emailAddress} \n 
        Username: ${this.state.username} \n
        Password: ${this.state.password}`
      );
    }
    return null;
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handlerSubmit}>
          <h2>{this.state[1]}</h2>
          <h1>React Wizard Form</h1>
          <p>Step {this.state.currentStep}</p>
          {this.renderStep()}
          <Button 
            currentStep={this.state.currentStep} 
            next={this.next} 
            prev={this.prev} 
            disabled={this.handlerDisable()}
          />
        </form>
      </div> 
    );
  }
}

class Step1 extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor='inputEmail'>Email address</label>
        <input 
          type='email' 
          className="form-control" 
          id='inputEmail' 
          placeholder='Enter email' 
          onChange={this.props.changeEmail}
          onKeyPress={this.props.onKeyPress}
        />
      </div>
    );
  }
}

class Step2 extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor='inputUsername'>Username</label>
        <input 
          type='text' 
          className="form-control" 
          id='inputUsername' 
          placeholder='Enter username' 
          onChange={this.props.changeUser}
          onKeyPress={this.props.onKeyPress} 
        />
      </div>
    );
  }
}

class Step3 extends React.Component {

  render() {
    return (
      <div>
        <label htmlFor='inputPassword'>Password</label>
        <input 
          type='password' 
          className="form-control" 
          id='inputPassword' 
          placeholder='Enter password' 
          onChange={this.props.changePassword}
          onKeyPress={this.props.onKeyPress} 
        />
      </div>
    );
  }
}

class Button extends React.Component {
  nextButton() {
    let current = this.props.currentStep;
    if (current <= 3) {
      return (
        <button type="submit" className="btn btn-primary m-2" onClick={this.props.next} disabled={this.props.disabled}> 
          Next
        </button>
      );
    }
    return null;
  }

  prevButton() {
    let current = this.props.currentStep;
    if (current !== 1) {
      return (
        <button className="btn btn-primary m-2" onClick={this.props.prev}>
          Previous
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="d-flex justify-content-end">
        {this.prevButton()}
        {this.nextButton()}
      </div>
    );
  }
}





export default WizardForm;