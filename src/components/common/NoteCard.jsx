import React from "react";
import ButtonBlue from "./ButtonBlue";
import ButtonRed from "./ButtonRed";

const NoteCard = ({title, body}) => {
  return (
    <div className="card w-full bg-base-100 card-xs shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <div className="justify-end card-actions">
          <ButtonBlue label={'Edit note'} sizeClass={'btn-xs'}/>
          <ButtonRed label={'Delete note'} sizeClass={'btn-xs'}/>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
