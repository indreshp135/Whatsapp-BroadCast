const { phones, instanceID, text, token } = require("./config");
const request = require("request");

const url = `https://api.chat-api.com/instance${instanceID}/message?token=${token}`;

phones.forEach((phone) => {
  var data = {
    phone: phone,
    body: text,
  };
  request(
    {
      url: url,
      method: "POST",
      json: data,
    },
    (err, _res, body) => {
      if (err) console.error(err);
      else console.log(body);
    }
  );
});
