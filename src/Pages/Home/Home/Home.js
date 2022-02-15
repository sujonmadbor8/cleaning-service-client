import React from "react";
import Footer from "../../Shared/Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Header from "./../Header/Header";
import Quality from "./../Quality.js/Quality";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <Quality />
      <Testimonial />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
