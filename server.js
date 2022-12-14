const app = require("./app");
const { db, Page, User } = require("./models");
const http = require("http");
const server = http.createServer(app);

const PORT = 3000;

const init = async () => {
  //   await Page.sync();
  //   await User.sync();
  await db.sync();

  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
};

init();
