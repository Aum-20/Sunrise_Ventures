import "../assets/css/adminPanelRealEstate.css";

export default function Admin() {
  return (
    <div>

    
    <title>Sunrise Ventures</title>
    


    <div className="nav">
        <div className="logo">
            <img src="/logo.jpg" alt="Sunrise Ventures Logo" />
        </div>
        <div>
            <h1>Admin page</h1>
        </div>

        <div className="text">
            <ul>
                <li ><a href="/admin/contactUs">Contact us Data</a></li>
                <li><a id="logout-link">Logout</a></li>
            </ul>
        </div>
    </div>
    <div className="main">
        <div className="bg_image">
            <img src="/bg_image.jpg" alt="Background Image" />
        </div>
        <div className="grid">
            <a href="/admin/realEstate">
                <div className="image1">
                    <img src="/realestate.jpg" alt="Buy and Sell" />
                </div>
            </a>
            <a href="/admin/agriculture">
                <div className="image1">
                    <img src="/agri.jpg" alt="Agriculture" />
                </div>
            </a>
            <a href="/admin/drone">
                <div className="image1">
                    <img src="/drone.jpg" alt="Drone" />
                </div>
            </a>
            <a href="/admin/global-opportunities">
                <div className="image1">
                    <img src="/global.jpg" alt="Global Opportunities" />
                </div>
            </a>
            <a href="/admin/alkine-water">
                <div className="image1">
                    <img src="/alkaline.jpg" alt="Alkine Water" />
                </div>
            </a>
            <a href="/admin/farm-management">
                <div className="image1">
                    <img src="/farm.jpg" alt="Farm Management" />
                </div>
            </a>
        </div>
    </div>
    </div>
  );
}
