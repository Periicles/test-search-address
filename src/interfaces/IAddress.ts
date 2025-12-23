export interface IAddress {
    id: string;           // Identifiant unique de l'adresse
    label: string;        // Libellé complet (ex: "8 Boulevard du Port 80000 Amiens")
    city: string;         // Ville
    postcode: string;     // Code postal
    name: string;         // Nom de la voie ou du lieu-dit
    context: string;      // Contexte (ex: "80, Somme, Hauts-de-France")
    housenumber?: string; // Numéro de voie
    street?: string;      // Nom de la rue (si différent de name)
    type?: 'housenumber' | 'street' | 'locality' | 'municipality';
}

export interface IResultListProps {
    addresses: Array<IAddress>;
}

export interface ISearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}