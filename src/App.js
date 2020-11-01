import './App.css';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client'; 

const client = new ApolloClient({
  uri: 'http://localhost:5000',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
       Whats good world?!
    </div>
    </ApolloProvider>

  );
}

export default App;
