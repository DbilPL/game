module.exports = class Settings {
	constructor({ lang, isVolumeTurnedOn }) {
		this.lang = lang;
		this.isVolumeTurnedOn = isVolumeTurnedOn;
	}

	static fromJson(json) {
		return Settings({
			lang: json['lang'],
			isVolumeTurnedOn: json['is_volume_turned_on'],
		});
	}

	toJson() {
		return {
			'lang': this.lang,
			'is_volume_turned_on': this.isVolumeTurnedOn,
		};
	}
};