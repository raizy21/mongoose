import express from "express"; // import express
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js"; // import controller functions
const router = express.Router(); // create a router

// create a router
// router.get("/user", (req, res) => {
//   res.send("user route");
// });

router.route("/").get(getUsers).post(createUser); // create a route for get and post requests
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser); //  create a route for get, put and delete requests

// export a router
export default router;
