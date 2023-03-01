import React from "react";
import "./Orders.scss";

const Orders = () => {

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="orders-container">
        <div className="orders-title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser.isSeller ? 'Buyer' : 'Seller'}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                className="orders-img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="gig-img"
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>881</td>
            <td>
              <img
                src="/assets/message.png"
                className="orders-delete"
                alt="message-icon"
              />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="orders-img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="gig-img"
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>881</td>
            <td>
              <img
                src="/assets/message.png"
                className="orders-delete"
                alt="delete-icon"
              />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="orders-img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="gig-img"
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>881</td>
            <td>
              <img
                src="/assets/message.png"
                className="orders-delete"
                alt="delete-icon"
              />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="orders-img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="gig-img"
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>881</td>
            <td>
              <img
                src="/assets/message.png"
                className="orders-delete"
                alt="delete-icon"
              />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="orders-img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="gig-img"
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>881</td>
            <td>
              <img
                src="/assets/message.png"
                className="orders-delete"
                alt="delete-icon"
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
