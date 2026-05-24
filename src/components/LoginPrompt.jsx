import { useNavigate } from "react-router-dom";
import "../styles/LoginPrompt.css";

function LoginPrompt({

  show,
  setShow

}) {

  const navigate =
    useNavigate();

  if (!show)
    return null;

  return (

    <div className="login-modal-backdrop">

      <div className="login-modal">

        <h2>
          Login First 🔒
        </h2>

        <p>

          Please login to access
          Sprouza learning
          experience.

        </p>

        <div className="login-modal-actions">

          <button
            className="cancel-login-btn"
            onClick={() =>
              setShow(false)
            }
          >
            Cancel
          </button>

          <button
            className="go-login-btn"
            onClick={() =>
              navigate("/login")
            }
          >
            Login
          </button>

        </div>

      </div>

    </div>

  );
}

export default LoginPrompt;