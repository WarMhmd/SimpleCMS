import Checkbox from './Checkbox.svelte';

import { type Params, GuiSchema, GraphqlSchema } from './types';
import { defaultContentLanguage } from '@src/stores/store';

// typesafe-i18n
import { get } from 'svelte/store';
import LL from '@src/i18n/i18n-svelte.js';

const widget = ({
	// Accept parameters from collection
	label,
	db_fieldName,
	display,
	translated = false, // default no translation
	icon,

	// extras
	color,
	width,
	required
}: Params) => {
	if (!display) {
		display = async ({
			data,
			collection,
			field,
			entry,
			contentLanguage
		}: {
			data: any;
			collection: any;
			field: any;
			entry: any;
			contentLanguage: string;
		}) => {
			// console.log(data);
			data = data ? data : {}; // data can only be undefined if entry exists in db but this field was not set.
			return translated
				? data[contentLanguage] || get(LL).ENTRYLIST_Untranslated()
				: data[defaultContentLanguage] || get(LL).ENTRYLIST_Untranslated();
		};
		display.default = true;
	}

	const widget: { type: any; key: 'Checkbox' } = { type: Checkbox, key: 'Checkbox' };

	const field = {
		display,
		label,
		db_fieldName,
		icon,
		translated,

		// extras
		color,
		width,
		required
	};

	return { ...field, widget };
};

widget.GuiSchema = GuiSchema;
widget.GraphqlSchema = GraphqlSchema;

export interface FieldType extends ReturnType<typeof widget> {}
export default widget;
