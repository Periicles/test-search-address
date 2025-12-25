import type { IAddress } from "../interfaces/IAddress";

export type TSearchResults = {
    addresses: Array<IAddress>;
    loading: boolean;
    error: string | null;
    searchAddresses: (query: string) => Promise<void>;
}
