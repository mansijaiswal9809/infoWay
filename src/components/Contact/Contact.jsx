import React from 'react'
import './Contcact.css'
const Contact = () => {
  return (
    <div className='container'>
      <div className="top_container"><img src="http://www.infowaygroup.com/sites/all/themes/infowaygroup/images/new/contact.jpg" alt="" /></div>
      <div className="bottom_container">
      <div className="left_cotainer">
        <div className="mapouter"><div className="gmap_canvas"><iframe src="https://maps.google.com/maps?q=Mughalsarai&ampt=&ampz=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" scrolling="no" style={{ width: "600px", height: "400px" }} frameborder="0"></iframe><a href="https://technologg.com/blooket-join/" style={{ display: 'none' }}>blooket join</a></div></div>
      </div>
      
      <h2>Contact Us</h2>
        
      <div className="right_container">
        <form>
          <label htmlFor="fname">First Name:</label>
          <input type="text" name='fname' placeholder='First Name' /><br />

          <label htmlFor="lname">Last Name:</label>
          <input type="text" name='lname' placeholder='Last Name' /><br />

          <label htmlFor="cname">Company Name:</label>
          <input type="text" name='cname' placeholder='Company Name' /><br />

          <label htmlFor="email">Email:</label>
          <input type="email" name="email" placeholder='Email' /><br />

          <label htmlFor="phone">Phone:</label>
          <input type="number" name="phone" placeholder='Phone Number' /><br />

          <label htmlFor="City">Request for Services:</label>
          <select name="City">
            <option value="-1">-None-</option>
            <option value="0">Australia</option>
            <option value="1">Bangladesh</option>
            <option value="2">Belgium</option>
            <option value="3">Brazil</option>
            <option value="4">Canada</option>
            <option value="5">China</option>
            <option value="6">Colombia</option>
            <option value="7">Denmark</option>
            <option value="8">France</option>
            <option value="9">Germany</option>
            <option value="10">Hong Kong</option>
            <option value="11">India</option>
            <option value="12">Japan</option>
            <option value="13">Kenya</option>
            <option value="14">Macau</option>
            <option value="15">Mexico</option>
            <option value="16">Nepal</option>
            <option value="17">Netherlands</option>
            <option value="18">New Zealand</option>
            <option value="19">Philippines</option>
            <option value="20">Singapore</option>
            <option value="21">South Africa</option>
            <option value="22">Spain</option>
            <option value="23">Sri Lanka</option>
            <option value="24">Switzerland</option>
            <option value="25">Ukraine</option>
            <option value="26">United Arab Emirates</option>
            <option value="27">United Kingdom</option>
            <option value="28">United States Of America</option>
            <option value="29">Zimbabwe</option>
          </select><br />

          <label htmlFor="Services">Select Services</label>
          <select name="Services">Select Services
            <option value="-1">-None-</option>
            <option value="0">Staffing Services </option>
            <option value="1">Web UI/UX Development</option>
            <option value="2">Mobile Application Development</option>
            <option value="3">Big Data</option>
            <option value="4">Custom Application Development</option>
            <option value="5">Application Transformation</option>
            <option value="6">Robotics Process Automation</option>
            <option value="7">Digital Transformation</option>
            <option value="8"> Cyber Secuirty Solution</option>
            <option value="9"></option>
            <option value="10"></option>
          </select><br />

          <label htmlFor="Comment">Comment:</label>
          <textarea name="Comment" cols="30" rows="4" placeholder='Comment'></textarea>

        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact
