import React from "react";

export default function UserDetails({ username, company, address, web }) {
  return (
    <div className="card mb-3" style={{ width: "570px" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
            className="card-img"
            alt="..."
          />
          <h5 className="card-title text-center mt-2">
            {company.name.toUpperCase()}
          </h5>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title ">{username}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              <b>{company.catchPhrase}</b>
            </h6>
            <p className="card-text">
              <small className="text-muted">
                {address.suite} ,{address.street} {address.city}&emsp;{" "}
                <b>zipcode:</b> {address.zipcode}
              </small>
            </p>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
