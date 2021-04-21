// const { smsValidation } = require('../validations');
const axios = require('axios');
const sendSMS = (mobileNo = '9145365292', message = 'Test Message') => {
  // Lets Validate Data
  //   const { error } = smsValidation({ mobileNo, message });
  //   if (error) return res.status(400).send(error.details[0].message);
  // validation should be at operation point

  const smsUrl = `http://103.129.97.36/index.php/smsapi/httpapi/?uname=vedanand1&password=vedanand1&sender=ANANDV&receiver=${mobileNo}&route=TA&msgtype=1&sms=${message}`;
  console.log(smsUrl);
  axios
    .get(smsUrl)
    .then(response => {
      console.log(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

module.exports.sendSMS = sendSMS;
