import { getItem } from "./localstorage";

interface IToken {
  sub: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

const decodeToken = (token: string): IToken | null => {
  try {
    const payload = token.split(".")[1];
    if (!payload) return null;

    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
    const decodedToken: IToken = JSON.parse(atob(base64));
    return decodedToken;
  } catch {
    return null;
  }
};

export const verifyToken = () => {
  const token: string | null = getItem("token");
  if (token) {
    const tokenObject = decodeToken(token);
    console.log(tokenObject);
    if (!tokenObject) return false;

    const expiresTime = tokenObject.exp * 1000;
    const currentTime = Date.now();
    const isExpired = currentTime > expiresTime;
    return !isExpired;
  }
  return false;
};
