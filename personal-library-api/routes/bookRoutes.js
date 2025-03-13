import express from "express"; // import express

const router = express.Router(); // create a router

// create a router
router.get("/book", (req, res) => {
  res.send("book route");
});

// export a router
export default router;
