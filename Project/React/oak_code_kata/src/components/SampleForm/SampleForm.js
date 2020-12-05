import React, { useState } from 'react';
import FormInput from './FormInput.js'
import EnteredInfo from './EnteredInfo.js';

const SampleForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [destination, setDestination] = useState('');
  const [nutsFree, setNutsFree] = useState(false);
  const [lactoseFree, setLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);

  const firstNameHandle = e => {
    setFirstName(e.target.value);
  }

  const lastNameHandle = e => {
    setLastName(e.target.value);
  }

  const ageHandle = e => {
    setAge(e.target.value);
  }

  const genderHandle = e => {
    setGender(e.target.value);
  }

  const destinationHandle = e => {
    setDestination(e.target.value);
  }

  const nutsFreeHandle = () => {
    setNutsFree(!nutsFree);
  }

  const lactoseFreeHandle = () => {
    setLactoseFree(!lactoseFree);
  }

  const isVeganHandle = () => {
    setIsVegan(!isVegan);
  }

  const submitHandle = () => {
    setFirstName('');
    setLastName('');
    setAge('');
    setGender('');
    setDestination('');
    setNutsFree(false);
    setLactoseFree(false);
    setIsVegan(false);
  }

  return (
    <div className="mx-2">
      <h1 className="m-0 p-2" style={{backgroundColor: "#3B3636", color: "white"}}>Sample form</h1>
      <FormInput  
        firstName={firstNameHandle}
        lastName={lastNameHandle}
        age={ageHandle}
        gender={genderHandle}
        destination={destinationHandle}
        nutsFree={nutsFreeHandle}
        lactoseFree={lactoseFreeHandle}
        isVegan={isVeganHandle}
        submit={submitHandle}
      />
      <hr className="my-2" style={{backgroundColor: "grey"}}/>
      <EnteredInfo />
    </div>
  );
}

export default SampleForm;