import React, { useState } from "react";
import {
  faBuildingColumns,
  faCalendarDays,
  faEllipsisVertical,
  faFileArchive,
  faStar,
  faTengeSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MainCard.scss";
function MainCard(props) {
  const { name, status, type, entityData } = props;

  const [isElipseOpen, setIsElipseOpen] = useState(false);
  return (
    <div className="mainCard">
      <div className="mainCard__data">
        <h3>{name}</h3>
        <div className="mainCard__data__sm-badge">
          <div>
            حالة السجل : <span>{status}</span>
          </div>
          <div>
            نوع السجل : <span>{type}</span>
          </div>
        </div>
        <div className="mainCard__data__info">
          <div className="type">
            <div>
              <FontAwesomeIcon icon={faBuildingColumns} className="mr-2" />
              <h5>نوع الكيان التجاري</h5>
            </div>
            <span>{entityData.entityType}</span>
          </div>
          <div className="type">
            <div>
              <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
              <h5>تاريخ الإنتهاء</h5>
            </div>
            <span>{entityData.endDate}</span>
          </div>
          <div className="type">
            <div>
              <FontAwesomeIcon icon={faTengeSign} className="mr-2" />
              <h5>الرقم الموحد للمنشأة</h5>
            </div>
            <span>{entityData.unifiedNumber}</span>
          </div>

          <div className="type">
            <div>
              <FontAwesomeIcon icon={faFileArchive} className="mr-2" />
              <h5>رقم السجل التجاري</h5>
            </div>
            <span>{entityData.CommercialRegistrationNo}</span>
          </div>
        </div>
        <button>عرض وإدارة السجل</button>
      </div>
      <div className="mainCard__controls">
        <div className="controls-icons">
          <FontAwesomeIcon icon={faStar} className="mr-2" />
        </div>
        <div className="controls-icons">
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className="mr-2"
            onClick={() => setIsElipseOpen(!isElipseOpen)}
          />
          {isElipseOpen && (
            <div className="manipulate-card">
              <span>تعديل السجل التجاري</span>
              <span>تجديد السجل التجاري</span>
              <span>شطب السجل التجاري</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainCard;
