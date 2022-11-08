const app = require("./app");
const port = process.env.PORT || "3000";

app.listen(port);

app.on("error", onerror);
app.on("listen", ononline);


