import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ isAllowed, redirectPath, children, data }) => {
  if (!isAllowed) return <Navigate to={redirectPath} replace state={data} />;

  return children;
};

export default ProtectedRoute;
