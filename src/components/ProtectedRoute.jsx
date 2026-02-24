import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ component: Component, ...rest }) {
  const token = useSelector((state) => state.client.token);

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect to={{
            pathname: "/login",
            state: { from: props.location.pathname }
          }} />
        )
      }
    />
  );
}

export default ProtectedRoute;