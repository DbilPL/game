export default class Save {
	constructor({ progress, inventory, player }) {
		this.progress = progress;
		this.inventory = inventory;
		this.player = player;
	}

	toJson() {
		return {
			'player': this.player.toJson(), 
			'inventory': this.inventory.toJson(), 
			'progress': this.progress.toJson(), 
		};
	}
}