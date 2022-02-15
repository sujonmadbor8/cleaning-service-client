import { Button } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import "./ContactForm.css";

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);
  return (
    <div
      className="formDiv"
      style={{ height: "500px", display: "flex", justifyContent: "center" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 style={{ textAlign: "center" }}>Let's Touch with Us</h1>
        <br />
        <input
          placeholder="First Name *"
          {...register("firstName", {
            required: true,
            validate: (value) => value !== "admin" || "Nice try!",
          })}
        />
        {errors.firstName && (
          <small style={{ color: "red" }}>this field is required</small>
        )}
        <input
          placeholder="Last Name *"
          {...register("lastName", {
            required: true,
            validate: (value) => value !== "admin" || "Nice try!",
          })}
        />
        {errors.lastName && (
          <small style={{ color: "red" }}>this field is required</small>
        )}
        <input
          placeholder="Email Address *"
          type="email"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        {errors.email && (
          <small style={{ color: "red" }}>this field is required</small>
        )}
        <input
          placeholder="Phone Number *"
          type="tel"
          {...register("phone", {
            required: true,
            validate: (value) => value !== "admin" || "Nice try!",
          })}
        />
        {errors.phone && (
          <small style={{ color: "red" }}>this field is required</small>
        )}
        <textarea {...register("aboutYou")} placeholder="About you" />
        <br />
        <Button className="btnStyle" style={{ color: "white" }} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
