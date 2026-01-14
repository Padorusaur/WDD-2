import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());
//get

app.get("/getName", (req, res) => {
  var name = "Sison";
  res.status(200).json(name);
});

//post

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username == "Sison" && password == "Pass123") {
    res.status(200).json({
      message: "login succesful.",
      status: "successful",
    });
  } else {
    res.status(403).json({
      message: "invalid username or password",
      status: "failed",
    });
  }
});

app.listen(PORT, () => {
  console.log("server is running on PORT: ${PORT}");
});
