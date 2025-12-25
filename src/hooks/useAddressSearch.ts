import { useState } from 'react';
import type { IAddress } from '../interfaces/IAddress';
import type { TApiResponse } from '../types/TApiResponse';
import type { TSearchResults } from '../types/TSearchResults';

export default function useAddressSearch(): TSearchResults {
    const [addresses, setAddresses] = useState<Array<IAddress>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    /**
     * Fonction pour lancer la recherche
     * @param query La chaîne de caractères à chercher (ex: "Bordeaux")
     */
    const searchAddresses = async (query: string) => {
        setLoading(true);
        setError(null);
        setAddresses([]);

        try {
            if (!query || query.trim().length < 3) {
                throw new Error("La recherche doit contenir au moins 3 caractères.");
            }

            const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(query)}`);

            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }

            const data: TApiResponse = await response.json();
            const formattedAddresses: Array<IAddress> = data.features.map((feature) => feature.properties);
            const seen = new Set<string>();
            const uniqueAddresses = formattedAddresses.filter((addr) => {
                if (seen.has(addr.id)) {
                    return false;
                }
                seen.add(addr.id);
                return true;
            });

            setAddresses(uniqueAddresses);

        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Une erreur inconnue est survenue.");
            }
        } finally {
            setLoading(false);
        }
    };

    return {
        addresses,
        loading,
        error,
        searchAddresses
    } as TSearchResults;
};
