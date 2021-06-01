exports.handler = (event, context) => {
  if (context.clientContext.user) {
    return {
      body: JSON.stringify({
        text: "Netlify's Identity service is a plug-and-play microservice for handling site functionalities like signups, logins, password recovery, user metadata, and roles. You can use it from single page apps instead of rolling your own, and integrate with any service that understands JSON Web Tokens (JWTs).",
      }),
    }
  }
  return {
    body: JSON.stringify({ text: 'Sign In to View this Page content' }),
  }
}
