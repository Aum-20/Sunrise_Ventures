import React, { useState } from "react";
import "../assets/css/adminContactUs.css"; // Make sure the CSS file is in this path

function AdminContactus() {
  const [searchKey, setSearchKey] = useState("");

  const handleSearchKey = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <div className="admin-contactus-container">
      <h1>Contact Us Submissions</h1>

      <div className="search-container">
        <input
          type="text"
          id="searchInput"
          value={searchKey}
          onChange={handleSearchKey}
          placeholder="Search by name, mobile number, state, etc."
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile No.</th>
            <th>Email</th>
            <th>State</th>
            <th>District</th>
            <th>City</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody id="tableBody">
          {/* Placeholder rows, you may replace with dynamic mapping from state */}
          <tr>
            <td>John Doe</td>
            <td>1234567890</td>
            <td>john@example.com</td>
            <td>California</td>
            <td>Los Angeles</td>
            <td>LA City</td>
            <td>Interested in property</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminContactus;
