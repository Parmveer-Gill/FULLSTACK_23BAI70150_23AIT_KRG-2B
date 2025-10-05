import { useState } from "react";
import DisplayForm from "./DisplayForm";

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        username: ""
    });

    let [comments, setComments] = useState([]);

    let handleInputChange = (event) => {
        let { name, value } = event.target;
        setFormData((currData) => ({
            ...currData,
            [name]: value
        }));
    };

    let handleSubmit = (event) => {
        
        event.preventDefault();
        
        setComments((curr) => [...curr, formData]); // Add new comment
        
        setFormData({ fullName: "", username: "" }); // Reset form
        console.log(formData.fullName);
        console.log(formData.username);

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Write Full Name : </label>
                <input
                    type="text"
                    placeholder="Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    id="fullName"
                    name="fullName"
                />
                <br /><br />
                <label htmlFor="username">Username : </label>
                <input
                    type="text"
                    placeholder="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    id="username"
                    name="username"
                />
                <br /><br />
                <button>Press</button>
            </form>

            {/* Pass comments down */}
            <DisplayForm comments={comments} />
        </div>
    );
}
