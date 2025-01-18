

import jwt from "jsonwebtoken";

export const getToken = (data: any) => {
 const token = jwt.sign(data, process.env.JWT_SECRET as string);

 return token;
};

export const verifyToken = (token: string) => {
const result = jwt.verify(token, process.env.JWT_SECRET as string, (err, result) => {
  if (err) return null;
  return result;
 });
 return result;
};
export const decodeToken = (token: string) => {
 const result = jwt.decode(token);
 return result;
};
