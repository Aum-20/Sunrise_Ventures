import "../assets/css/home.css";

export default function Home() {
  return (
    <div>

    
    <title>Sunrise Ventures</title>
    


    <div className="nav">
        <div className="logo">
            <img src="/logo.jpg" alt="Sunrise Ventures Logo" />
        </div>
        <div><h1> Sunrise-Ventures </h1></div>
        <div className="text">
            <ul>
                {/* <li><a href="/admin/signIn">Admin</a></li> */}
                <li><a href="/home">Home</a></li>
                {/* <li><a href="/aboutus" id="aboutUsBtn">About Us</a></li> */}
                <li><a href="/contactus" id="contactUsBtn">Contact Us</a></li>
            </ul>
        </div>
    </div>
    <div className="main">
        <div className="bg_image">
            <img src="/bg_image.jpg" alt="Background Image" />
        </div>
        <div className="grid">
            <a href="/realEstate">
                <div className="image1">
                    <img src="/realestate.jpg" alt="Buy and Sell" />
                </div>
            </a>
            <a href="/agriculture">
                <div className="image1">
                    <img src="/agri.jpg" alt="Agriculture" />
                </div>
            </a>
            <a href="/drone">
                <div className="image1">
                    <img src="/drone.jpg" alt="Drone" />
                </div>
            </a>
            <a href="/global-opportunities">
                <div className="image1">
                    <img src="/global.jpg" alt="Global Opportunities" />
                </div>
            </a>
            <a href="/alkine-water">
                <div className="image1">
                    <img src="/alkaline.jpg" alt="Alkine Water" />
                </div>
            </a>
            <a href="/farm-management">
                <div className="image1">
                    <img src="/farm.jpg" alt="Farm Management" />
                </div>
            </a>
        </div>
    </div>
    </div>
  );
}
