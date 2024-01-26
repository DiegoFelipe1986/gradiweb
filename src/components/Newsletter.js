import { useState } from 'react';
import '../styles/Newsletter.scss';
import bluepill  from '../images/bluepill.png'
import pinkpill  from '../images/pinkpill.png'
import blurrypill  from '../images/blurrypill.png'
import greenpill  from '../images/greenpill.png'
import squrepill  from '../images/squrepill.png'

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [validationMessage, setValidationMessage] = useState('');

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailPattern.test(email)) {
        setValidationMessage('Valid email. Thank you for subscribing!');
      } else {
        setValidationMessage('Invalid email. Please enter a valid address.');
      }
    };

    return (
        <>
            <div className="wave">

              <img src={pinkpill} className='pinkpill' alt="Descripción de la imagen 1" />
              <img src={greenpill} className='greenpill' alt="Descripción de la imagen 1" />
              <img src={blurrypill} className='blurrypill' alt="Descripción de la imagen 1" />
                <div className="box">
                    <h2 className='newstitle'>Join the green revolution without commitment</h2>
                    <p className='newstext'>
                        If you are missing something and don't want to miss future <br />promotions or our future  products
                    </p>
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                                placeholder="Your email"
                                value={email}
                                onChange={handleEmailChange}
                                requiredtype="email"
                                />
                        <button type="submit">Send</button>
                    </form>

                    {validationMessage && <p className="validation-message">{validationMessage}</p>}
                </div>
                <img src={squrepill} className="squarepill" alt="Descripción de la imagen 1" />
                <img src={bluepill}  className="bluepill" alt="Descripción de la imagen 1"  />
            </div>

        </>
    )
}

export default Newsletter