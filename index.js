const express = require("express");
const userRoutes = require("./routes/userRoutes");

const port = 8080;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Homepage");
});

app.use("/users", userRoutes);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
