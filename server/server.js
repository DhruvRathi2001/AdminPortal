require("dotenv").config(); //This should be at the top of the main file.
const express = require("express");
const app = express();
const connectDb = require("./utils/db");
const authRoute = require("./router/auth-router.js");
const contactRoute = require("./router/contact-router.js")
const errorMiddleware = require("./middlewares/error-middleware.js");

//Now this is a middleware that is to be added  taki json data k len-den mai koi dikkat na hooo
//ALSO make sure that this line of code is added before all routes , so that it is applicable to all routes...
app.use(express.json());

//To use router in our main app, "mount" the router at a specific URL Prefix.......
app.use("/api/auth", authRoute); //middleware
app.use("/api/form", contactRoute); //middleware

app.use(errorMiddleware); //Connection ke just upar..
//This is used ki khi bhi  "next(error)" aaega, toh error middleware pe direct ho jaaega

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Chal gya at port ${PORT}`);
  });
});
