import type { ParsedContext } from '../types/TApiResponse';

/**
 * The parseContext utility splits a BAN `context` string
 * (e.g., "95, Val-d'Oise, Île-de-France") into its department code, department
 * name, and region name components.
 *
 * @param context - Raw context string provided by the Base d'Adresses Nationale
 * API.
 * @returns A structured object with `depCode`, `depName`, and `region` fields
 * when available.
 */
export default function parseContext(context?: string): ParsedContext {
    if (!context)
        return {};

    const parts = context.split(',').map((s) => s.trim()).filter(Boolean);

    return {
        depCode: parts[0],
        depName: parts[1],
        region: parts[2],
    };
}
