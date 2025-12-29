import parseContext from '../utils/parseContext';
import type { IResultListProps } from '../interfaces/IAddress';

/**
 * The ResultList component renders address search results with contextual
 * details.
 *
 * @param addresses - The list of addresses to display.
 * @return A JSX element displaying the list of addresses.
 */
export default function ResultList({ addresses }: IResultListProps) {
    if (addresses.length === 0) {
        return null;
    }

    return (
        <div className="w-full">
            <h2 className="text-xl font-bold mb-3 text-center">
                {addresses.length} Résultat{addresses.length > 1 ? 's' : ''} trouvé{addresses.length > 1 ? 's' : ''}
            </h2>
            <div className="grid gap-3">
                {addresses.map((addr) => (
                    <div
                        key={addr.id}
                        className="
                        card
                        bg-base-100
                        shadow-lg
                        hover:shadow-xl
                        border
                        border-base-300
                        hover:border-primary
                        transition-all
                      "
                    >
                        <div className="card-body py-3 px-4">
                            <div className="space-y-2 text-sm">
                                {addr.housenumber && (
                                    <div><span className="font-semibold">Numéro de voie :</span> {addr.housenumber}</div>
                                )}
                                <div><span className="font-semibold">Nom :</span> {addr.name}</div>
                                <div><span className="font-semibold">Code postal :</span> {addr.postcode}</div>
                                <div><span className="font-semibold">Ville :</span> {addr.city}</div>
                                {(() => {
                                    const { depCode, depName, region } = parseContext(addr.context);
                                    return (
                                        <>
                                            {depName && (
                                                <div><span className="font-semibold">Département :</span> {depCode}, {depName}</div>
                                            )}
                                            {region && (
                                                <div><span className="font-semibold">Région :</span> {region}</div>
                                            )}
                                        </>
                                    );
                                })()}
                            </div>
                            <div><span className="font-semibold">Libellé :</span> {addr.label}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
