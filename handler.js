function handler(message, output) {
  var request = {
    url: `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${encodeURIComponent(message.resourceParams.handle)}`,
    headers: {
      Authorization: `Bearer ${StackeryContext.deployment.config.bearerToken}`
    }
  }

  return output(request, {waitForResponses: true})
    .then((responses) => {
      return {
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        body: responses[0].body
      }
    })
}
