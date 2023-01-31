import jwt from "jsonwebtoken";

export const decode = (jwt_token) => {
  return jwt.decode(jwt_token);
};
