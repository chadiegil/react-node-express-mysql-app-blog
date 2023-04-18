import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  console.error(error);

  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div id="error-page">
        <h1 style={{ color: "red" }}>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            border: "none",
            padding: "5px",
            borderRadius: "10px",
          }}
          onClick={() => navigate("/")}
        >
          go back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
