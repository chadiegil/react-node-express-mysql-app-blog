import React from "react";

import { useParams } from "react-router-dom";

const User = () => {
  const user_id = useParams();

  return <div>User : {user_id.id}</div>;
};

export default User;
