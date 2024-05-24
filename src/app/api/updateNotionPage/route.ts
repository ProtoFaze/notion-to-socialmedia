import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@notionhq/client';
import dotenv from 'dotenv';

dotenv.config();

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function POST(req: NextRequest) {
    try {
        const { pageID } = await req.json();

        if (!pageID) {
            return NextResponse.json({ error: 'Page ID was not passed through the selection' }, { status: 400 });
        }

        const response = await notion.pages.update({
            page_id: pageID,
            properties: {
                Status: { status: { name: "Posted" } }
            }
        });

        return NextResponse.json(response);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
