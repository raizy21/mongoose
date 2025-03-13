import express from "express"; // import express

const router = express.Router(); // create a router

// create a router
router.get("/user", (req, res) => {
  res.send("user route");
});

// export a router
export default router;
