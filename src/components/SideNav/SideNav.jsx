import React from "react";
import "./side-nav.scss";
import logo from "../../static/images/logo.svg";
import SDIA from "../../static/images/SDAIA.svg";

import { Card, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faClone,
  faFileLines,
  faSignOut,
  faUser,
  faBookOpen,
  faUserPlus,
  faPenToSquare,
  faTrashCan,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

function SideNav() {
  return (
    <aside>
      <div className="sideNav">
        <div className="sideNav__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="sideNav__user-info">
          <h6>مرحبا</h6>
          <div className="sideNav__user-info__user">
            <div>
              <FontAwesomeIcon icon={faUser} alt="user" />
              <h5>أحمد خالد القحطاني</h5>
            </div>
            <FontAwesomeIcon icon={faSignOut} className="fa-rotate-180" />
          </div>
        </div>
        <Nav className="flex-column pt-2 nav-list">
          <div className="nav-tabs">
            <ul>
              <Nav.Item className="active">
                <Nav.Link href="/">
                  <FontAwesomeIcon
                    icon={faHome}
                    className="mr-2 fa-regular"
                    inverse
                  />
                  الرئيسية
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">
                  <FontAwesomeIcon icon={faClone} className="mr-2" inverse />
                  الطلبات الواردة
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">
                  <FontAwesomeIcon
                    icon={faFileLines}
                    className="mr-2"
                    inverse
                  />
                  طلباتي
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">
                  <FontAwesomeIcon
                    icon={faBookOpen}
                    className="mr-2 fa-regular"
                    inverse
                  />
                  سجل العناوين
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">
                  <FontAwesomeIcon icon={faUserPlus} className="mr-2" inverse />
                  التفاويض
                </Nav.Link>
              </Nav.Item>
            </ul>
            <ul>
              <p>الخدمات التجارية</p>
              <Nav.Item>
                <Nav.Link href="/">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="mr-2"
                    inverse
                  />
                  حجز اسم تجاري
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="mr-2"
                    inverse
                  />
                  تجديد سجل تجاري
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">
                  <FontAwesomeIcon icon={faTrashCan} className="mr-2" inverse />
                  شطب سجل تجاري
                </Nav.Link>
              </Nav.Item>
            </ul>
            <ul>
              <p>روابط أخري</p>
              <Nav.Item>
                <Nav.Link href="/">منصة الأعمال</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">الخدمات الإلكترونية</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">تواصل معنا</Nav.Link>
              </Nav.Item>
            </ul>
          </div>
          <div>
            <div className="sideNav__bt-cards">
              <div>
                <div className="card card-light">
                  <h5>إصدار سجل تجاري</h5>
                  <p>
                    إذا كنت لا تعلم نوع الكيان التجاري
                    <Card.Link href="#"> إضغط هنا</Card.Link>
                  </p>
                </div>
              </div>
              <div className="card card-transparent">
                <Card.Body>
                  <h5>إصدار رخصة فورية لسجل تجاري</h5>

                  <button>إصدار الرخصة التجارية</button>
                </Card.Body>
              </div>
            </div>
            <div className="sideNav__info">
              <img src={SDIA} alt="SDIA log" />
              <h6>تطوير الهيئة السعودية للبيانات والذكاء الإصطناعي</h6>
            </div>
          </div>
        </Nav>
      </div>
    </aside>
  );
}

export default SideNav;
