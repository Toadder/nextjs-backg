interface IObject {
	[key: string]: any;
}

export const parseToFormData = (obj: IObject): FormData => {
	const formData = new FormData();

	Object.entries(obj).forEach(([key, value]) => {
		formData.append(key, value);
	})

	return formData;
};