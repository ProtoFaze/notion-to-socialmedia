import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@notionhq/client';
import dotenv from 'dotenv';

dotenv.config();

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const pageId = process.env.NOTION_PAGE_ID;

export async function GET(req: NextRequest) {
    try {
        if (!pageId) {
            return NextResponse.json({ error: 'Page ID was not passed through the selection' }, { status: 500 });
        }
        
        // Fetch the blocks (content) of the specified page from Notion
        const blocksResponse = await notion.blocks.children.list({
            block_id: pageId,
        });

        // Extract the title and description from the first two blocks
        const blocks = blocksResponse.results;
        if (blocks.length < 2) {
            return NextResponse.json({ error: 'Not enough blocks in the page to extract title and description' }, { status: 400 });
        }

        const titleBlock = blocks[0] as any;
        const descriptionBlock = blocks[1] as any;

        const post = {
            title: titleBlock.paragraph.rich_text.map((rt: { plain_text: any; }) => rt.plain_text).join(''),
            description: descriptionBlock.paragraph.rich_text.map((rt: { plain_text: any; }) => rt.plain_text).join('')
        };

        // Return the extracted data
        return NextResponse.json(post);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};