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
    this.buttonDisable = this.buttonDisable.bind(this);
  }

  changeEmail(event) {
    this.setState({ emailAddress: event });
  }

  changeUser(event) {
    this.setState({ username: event });
  }

  changePassword(event) {
    this.setState({ password: event });
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
      return <Step1 changeEmail={this.changeEmail} />;
    } else if (current === 2) {
      return <Step2 changeUser={this.changeUser} />;
    } else if (current === 3) {
      return <Step3 changePassword={this.changePassword} />;
    }
    return this.renderSubmit();
  }

  buttonDisable() {
    let current = this.state.currentStep;
    let stateArr = this.state.currentStep;
    console.log(stateArr);
    return Object.keys(stateArr)[current].length < 1;
  }

  handlerSubmit() {
    let current = this.state.currentStep;
    if (current > 3) {
      alert(
        `Your registration detail: \n 
        Email: ${this.email} \n 
        Username: ${this.username} \n
        Password: ${this.password}`
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        <form>
          <h2>{this.state[1]}</h2>
          <h1>React Wizard Form</h1>
          <p>Step {this.state.currentStep}</p>
          {this.renderStep()}
          <Button currentStep={this.state.currentStep} next={this.next} prev={this.prev}/>
        </form>
      </div> //disabled={this.buttonDisable}
    );
  }
}

class Step1 extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor='inputEmail'>Email address</label>
        <input type='email' className="form-control" id='inputEmail' placeholder='Enter email' onChange={this.changeEmail} prev={this.prev} />
      </div>
    );
  }
}

class Step2 extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor='inputUsername'>Username</label>
        <input type='text' className="form-control" id='inputUsername' placeholder='Enter username' onChange={this.changeUser} />
      </div>
    );
  }
}

class Step3 extends React.Component {

  render() {
    return (
      <div>
        <label htmlFor='inputPassword'>Password</label>
        <input type='password' className="form-control" id='inputPassword' placeholder='Enter password' onChange={this.changePassword} />
      </div>
    );
  }
}

class Button extends React.Component {
  nextButton() {
    let current = this.props.currentStep;
    if (current <= 3) {
      return (
        <button type="submit" className="btn btn-primary" onClick={this.props.next}>
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
        <button className="btn btn-primary" onClick={this.props.prev}>
          Previous
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        {this.prevButton()}
        {this.nextButton()}
      </div>
    );
  }
}





export default WizardForm;