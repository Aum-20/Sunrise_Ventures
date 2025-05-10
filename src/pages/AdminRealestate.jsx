import "../assets/css/adminPanelRealEstate.css";

export default function AdminRealestate() {
  return (
    <div>

    
    <title>Admin Panel - Real Estate Sunrise-Ventures</title>
    




    <div className="search-container">
        <form action="/admin/realEstate/search" method="GET">
            <input type="text" name="key" placeholder="Search by name, mobile number, state, etc."/>
            <input type="submit" value="Search"/>
        </form>
        {/* See All Button */}
        <form action="/admin/realEstate" method="GET">
            <input type="submit" value="See All"/>
        </form>
        <form action="/admin/" method="GET">
            <input type="submit" value="Back to admin page"/>
        </form>
    </div>

    <div className="container">
        {/* Buyers Table */}
        
            <p>No buyers found</p>
        
            <div className="table-container">
                <h2>Buyers</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Date/Time Registered</th>
                            <th>Name</th>
                            <th>Mobile No</th>
                            <th>WhatsApp No</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Area</th>
                            <th>Budget</th>
                            <th>Property Type</th>
                            <th>Contact</th> {/* New column for WhatsApp button */}
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            <tr>
                                <td>{index + 1}</td>
                                <td>{buyer.createdAt.toLocaleString()}</td>
                                <td>{buyer.name}</td>
                                <td>{buyer.mobileNumber}</td>
                                <td>{buyer.whatsappNumber}</td>
                                <td>{buyer.location.state}</td>
                                <td>{buyer.location.city}</td>
                                <td>{buyer.area}</td>
                                <td>{buyer.budget}</td>
                                <td>{buyer.propertyType}</td>
                                <td>
                                    <a href="https://wa.me/{buyer.whatsappNumber}" target="_blank">
                                        <img src="/whatsapp.png" alt="WhatsApp" className="whatsapp-icon" />
                                    </a>
                                </td>
                                <td>
                                    <form action="/admin/realEstate/buyer/{buyer._id}" method="POST">
                                        <button type="submit"><img src="/icons8-delete-24.png" alt="DELETE" /></button>
                                    </form>
                                </td>
                            </tr>
                        
                    </tbody>
                </table>
            </div>
        

        
            <p>No sellers found</p>
        
            {/* Sellers Table */}
            <div className="table-container">
                <h2>Sellers</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Date/Time Registered</th>
                            <th>Name</th>
                            <th>Mobile No</th>
                            <th>WhatsApp No</th>
                            <th>Address</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Area</th>
                            <th>Cost</th>
                            <th>Property Type</th>
                            <th>Contact</th> {/* New column for WhatsApp button */}
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            <tr>
                                <td>{index + 1}</td>
                                <td>{seller.createdAt.toLocaleString()}</td>
                                <td>{seller.name}</td>
                                <td>{seller.mobileNumber}</td>
                                <td>{seller.whatsappNumber}</td>
                                <td>{seller.location.address}</td>
                                <td>{seller.location.state}</td>
                                <td>{seller.location.city}</td>
                                <td>{seller.area}</td>
                                <td>{seller.cost}</td>
                                <td>{seller.propertyType}</td>
                                <td>
                                    <a href="https://wa.me/{seller.whatsappNumber}" target="_blank">
                                        <img src="/whatsapp.png" alt="WhatsApp" className="whatsapp-icon" />
                                    </a>
                                </td>
                                <td>
                                    <form action="/admin/realEstate/seller/{seller._id}" method="POST">
                                        <button type="submit"><img src="/icons8-delete-24.png" alt="DELETE" /></button>
                                    </form>
                                </td>
                            </tr>
                        
                    </tbody>
                </table>
            </div>
        
    </div>
    </div>
  );
}
