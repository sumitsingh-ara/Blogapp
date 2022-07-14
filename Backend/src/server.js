const app = require("./index");
const connect = require("./configs/db");

const port = 7448;

app.listen(port, async () => {
  try {
    await connect();
    console.log(`Server is running on ${port}`);
  } catch (err) {
    console.log(err);
  }
});
