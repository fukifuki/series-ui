export class Auth {
	
	_userId: number;
	_token: string;

	
	constructor(values: Object = {}) {
		Object.assign(this, values);
	}

	get userId() {
		return this._userId;
	}

	set userId(userId: number) {
		this._userId = userId;
	}

	get token() {
		return this._token;
	}

	set token(token: string) {
		this._token = token;
	}
}
