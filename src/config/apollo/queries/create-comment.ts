import { gql } from '@apollo/client'

export const CREATE_COMMENT = gql`
	mutation MyMutation(
		$author: String!, 
		$authorEmail: String!,
		$commentOn: Int!, 
		$content: String!) {
		createComment(
			input: {author: $author, authorEmail: $authorEmail, commentOn: $commentOn, content: $content}
		) {
			success
		}
	}
`;