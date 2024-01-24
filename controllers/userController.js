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

// PUT User by ID
updateUserById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const updateUser = user.find((f) => f.id === id);
    if (updateUser) {
      const body = req.body;
      const updatedUser = {
        ...updateUser,
        ...body,
      };
      user[user.indexOf(updateUser)] = updatedUser;
      res.send(updatedUser);
    } else {
      res.status(404).send("User not found.");
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

// DELETE User by ID
deleteUserById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deleteUser = user.find((f) => f.id === id);
    if (deleteUser) {
      user.splice(user.indexOf(deleteUser), 1);
      res.send(deleteUser);
    } else {
      res.status(404).send("User not found.");
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

// POST User Login by ID
userLogin = (req, res) => {
  const { username, password } = req.body;
  const userLoggedIn = user.find((u) => u.username === username && u.password === password);
  try {
    if (userLoggedIn) {
      res.send("Login Successful");
    } else {
      res.status(404).send("Login failed.");
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  addNewUser,
  updateUserById,
  deleteUserById,
  userLogin,
};
