export const buildStringFromTokens = tokens => template => {
  const reducer = (
    template,
    token) => (template.replace(`:${token}`, tokens[token]))

  return Object.keys(tokens).reduce(reducer, template)
}

const buildMessageText = ({ text, user }) => {
  if (!user) return text
  return buildStringFromTokens(user)(text)
}


export default buildMessageText
