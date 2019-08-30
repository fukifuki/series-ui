export class User {
	id: number;
	username: string;
	email: string;
	password: string;
	role: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
