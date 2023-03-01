import React from "react";
import "./AddGig.scss";

const AddGig = () => {
  return (
    <div className="addGig">
      <div className="addGig-container">
        <h1>Add New Gig</h1>
        <hr />
        <div className="addGig-sections">
          <div className="addGig-sections-left">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="e.g I will do something I'm really good at"
            />
            <label htmlFor="category">Category</label>
            <select name="category" id="category">
              <option value="">Select Category</option>
              <option value="graphics-design">Graphics & Desgin</option>
              <option value="web-design">Web Design</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="coverImage">Cover Image</label>
            <input type="file" />
            <label htmlFor="coverImage">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="coverImage">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="16"
              placeholder="Brief description to introduce your service to the customers"
            ></textarea>
            <button>Create</button>
          </div>
          <div className="addGig-sections-right">
            <label htmlFor="serviceTitle">Service Title</label>
            <input type="text" placeholder="e.g. One page web design" />
            <label htmlFor="shortDescription">Short Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Short description of your service"
            ></textarea>
            <label htmlFor="deliveryTime">Delivery Time (e.g. 3 Days)</label>
            <input type="number" min={1} />
            <label htmlFor="revisionNumber">Revision Number</label>
            <input type="number" min={1} />
            <label htmlFor="addFeatures">Add Features</label>
            <input type="text" placeholder="e.g. Page design" />
            <input type="text" placeholder="e.g. File uploading" />
            <input type="text" placeholder="e.g. Setting up a domain" />
            <input type="text" placeholder="e.g. Hosting" />
            <label htmlFor="price">Price</label>
            <input type="number" min={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGig;
