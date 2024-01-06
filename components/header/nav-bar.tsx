import justice from "@/public/images/justice.png";
import Image from "next/image";

import styles from "./nav-bar.module.css";
// import { useState } from "react";
// import LoginModal from "./login-modal";

export default function (): JSX.Element {
  // const [activeModal, setActiveModal] = useState(false);

  return (
    <>
      {/* <LoginModal setActiveModal={setActiveModal} activeModal={activeModal} /> */}
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          style={{ padding: 0 }}
        >
          <div className="container-fluid">
            <Image src={justice} alt="0" width={50} height={50} />

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#headings">
                    Key theories
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Sign up
                  </a>
                </li>
                <li
                  className="nav-item"
                  onClick={() => {
                    // setActiveModal(true);
                  }}
                >
                  <a className="nav-link active" href="#">
                    Login
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
