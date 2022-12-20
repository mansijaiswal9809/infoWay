import React from 'react'
import './Contcact.css'
const Contact = () => {
  return (
    <div className='container'>
      <div className="top_container"><img src="https://www.beekeeper.io/wp-content/uploads/2021/02/Manufacturing-Trends-FI.jpg" alt="" /></div>
      <div className="bottom_container">
        <div className="left_cotainer">
          <div className="mapouter">
          <div className='text_item'>
              <h1>USA</h1>
              <p>Address:46520 Fremont Blvd,Suite 614 Fremont CA – 94538.Phone:+631-923-8350e-mail: info@infowaygroup.com</p>
              </div>
            <div className="gmap_canvas">
              <iframe src="https://maps.google.com/maps?q=46520%20Fremont%20Blvd,%20Suite%20614%20Fremont%20CA%20%E2%80%93%2094538.&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas_1" frameborder="0" scrolling="no" style={{ width: "600px", height: "400px" }}></iframe>
              <a href="https://technologg.com/how-to-change-screen-orientation-in-windows-11/" style={{ display: 'none' }}>How to Change Screen Orientation in Windows 11</a>
            </div>
          </div>
          <div className="mapouter">
            <div className='text_item'>
            <h1>LOS ANGELES OFFICE</h1>
              <p>Address: 18766, Pioneer Blvd,Suite 614 Artesia, CA – 91326.Phone: +925-640-6720e-mail: LA@infowaygroup.com</p>
            </div>
            <div className="gmap_canvas">              
              <iframe src="https://maps.google.com/maps?q=18764-18766%20Pioneer%20Blvd%20,%20Artesia,%20CA%2090701,%20USA&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas_2" frameborder="0" scrolling="no" style={{ width: "600px", height: "400px" }}></iframe>
              <a href="https://technologg.com/how-to-change-screen-orientation-in-windows-11/" style={{ display: "none" }}>How to Change Screen Orientation in Windows 11</a>
              </div>
            </div>
          <div className="mapouter">
            <div className='text_item'>
            <h1>PUDUCHERRY OFFICE</h1>
              <p>Address:40,First Floor,Rajiv Gandhi Street,Senthamarai Nagar,Muthialpet ,Puducherry - 605003.Phone: +91-8056655291e-mail: puducherry@infowaygroup.com</p>
            </div>
            <div className="gmap_canvas">              
              <iframe src="https://maps.google.com/maps?q=8/17%20,%20Second%20Floor,%20Tambaram-Velacherry%20Main%20Road,%20Vijayanagaram,Medavakkam,%20Chennai%20-%20600100.&amp;t=k&amp;z=9&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas_3" frameborder="0" scrolling="no" style={{ width: '600px', height: '660px' }}></iframe>
              <a href="https://technologg.com/how-to-change-screen-orientation-in-windows-11/" style={{ display: "none" }}>How to Change Screen Orientation in Windows 11</a>
              </div>
            </div>
          <div className="mapouter">
            <div className='text_item'>
            <h1>CHENNAI OFFICE</h1>
              <p>Address: 8/17 , Second Floor,Tambaram-Velacherry Main Road,Vijayanagaram,Medavakkam,Chennai - 600100.Phone: +91-9500505590e-mail: chennai@infowaygroup.com</p>
            </div>
            <div className="gmap_canvas">              
              <iframe src="https://maps.google.com/maps?q=7030%20Woodbine%20Avenue%20,%20Suite%20500%20,%20Markham%20Ontario%20L3R%206G2%20,%20Canada&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas_4" frameborder="0" scrolling="no" style={{ width: "600px", height: "400px" }}></iframe>
              <a href="https://technologg.com/how-to-change-screen-orientation-in-windows-11/" style={{ display: "none" }}>How to Change Screen Orientation in Windows 11</a>
            </div>
            </div>
          <div className="mapouter"> 
          <div className='text_item'>
          <h1>CANADA OFFICE</h1>
            <p>Address: 7030 Woodbine Avenue ,Suite 500 , Markham Ontario L3R 6G2 , Canada.e-mail: canada@infowaygroup.com</p></div>           
            <div className="gmap_canvas">            
             <iframe src="https://maps.google.com/maps?q=160%20Robinson%20Road,%20Singapore%20Business%20Federation%20Centre,%20Singapore%20-%20068914%20&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas_5" frameborder="0" scrolling="no" style={{ width: "600px", height: "400px" }}></iframe>
             <a href="https://technologg.com/how-to-change-screen-orientation-in-windows-11/" style={{ display: "none" }}>How to Change Screen Orientation in Windows 11</a>
            </div>
            </div>
        </div>



        <div className="right_container">
          <h2>Contact Us</h2>
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
          <button className='button_Submit' type="submit">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
