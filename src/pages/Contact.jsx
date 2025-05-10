import "../assets/css/contact.css";

export default function Contact() {
  return (
    <div>

    
    <title>Contact-Sunrise Ventures</title>
    



    <div className="nav">
        <div className="logo">
            <img src="https://sunriseventures.in/assets/images/logo.jpeg" alt="Sunrise Ventures Logo" />
        </div>
        <div className="text">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/aboutus" id="aboutUsBtn">About Us</a></li>
                {/* <li><a href="/contactus" id="contactUsBtn">Contact Us</a></li> */}
            </ul>
        </div>
    </div>

    {/* Background Image Container */}
    <div className="bg_image">
        <img src="/bg_image.jpg" alt="Background Image" />
    </div>

    <div id="contactFormContainer">
        <form id="contactUsForm" method="post" action="/workInProgress">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required  />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required  />

            <label for="phoneNo">Whatapp No.:</label>
            <input type="phoneNo" id="phoneNo" name="phoneNo" min="10" max="10" required  />

            <label for="state">State:</label>
            <input type="state" id="state" name="state" required  />

            <label for="msg">Msseage:</label>
            <textarea type="msg" id="msg" name="msg" required></textarea>

            <button type="submit">Submit</button>
        </form>
    </div>
    </div>
  );
}
