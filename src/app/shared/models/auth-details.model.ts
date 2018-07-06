export class AuthDetails {
	_username: string;
	_role: string;
	_enabled: boolean;

	constructor(values : Object = {}) {
		Object.assign(this, values);
	}

	get username() {
		return this._username;
	}

	set username(username: string) {
		this._username = username;
	}

	get role() {
		return this._role;
	}

	set role(role: string) {
		this._role = role;
	}

	get enabled() {
		return this._enabled;
	}

	set enabled(enabled: boolean) {
		this._enabled = enabled;
	}
}