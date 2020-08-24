const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const keys = require("./config/keys");
require("./models/User"); // use the model first
require("./models/Post");
require("./models/Categories");
require("./models/Tag");
require("./models/ContactInquiry");

require("./services/passport");
require("./services/pusher");
//import the services after model

mongoose.connect(keys.mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

const app = express();

app.use(fileUpload());
// Parse the request from the client
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/postRoutes/createPost")(app);
require("./routes/postRoutes/listPost")(app);
require("./routes/postRoutes/viewPost")(app);
require("./routes/postRoutes/deletePost")(app);

require("./routes/categoryRoutes/createCategory")(app);
require("./routes/categoryRoutes/getCategory")(app);

require("./routes/tagsRoute/createTags")(app);

require("./routes/profits/postPoints")(app);
require("./routes/siderInfoRoutes/siderList")(app);

require("./routes/uploadTest")(app);

require("./routes/userProfile/userPosts")(app);
require("./routes/userProfile/userScores")(app);
require("./routes/home/popularOfTheDay")(app);

require("./routes/contact/contactInquiry")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve production assest like main.js or main.css file
  app.use(express.static("client/build"));
  // Express will serve index.html if it doesnt recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
