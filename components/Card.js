import Link from "next/link";
import React from "react";

function Card(props) {
  return (
    <div class="col">
      <div class="card">
        <img src={props.imgURL} class="card-img-top" alt="picture" />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.content.substring(0, 300) + "..."}</p>
        </div>
        <Link
          href={`${props.id}`}
          className="btn btn-outline-secondary"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Card;
