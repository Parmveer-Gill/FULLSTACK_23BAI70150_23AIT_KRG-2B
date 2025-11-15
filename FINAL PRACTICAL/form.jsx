import React, { useState } from "react";
import axios from "axios";

export default function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {

        title,
        body
      });

      console.log(response.data);
      alert("Post submitted!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
    setBody("")
    setTitle("")
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "300px", padding:"1rem" }}>
      <h2>Post Request Form</h2>

      
      <div  >
        <label style={{padding:"1rem" }}>Title:</label>
      <input 
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <br /><br />

      <label style={{padding:"1rem" }}>Body:</label>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      ></textarea>

      <br /><br />
</div>
      <button type="submit">Submit</button>
    </form>
  );
}
