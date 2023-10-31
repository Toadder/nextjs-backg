import {
	ApolloClient,
	DefaultOptions,
	InMemoryCache,
	createHttpLink
} from '@apollo/client'

const defaultOptions: DefaultOptions = {
	watchQuery: {
		fetchPolicy: 'no-cache',
		errorPolicy: 'ignore'
	},
	query: {
		fetchPolicy: 'no-cache',
		errorPolicy: 'all'
	}
}

const cache = new InMemoryCache({
	resultCaching: false
})

const link = createHttpLink({
	uri: `${process.env.WORDPRESS_SITE_URL}/graphql`
})

const client = new ApolloClient({
	link,
	cache,
	defaultOptions
})

export default client
