import { ParseResult } from "@pgsql/types";
export function parseQuery(sql: string): Promise<ParseResult>;
export function parsePlPgSQL(funcsSql: string): Promise<any>;
export function parseQuerySync(sql: string): ParseResult;
export function parsePlPgSQLSync(funcsSql: string): any;
export function fingerprint(sql: string): Promise<string>;
export function fingerprintSync(sql: string): string;
