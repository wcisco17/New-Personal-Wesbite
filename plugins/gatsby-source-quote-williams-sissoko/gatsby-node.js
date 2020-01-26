const fetch = require("node-fetch")

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  delete configOptions.plugins

  const processQuote = quote => {
    const nodeId = createNodeId(`quote-${quote.id}`)
    const nodeContent = JSON.stringify(quote)
    const nodeData = Object.assign({}, quote, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `RandomQuoteGenerator`,
        content: nodeContent,
        contentDigest: createContentDigest(quote),
      },
    })
    return nodeData
  }

  const apiUrl = "https://programming-quotes-api.herokuapp.com/quotes/random"
  return fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      const quoteData = processQuote(data)
      createNode(quoteData)
    })
}
