export class SearchDiscoverBuilder {
	private town: string;
	private typeShift: string;
	private meta: string;

	withTown(town: string) {
		this.town = town;
		return this;
	}

	withTypeShift(typeShift: string) {
		this.typeShift = typeShift;
		return this;
	}

	withMeta(meta: string) {
		this.meta = meta;
		return this;
	}

	build() {
		const actionPhrase = `Que faire ce ${this.typeShift}`;
		const locationPhrase = `Que faire à ${this.town}`;

		let phrase = locationPhrase;

		if (this.town && this.typeShift) {
			phrase = `${actionPhrase} à ${this.town}`;
		} else if (this.town) {
			phrase = locationPhrase;
		}

		return phrase;
	}
}
