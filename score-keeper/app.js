const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const fs = require("fs");
const { validateBody } = require("./middlewares/user.middlewares");
const { dirname } = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/api/v1/score-keeper", (req, res) => {
  try {
    let users = JSON.parse(fs.readFileSync("data/users.json"));
    res.json({
      users: users,
      status: "success",
    });
  } catch (error) {
    res.json({
      error: error,
      status: "success",
      message: "invalid path",
    });
  }
});
// post
app.post("/api/v1/score-keeper", validateBody, (req, res) => {
  let { id, name } = req.body;
  let user = {
    id: Math.floor(Math.random() * 1000),
    name,
  };
  try {
    let users = JSON.parse(fs.readFileSync("./data/users.json"));
    users.push(user);
    fs.writeFileSync("./data/users.json", JSON.stringify(users));
    res.json({
      message: "create users successfully",
      status: "success",
    });
  } catch (error) {
    res.json({
        error:error,
        message: "invalid path",
    });
  }

});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
