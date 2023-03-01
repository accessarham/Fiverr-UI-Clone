import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const message = `lorem ipsum dolor sit amet, consectet ut labore et dolore magna aliquet er`;

  return (
    <div className="messages">
      <div className="messages-container">
        <div className="messages-title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td>
              <Link className="link" to="/message/123">{message.substring(1, 100)}...</Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td>
              <Link className="link" to="/message/123">{message.substring(1, 100)}...</Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link className="link" to="/message/123">{message.substring(1, 100)}...</Link>
            </td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link className="link" to="/message/123">{message.substring(1, 100)}...</Link>
            </td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link className="link" to="/message/123">{message.substring(1, 100)}...</Link>
            </td>
            <td>1 day ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
