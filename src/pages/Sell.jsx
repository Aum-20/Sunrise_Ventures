import "../assets/css/sell.css";

export default function Sell() {
  return (
    <div>

    
    <title>Sell Property</title>
    


    <div className="bgimage">
        <img src="/house.jpeg" alt="house" />
    </div>
    <div className="container">
        <h2>Sell Your Property</h2>
        <form id="propertyForm" action="/realEState/sell" method="POST" >
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required  />
            </div>

            <div className="form-group">
                <label for="whatsappNumber">WhatsApp Number</label>
                <input type="tel" id="whatsappNumber" name="whatsappNumber" required maxlength="10" minlength="10"  />
            </div>

            <div className="form-group">
                <label for="mobileNumber">Mobile Number (If Different)</label>
                <input type="tel" id="mobileNumber" name="mobileNumber" maxlength="10" minlength="10"  />
            </div>

            <div className="form-group">
                <label for="email">E-mail ID</label>
                <input type="email" id="email" name="email" required  />
            </div>

            <div className="form-group">
                <label for="state">State (Where the property is located)</label>
                <select id="state" name="state" required>
                    <option value="">Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                </select>
            </div>
            <div className="form-group">
                <label for="city">City</label>
                <input type="text" id="city" name="city" required  />
            </div>

            <div className="form-group">
                <label for="address">Address</label>
                <input type="text" id="address" name="address" required  />
            </div>

            <div className="form-group">
                <label for="pincode">Pin-code</label>
                <input type="text" id="pincode" name="pincode" required  />
            </div>

            <div className="form-group">
                <label for="area">Area (in sq. ft)</label>
                <input type="number" id="area" name="area" required  />
            </div>
            <div className="form-group">
                <label for="cost">Cost (Price to sell at)</label>
                <input type="number" id="cost" name="cost" required  />
            </div>

            <div className="form-group">
                <label for="propertyType">Plot / Agriculture Land / Apartment</label>
                <select id="propertyType" name="propertyType" required>
                    <option value="">Select Property Type</option>
                    <option value="plot">Plot</option>
                    <option value="agriculture-land">Agriculture Land</option>
                    <option value="plot">Apartment</option>
                </select>
            </div>

            {/* <div className="form-group">
                <label for="propertyImages">Images of Property</label>
                <input type="file" id="propertyImages" name="propertyImages" multiple required  />
            </div> */}

            <button type="submit">Submit</button>
        </form>
    </div>
    </div>
  );
}
