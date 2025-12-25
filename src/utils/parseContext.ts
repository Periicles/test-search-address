import type { ParsedContext } from '../types/TApiResponse';

/**
 * Parse BAN `context` string like "95, Val-d'Oise, Île-de-France"
 * into department code, department name, and region name.
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
