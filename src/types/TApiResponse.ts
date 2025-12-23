import type { IAddress } from '../interfaces/IAddress';

export type TFeature = {
    type: 'Feature';
    properties: IAddress;
};

export type TApiResponse = {
    type: 'FeatureCollection';
    version: string;
    features: Array<TFeature>;
    attribution: string;
    licence: string;
    query?: string;
    limit?: number;
};

export type ParsedContext = {
    depCode?: string;
    depName?: string;
    region?: string;
};