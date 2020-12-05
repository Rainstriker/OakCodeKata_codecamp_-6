import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";


const ValidatedForm = () => {
  const {register, errors, handleSubmit} = useForm({mode: "onBlur"});

  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <form style={{ 
        fontSize: 20, 
        padding: 54, 
        width: 408.78, 
        height: 557.78, 
        margin: "auto", 
        backgroundColor: "#F3F5F7"
      }} onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>First Name</label>
        <input type="text" className="form-control" name="firstName" ref={ register({required: true}) }/>
        {errors.firstName && <p>First name is required</p>}
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input type="text" className="form-control" name="lastName" ref={ register({required: true}) }/>
        {errors.lastName && <p>Last name is required</p>}
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input type="text" className="form-control" name="phone" ref={ register({ pattern: /([0-9])\d{9}/g })}/>
        {errors.phone && <p>Phone number is invalid</p>}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" name="email" ref={ register({required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g}) }/>
        {errors.email && errors.email.type === "required" && <p>Email address is required</p>}
        {errors.email && errors.email.type === "pattern" && <p>Email address is invalid</p>}
      </div>
    </form>
  );
}

export default ValidatedForm;