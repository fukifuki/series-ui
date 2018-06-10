export class Series {
	
	id: number;
	title: string;
	description: string;
	yearStarted: number;
	genreName: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}

}
