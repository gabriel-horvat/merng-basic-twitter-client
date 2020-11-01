import React from 'react'
import App from './App'

import { ApolloClient, InMemoryCache } from '@apollo/client'
import { HttpLink } from 'apollo-link-http'
import {ApolloProvider} from '@apollo/client'

const httpLink = HttpLink({
    uri: 'http://localhost:5000'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

export default(
    <ApolloProvider client = {client}> 
<App />
    </ApolloProvider>
)