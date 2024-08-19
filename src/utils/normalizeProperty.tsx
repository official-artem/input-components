import { Measurement } from '../types/props';

export function normalizeProperty(propertyValue: Measurement | undefined): string | null {
	if (typeof propertyValue === 'number') {
		return `${propertyValue}px`;
	}

	if (propertyValue === undefined) return null;

	return propertyValue;
}