import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // check user if he's login
  }, []);

  const handleSignOut = () => {
    // call the logout api
    navigate("/");
  };

  return (
    <div className="dashboard">
      <h2 style={{ marginBottom: "30px" }}>HELLO NISWITH</h2>
      <button className="signOutBtn" onClick={handleSignOut}>
        SIGN OUT
      </button>
    </div>
  );
};

export default Dashboard;
