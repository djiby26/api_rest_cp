import "./env.js";
// import connect from "mongoose";
import mongoose from "mongoose";

export default mongoose.connect(
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Db ok")
);

mongoose.connection.on("error", (err) => {
  console.log(err);
});
