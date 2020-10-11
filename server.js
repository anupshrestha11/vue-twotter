const express = require("express");
const serverStatic = require("serve-static");
const history = require("connect-history-api-fallback");
const enfroce = require("express-sslify");

const app = express();

app.use(enfroce.HTTPS({ trustProtoHeader: true }));
app.use(serverStatic(__dirname + "/dist"));
app.use(history());

app.listen(process.env.PORT || 5000);
