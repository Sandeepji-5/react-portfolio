import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Show the modal immediately to indicate form submission is in progress
    setModalMessage("Submitting form...");
    setShowModal(true);

    // Perform an AJAX request to submit the form
    const formData = new FormData(event.target);
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwOKew8AHW03sU61sIzLGBPmDmVkTAQB5fqkgvXgugxKfuRYgVkzUWqxehnWYeUtrZX/exec', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        const responseText = await response.text();
        console.log("Response Text:", responseText);
        // Successful response
        setModalMessage(responseText);
      } else {
        // Error response
        console.error("Error:", response.statusText);
        setModalMessage('Error: Something went wrong.');
      }
    } catch (error) {
      // Network error
      console.error("Network error:", error.message);
      setModalMessage('Error: Network issue occurred.');
    } finally {
      // Always close modal
      document.getElementById('cForm').reset(); // Clear the form fields
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div id='contact' className='contactMe componentStyle'>
      <div className='blurBg'></div>
      <div className='contDetail'>
        <h1 className='secTitle'>Contact <span id='spanTitle'>Me</span></h1>
        <h3>Get in touch with me !</h3>

        <div className='contactForm'>
          <form id='cForm' className='cForm' onSubmit={handleSubmit}>

            <div className='fname'>
              <input type="text" placeholder='First Name' name='FirstName' autoComplete='off' required/>
              <input type="text" placeholder='Last Name' name='LastName' autoComplete='off' required/>
            </div>

            <div className='details'>
              <input type="email" placeholder='Email ID' name='Email' autoComplete='off' required/>
              <input type="number" placeholder='Phone Number' name='PhoneNo' autoComplete='off' required />
              <textarea type="text" id="message" name="Message" rows="5" placeholder='Message' autoComplete='off' required></textarea>
            </div>

            <div className='formBtn'>
              <input id='submit' className='formBtnStyle' type="submit"/>
              <input id='reset' className='formBtnStyle' type="reset"/>
            </div>
          </form>
        </div>
      </div>

      {/* Modal HTML */}
      {showModal && (
        <div id="myModal" className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p id="modalMessage">{modalMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;