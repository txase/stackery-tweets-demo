'use strict'

const Twitter = require('twitter'),
      secrets = { 
        consumer_key: StackeryContext.deployment.config.consumerKey,
        consumer_secret: StackeryContext.deployment.config.consumerSecret,
        bearer_token: StackeryContext.deployment.config.bearerToken
      },  
      client = new Twitter(secrets)

module.exports = function handler(message) {
  return new Promise((resolve, reject) => {
    client.get('statuses/user_timeline',
               {screen_name: 'txase'},
               (err, tweets) => {
      if (err) {
        reject(err)
        return
      }

      let response = {
            headers: {
              'Access-Control-Allow-Origin': '*'
            },
            body: tweets
          }

      resolve(response)
    })  
  })  
}
