import React from "react";
import "./subCard.scss";

function SubCard(props) {
  const { name, picture, deservedAmount, total, currency } = props;
  return (
    <div className="subCard">
      <div className="subCard__header">
        <h4>{name}</h4>
        <img src={picture} alt="" />
      </div>
      <div className="subCard__data">
        <div className="price">
          <h6>المبلغ المستحق</h6>
          <p>
            {deservedAmount} {currency || "ريال"}
          </p>
        </div>
        <div className="totalNo">
          <h6>العدد الإجمالي</h6>
          <p>{total}</p>
        </div>
      </div>
    </div>
  );
}

export default SubCard;
