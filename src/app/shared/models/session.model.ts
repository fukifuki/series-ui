export class Session {

	id: number;
	accessToken: string;


	constructor(values: Object = {}) {
		Object.assign(this, values)
	}


	get _id() {
		return this.id;
	}

	set _id(id: number) {
		this.id = id;
	}

	get _accessToken() {
		return this.accessToken;
	}

	set _accessToken(accessToken: string) {
		this.accessToken = accessToken;
	}

}
