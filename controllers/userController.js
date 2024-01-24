const user = [
  {
    id: 1,
    username: "bsmithw3",
    email: "bsmith@mail.com",
    password: "bsmithw3_2023",
    name: "Brandon Smith",
  },
  {
    id: 2,
    username: "swoow3",
    email: "swoo@mail.com",
    password: "swoo_w3schools",
    name: "Samantha Woo",
  },
];

// Get All Users
getAllUsers = (req, res) => {
  try {
    res.send(user);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

// GET User by ID
getUserById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const users = user.find((f) => f.id === id);
    if (users) {
      res.send(users);
    } else {
      res.status(404).send("User not found.");
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

// POST New User
addNewUser = (req, res) => {
  try {
    const id = user.length + 1;
    const newUser = {
      id,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    };
    user.push(newUser);
    res.send(user);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  addNewUser
};
