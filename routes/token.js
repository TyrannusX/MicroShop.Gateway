const express = require("express");
const router = express.Router();
const request = require("request")

router.post("/", (req, res, next) => {
   request({
    uri: "http://localhost:9011/oauth2/token",
    formData: {
        grant_type: "authorization_code",
        code: req["code"],
        code_verifier: req["code_verifier"]
    }
   }).pipe(fusion_auth_response =>{
    console.log(fusion_auth_response);
   });

   res.send("good job");
});

module.exports = router;