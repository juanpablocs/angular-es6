import Person from '../model/Person';

export default class PersonService {

	constructor($q) {
		this._$q = $q;
	}

	getPerson() {
		return this._$q.when(new Person());
	}
}

PersonService.$inject = ['$q'];