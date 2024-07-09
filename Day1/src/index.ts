import express from "express";
import config from "./config";
import router from "./routes";

const app = express();
app.use(express.json());

app.use(router);
app.use;
app.get("/", (req, res) => {
  res.json({
    message: "hello world!!!",
  });
});

//req bhaneko everything that api gets, api lai k chaiyo ani response bhaneko hamile k pathaune
app.listen(config.port, () => {
  console.log(`server starterd listening on port: ${config.port}`);
});
