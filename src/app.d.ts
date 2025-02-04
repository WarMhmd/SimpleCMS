// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	/// <reference types="lucia" />
	declare namespace Lucia {
		type Auth = import('@src/routes/api/db.ts').Auth; // no change
		type DatabaseUserAttributes = {
			// username: string;
		};
		type DatabaseSessionAttributes = {}; // new
	}

	/// <reference path="./types/**/*.d.ts" />
	declare type Item = import('svelte-dnd-action').Item;
	declare type DndEvent<ItemType = Item> = import('svelte-dnd-action').DndEvent<ItemType>;
	declare namespace svelteHTML {
		interface HTMLAttributes<T> {
			'on:consider'?: (event: CustomEvent<DndEvent<ItemType>> & { target: EventTarget & T }) => void;
			'on:finalize'?: (event: CustomEvent<DndEvent<ItemType>> & { target: EventTarget & T }) => void;
		}
	}

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	type tokenTypes = 'register' | 'resetPassword' | 'emailVerification';

	type Result = {
		errors: string[];
		success: boolean;
		message: string;
		data: any;
	};

	type DISPLAY = (({ data: any, collection: any, field: any, entry: any, contentLanguage: string }) => Promise<any>) & { default?: boolean };
	type GraphqlSchema = ({ field, label, collection }) => {
		typeName: string | null;
		graphql: string;
		resolver?: { [key: string]: any };
	};
}

// THIS IS IMPORTANT!!!
export {};
