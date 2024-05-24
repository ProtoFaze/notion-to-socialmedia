// pages/api/queryNotionDatabase.ts
import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@notionhq/client';
import dotenv from 'dotenv';

dotenv.config();

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID;

export async function GET(req: NextRequest) {
    try {
        if (!databaseId) {
            return NextResponse.json({ error: 'NOTION_DATABASE_ID is not set in environment variables' }, { status: 500 });
        }
        
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: 'Status',
                status: {
                    equals: 'Ready-to-Post',
                },
            },
        });

        return NextResponse.json({ results: response.results });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
