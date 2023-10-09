const availableExtensions: string[] = ['pdf', 'docx', 'png', 'jpeg', 'jpg'];

export const validateFileSize = (files: FileList): boolean | string => {
	if(!files?.length) return true;
	return files[0].size <= 5_242_880 || "Превышен максимальный размер файла (5 МБ).";
};

export const validateFileExtension = (files: FileList): boolean | string => {
	if(!files?.length) return true;
	const extension: string = files[0].name.split('.').at(-1) || '';
	return availableExtensions.includes(extension) || 'Неподдерживаемый тип файла.';
};
