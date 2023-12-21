import crypto from "crypto";

const SECRET = "APPROVE-ME-REST-API";

export const random = () => crypto.randomBytes(128).toString("base64");
export const authentication = (salt: string, password: string) => {
  return crypto
    .createHmac("sha256", [salt, password].join("/")) // HMAC - Hash based Message Authentication Code - should have a shared key/password
    .update(SECRET) // Shared key
    .digest("hex"); // digest == output
};

// export const passwordMatch = (password: string, expectedHash: string) => {
//   return crypto.timingSafeEqual(password, expectedHash);
// };
