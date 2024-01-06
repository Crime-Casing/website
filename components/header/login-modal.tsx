// import { Dispatch, FormEvent, useRef } from "react";
// import defaultProfile from "@/public/images/profile.jpg";
// import Image from "next/image";

// import Cookie from "universal-cookie";

// export default function ({
//   activeModal,
//   setActiveModal,
// }: {
//   activeModal: boolean;
//   setActiveModal: Dispatch<boolean>;
// }): JSX.Element {
//   const aadharRef = useRef();
//   const nameRef = useRef();

//   const cookie = new Cookie(null, { path: __dirname });

//   const submitHandler = (e: FormEvent) => {
//     e.preventDefault();

//     const aadhar = (aadharRef.current as unknown as HTMLInputElement).value;
//     const name = (nameRef.current as unknown as HTMLInputElement).value;

//     cookie.set("aadhar", aadhar);
//     cookie.set("name", name);

//     setActiveModal(false);
//   };

//   return (
//     <>
//       {activeModal && (
//         <center>
//           <div className="modal_blur"></div>

//           <form
//             action=""
//             className="main main-absolute"
//             onSubmit={submitHandler}
//           >
//             <div className="profile--img">
//               {/* <img
//                 src="../../images folder/user.png"
//                 className="profile--img"
//                 alt="profile image"
//               /> */}
//               <Image src={defaultProfile} alt="" className="profile--img" />
//             </div>
//             <div className="details">
//               <div className="namecont">
//                 <label className="input-label" htmlFor="name">
//                   <b>Enter your Name:</b>
//                 </label>
//                 <input
//                   ref={nameRef}
//                   type="text"
//                   placeholder="Enter name as in Aadhar"
//                   className="text"
//                 />
//               </div>
//               <div className="namecont">
//                 <label className="input-label" htmlFor="number">
//                   <b>Enter AadharNumber:</b>
//                 </label>
//                 <input
//                   ref={aadharRef}
//                   type="text"
//                   placeholder="XXXX XXXX XXXX"
//                   className="text"
//                 />
//               </div>
//             </div>

//             <button type="submit" className="button1" onClick={submitHandler}>
//               Login
//             </button>
//             <br />
//             <label>
//               <input type="checkbox" name="remember" /> An Advocate?
//             </label>
//             <br />
//             <div className="advocate">
//               <div className="adv">
//                 <label className="advocate-stat" htmlFor="number">
//                   Enter your Register-ID:
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Register ID"
//                   className="reg-text"
//                 />
//               </div>

//               <select className="adv--type">
//                 <option>Session Advocate</option>
//                 <option>High court Advocate</option>
//                 <option>Supreme court Advocate</option>
//               </select>
//             </div>
//             <div className="color"></div>

//             <div className="container">
//               <button
//                 type="button"
//                 className="cancelbtn"
//                 onClick={() => {
//                   setActiveModal(false);
//                 }}
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </center>
//       )}
//     </>
//   );
// }
