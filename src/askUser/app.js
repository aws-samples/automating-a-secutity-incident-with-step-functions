/*  
SPDX-FileCopyrightText: 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: MIT-0 
*/
var message = {};
const AWS = require('aws-sdk')
var sns = new AWS.SNS();

exports.handler = async (event,context) => {


    var params = {
                    TopicArn: process.env.Topic,
                    Message: 'A restricted Policy change has been detected Approve:'+process.env.APIAllowEndpoint+'?token='+JSON.stringify(event.token) +' Or Deny: '+process.env.APIDenyEndpoint+'?token='+JSON.stringify(event.token) 
                }
    try {
        const res = await sns.publish(params).promise()
    }catch(err){
        console.error(err)
    }         

return event;

};


