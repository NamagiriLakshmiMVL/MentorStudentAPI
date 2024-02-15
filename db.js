const { MongoClient } = require("mongodb");

module.exports = {
  current: {},
  async connect() {
    try {
      const resp = await MongoClient.connect(process.env.MONGO_URL);
      this.current = resp.db("mentor");
      //   console.log(this.current);
    } catch (err) {
      console.log(err);
    }
  },
};
