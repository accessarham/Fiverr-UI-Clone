import React from "react";
import "./MyGigs.scss";
import { Link } from "react-router-dom";

const MyGigs = () => {
  return (
    <div className="myGigs">
      <div className="myGigs-container">
        <div className="myGigs-title">
          <h1>Gigs</h1>
          <Link to="/addGigs">
            <button>Add new Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className="myGigs-img" src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="gig-img" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>881</td>
            <td>
              <img src="/assets/delete.png" className="myGigs-delete" alt="delete-icon" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="myGigs-img" src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="gig-img" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>881</td>
            <td>
              <img src="/assets/delete.png" className="myGigs-delete" alt="delete-icon" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="myGigs-img" src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="gig-img" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>881</td>
            <td>
              <img src="/assets/delete.png" className="myGigs-delete" alt="delete-icon" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="myGigs-img" src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="gig-img" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>881</td>
            <td>
              <img src="/assets/delete.png" className="myGigs-delete" alt="delete-icon" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="myGigs-img" src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="gig-img" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>881</td>
            <td>
              <img src="/assets/delete.png" className="myGigs-delete" alt="delete-icon" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
