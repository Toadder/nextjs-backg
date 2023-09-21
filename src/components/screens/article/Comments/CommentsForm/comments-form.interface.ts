export enum SubmitStatus {
	Unsent, Pending, Submit
}

export enum MessageBackground {
	Green = "bg-[#219C90]",
	Red = "bg-[#D83F31]"
}

export interface ICommentsInput {
	name: string;
	email: string;
	content: string;
}

export interface ICommentsBody extends ICommentsInput {
	postId: number;
}
