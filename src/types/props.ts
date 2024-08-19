export type MeasurementUnits = 'em' | 'rem' | '%' | 'px';

export type PropsStringValue = `${number}${MeasurementUnits}`;

export type Measurement = PropsStringValue | number;

export type Mode = 'dark' | 'light';