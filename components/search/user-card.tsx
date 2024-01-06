import defaultProfile from "@/public/images/profile.jpg";
import Image from "next/image";

export interface UserCardProps {
  name: string;
  aadhar_id: number;
}

export default function (props: UserCardProps): JSX.Element {
  const { name, aadhar_id } = props;

  return (
    <>
      <div className="card1">
        <div className="user-card-container">
          <Image src={defaultProfile} alt="" className="user-card-img" />
          <h5 className="card-title">User Details</h5>
        </div>
        <div className="card-body">
          <div>
            <p className="card-text">
              <p>Name: {name}</p>
              <p>Aadhar Number: {aadhar_id}</p>
              {/* <p>
                Mobile-Number:
                <input
                  type="Mobile number"
                  name="Mobile number"
                  id="Mobile number"
                />
              </p> */}
            </p>
            {/* <p>
              Address: {line_1}, {pincode}, {district}, {state}
            </p> */}
          </div>
          <a href="#" className="btn btn-primary">
            Documents
          </a>
        </div>
      </div>
    </>
  );
}
