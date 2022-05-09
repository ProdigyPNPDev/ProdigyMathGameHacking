import { Game } from "./game";
import { Player } from "./player";
import { DebugMisc } from "./debugMisc";
import { TO_DO } from "./util";
import { Open } from "./open";
import { GameContainer } from "./gameContainer";

export declare interface Prodigy {
	version: string;
	game: Game;
	// debugMisc: DebugMisc;
	world: TO_DO;
	giftBoxController: TO_DO;
	open: Open;
	// debugQuests: TO_DO;
	user: TO_DO;
	pvpNetworkHandler: TO_DO;
	// network: TO_DO;
	classModeController: TO_DO;
	gameContainer: GameContainer;
	dialogue: TO_DO;
	notifications: TO_DO;
	battle: TO_DO;
}