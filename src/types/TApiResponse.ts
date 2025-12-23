export type TApiResponse = {
    type: 'FeatureCollection';
    version: string;
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