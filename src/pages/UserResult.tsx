import { useLocation, useNavigate } from "react-router-dom";

import Button from "../components/Button/Button";

const UserResult = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="p-8 w-full flex flex-col justify-self-center items-center gap-5 text-center text-sm sm:w-96">
        No user data found. Please return to the homepage and enter the
        information
        <Button type="button" onClick={() => navigate("/")}>
          Go to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="p-8 flex flex-col items-center text-sm">
      <div className="p-4 rounded-lg shadow-md">
        <h2>User Info</h2>
        {state.fullname && (
          <p>
            <strong>Fullname:</strong> {state.fullname}
          </p>
        )}
        <p>
          <strong>Email:</strong> {state.email}
        </p>
      </div>
    </div>
  );
};

export default UserResult;
