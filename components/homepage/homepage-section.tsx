"use client";
import Image from "next/image";

import docImage from "@/public/images/docs.png";
import taskManagement from "@/public/images/task management.png";
import chater from "@/public/images/chat.png";
import logo from "@/public/images/justice.png";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function (): JSX.Element {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const searchHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const target = searchRef.current;

    if (!target) return;

    const searchValue = target.value;
    router.push(`http://localhost:3000/search/${searchValue}`);

    //Clear the input
    target.value = "";
  };

  return (
    <>
      <div className="hero-section position-relative">
        <div className="start">
          <h1 className="crime">Crime-Casing</h1>
          <h4 className="crime-tag">Your One Stop Judicial Transparency</h4>
          <form className="search-box" onSubmit={searchHandler}>
            <input
              className="search-bar mx-3"
              type="search"
              placeholder="Enter your case code"
              ref={searchRef}
            />
            <button className=" btn btn-primary"> Search</button>
          </form>
        </div>
      </div>
      <div className="theory" id="headings">
        <div className="theory--subs">
          <h2 className="theoryHeading">Summons</h2>
          <p className="description">
            A summons is a formal notice issued by a court, requiring an
            individual to appear in court on a specified date and time
          </p>
        </div>
        <div className="theory--subs">
          <h2 className="theoryHeading">Notice to Produce</h2>
          <p>
            This notice requires a party to produce specific documents or
            evidence relevant to the case.
          </p>
        </div>
        <div className="theory--subs">
          <h2 className="theoryHeading">Notice of Hearing</h2>
          <p>
            This notice informs parties involved in a case about upcoming
            hearings, conferences, or court sessions
          </p>
        </div>
        <div className="theory--subs">
          <h2 className="theoryHeading">Settlement</h2>
          <p>
            {" "}
            An agreement reached between parties involved in a legal dispute,
            usually before or during a trial, to resolve the issues without a
            final court judgment
          </p>
        </div>
        <div className="head">
          <h1 className="head--heading">Key theories</h1>
        </div>
        <div className="theory--subs">
          <h2 className="theoryHeading">Arguments</h2>
          <p>
            {" "}
            refer to the presentation of reasons or evidence in support of a
            particular position or viewpoint
          </p>
        </div>
        <div className="theory--subs">
          <h2 className="theoryHeading">Lawyer</h2>
          <p>
            {" "}
            a legal professional who is trained and licensed to practice law
          </p>
        </div>
        <div className="theory--subs">
          <h2 className="theoryHeading">Advocate</h2>
          <p>
            {" "}
            refer to a lawyer who is entitled to practice in higher courts and
            has the right to represent clients in those courts.
          </p>
        </div>
        <div className="theory--subs">
          <h2 className="theoryHeading">Trials</h2>
          <p>
            {" "}
            formal proceedings in a court of law where evidence is presented,
            witnesses are examined and cross-examined, and legal arguments are
            made to determine the resolution of a legal dispute
          </p>
        </div>
      </div>
      <div className="container features-container mt-5 ">
        <div className="row features-section ">
          <h1 className="text-center feature">Features</h1>
          <div className="col-md-6 p-5">
            <div className="feature-card p-5">
              <Image src={docImage} alt="" className="feature-images" />
              <h1>Documents</h1>
            </div>
          </div>
          <div className="col-md-6 p-5">
            <div className="feature-card p-5">
              <Image src={taskManagement} alt="" className="feature-images" />
              <h1>Task management</h1>
            </div>
          </div>
        </div>
        <div className="row features-section">
          <div className="col-md-6 p-5 pt-0">
            <div className="feature-card p-5">
              <Image src={chater} alt="" className="feature-images"></Image>
              <h1>Communication</h1>
            </div>
          </div>
          <div className="col-md-6 p-5 pt-0">
            <div className="feature-card p-5">
              <img
                src="./images/transparency.png"
                className="feature-images"
                alt=""
              />
              <h1>Transparency</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="FAQs-container mt-5">
        <h2 className="mx-4 text-white">FAQ’s</h2>
        <div
          className="accordion accordion-flush mt-5"
          id="accordionFlushExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header  w-100" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <h6 className=" text-purple  fs-5">
                  How does a Crime-Casing assist in case tracking?
                </h6>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p className="text-purple poppins-300">
                  It provides real-time updates on case statuses, hearings, and
                  deadlines, allowing stakeholders to track progress and reduce
                  delays.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <h6 className="text-purple  fs-5 pt-2">
                  How does a Crime-casing handle security?
                </h6>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p className="text-purple poppins-300">
                  Security is a top priority, with robust encryption, user
                  authentication, and access controls. Regular security audits
                  and updates maintain a secure environment.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <h6 className="text-purple  fs-5 pt-2">
                  Can users access the Crime-casing remotely?
                </h6>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p className="text-purple poppins-300">
                  Many systems offer remote access, allowing authorized users to
                  securely access the system from different locations.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                <h6 className="text-purple  fs-5 pt-2">
                  How does a Court Management System benefit the court system?
                </h6>
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p className="text-purple poppins-300">
                  It improves efficiency by automating processes, reducing
                  paperwork, ensuring data accuracy, and providing quick access
                  to case information. It enhances transparency, speed, and
                  overall effectiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-logo">
          <Image src={logo} alt="" className="footer-img" />
          <h2 className="margin">Crime-Casing</h2>
          <h5 className=" mt-2">by TechnoCrats</h5>
        </div>

        <hr />
        <div className="contact-us">
          <p>&copy; Copyrights reserved. All rights reserved.</p>
        </div>
        <div className="foot-img">
          <img src="./images/instagram.png" />
        </div>
      </footer>
    </>
  );
}
