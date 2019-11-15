'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Portal Ordyx Example!!!!!! ',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.app = async(event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'App Function (Second Function)',
      input: event,
    }),
  };
};
