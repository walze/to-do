
import React from 'react'
import { render } from 'react-dom'

import { ApolloProvider, useQuery } from '@apollo/react-hooks'
import ApolloClient, { gql } from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://todo.walze.usw1.kubesail.org'
})

const EXCHANGE_RATES = gql`
  {
    hello {
      id
      name
    }
  }
`

const Hello = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(loading, error, data)

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ))
}

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>

      <Hello />
    </div>
  </ApolloProvider>
)

render(
  <App />,
  document.querySelector('#app')
)
