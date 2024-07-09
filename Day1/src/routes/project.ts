import express from "express";
const router = express();

router.post("/", (req, res) => {
  res.json({
    message: "Project created",
  });
});

router.get("/", (req, res) => {
  res.json({
    message: "Project this is ",
  });
});

router.delete("/", (req, res) => {
  res.json({
    message: "Project deleted",
  });
});

router.put("/", (req, res) => {
  res.json({
    message: "Project updated",
  });
});

export default router;
