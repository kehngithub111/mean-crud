const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8002;

const mongoose = require("mongoose");
const routes = require("./routes/routes");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("HELLO SERVERSIDE MEAN");
});

app.use(routes);

const mongoDB = async () => {
  await mongoose.connect(
    "mongodb+srv://kehnbenliro1001:GwapoKehn%40123@mean-crud.wnkkd80.mongodb.net/mean-crud"
  );
};

mongoDB()
  .then(() => console.log("CONNECTED TO DATABASE"))
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Server Listening on PORT: ${PORT}`);
});
