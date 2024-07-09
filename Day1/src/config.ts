import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT,
  jwt: {
    secret: process.env.JWT_SECRET,
    accessTokenExpiryMS: 30000,
    refreshTokenExpiryMS: 86400000,
  },
};

export default config;
