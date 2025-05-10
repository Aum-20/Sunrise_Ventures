import "../assets/css/about.css";

export default function About() {
  return (
    <div>

    
    <title>About Sunrise Ventures</title>
    


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

    <div className="about-container">
        <h1>About Us</h1>
        <p>Welcome to Sunrise Ventures! We are dedicated to providing innovative solutions in various fields, including agriculture, drone technology, and more. Our mission is to empower individuals and businesses through cutting-edge technology and exceptional service.</p>
        
        <h2>Contact Information</h2>
        <p>If you have any questions or inquiries, please feel free to reach out to us through the following contact information:</p>
        
        <div className="contact-info">
            <p><strong>Phone Number:</strong> +91 9910511007</p>
            <p><strong>Email:</strong> <a href="mailto:faujiteams@gmail.com">faujiteams@gmail.com</a></p>
            <p><strong>Address:</strong> UG 48, Ansal Chambers 2, Near Bank Of Baroda, Bikaji Cama Place, New Delhi - 110066</p>
        </div>
    </div>
    </div>
  );
}
