import React from "react";
import useFormContext from "../hooks/useFormContext";

const Billing = () => {
    const { data, handleChange } = useFormContext()

    return (
        <div className="billingContainer">
            <div className="flex-col">
                <div className="split-container">
                    <div className="flex-col">
                        <label htmlFor="billFirstName">First Name</label>
                        <input
                            type="text"
                            id="billFirstName"
                            name="billFirstName"
                            placeholder="John"
                            pattern="([A-Za-z])[\w\d\s+.]{1,}"
                            value={data.billFirstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex-col">
                        <label htmlFor="billLastName">Last Name</label>
                        <input
                            type="text"
                            id="billLastName"
                            name="billLastName"
                            placeholder="Doe"
                            pattern="([A-Za-z])[\w+.]{1,}"
                            value={data.billLastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <label htmlFor="billAddress1">Address</label>
                <input
                    type="text"
                    id="billAddress1"
                    name="billAddress1"
                    placeholder="222 Main Road"
                    pattern="[\w\d\s.#,]{2,}"
                    value={data.billAddress1}
                    onChange={handleChange}
                />

                <label htmlFor="billAddress2" className="offscreen">2nd Address line</label>
                <input
                    type="text"
                    id="billAddress2"
                    name="billAddress2"
                    placeholder="Apt-21"
                    pattern="[\w\d\s.#-]{2,}"
                    value={data.billAddress2}
                    onChange={handleChange}
                />

                <label htmlFor="billCity">City</label>
                <input
                    type="text"
                    id="billCity"
                    name="billCity"
                    placeholder="Ranchi"
                    pattern="([A-Z])[\w\s.]{1,}"
                    value={data.billCity}
                    onChange={handleChange}
                />

                <label htmlFor="billState">State</label>
                <select
                    id="billState"
                    name="billState"
                    value={data.billState}
                    onChange={handleChange}
                >
                    <option value="Choice">Choose a state</option>
                    <option value="JH">Jharkhand</option>
                    <option value="BR">Bihar</option>
                    <option value="MP">Madhya Pradesh</option>
                    <option value="UP">Uttar Pradesh</option>
                    <option value="DL">Delhi</option>
                    <option value="MH">Maharashtra</option>
                    <option value="GJ">Gujarat</option>
                    <option value="RJ">Rajasthan</option>
                    <option value="UK">Uttarakhand</option>
                    <option value="JK">Jammu and Kashmir</option>
                    <option value="OD">Odisha</option>
                    <option value="WB">West Bengal</option>
                    <option value="CH">Chhattisgarh</option>
                    <option value="TS">Telangana</option>
                    <option value="TN">Tamil Nadu</option>
                    <option value="KA">Karnatka</option>
                    <option value="KL">Kerala</option>
                </select>

                <label htmlFor="billZipCode">Zip Code</label>
                <input
                    type="text"
                    id="billZipCode"
                    name="billZipCode"
                    placeholder="123456"
                    pattern="[0-9]{6}"
                    maxLength="6"
                    value={data.billZipCode}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default Billing