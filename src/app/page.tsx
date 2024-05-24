'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PagesDropdown from '@/components/custom/PagesDropdown';
import PostButton from '@/components/custom/PostButton';
import SocialsToggler from '@/components/custom/SocialsToggler';

interface Page {
  id: string;
  name: string;
  media: Array<string> | null;
}

export default function Page() {
  const [pages, setPages] = useState<Page[]>([]);
  const [selectedPageId, setSelectedPageId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPages() {
      try {
        const response = await axios.get('/api/queryNotionDatabase');
        const pagesData = response.data.results.map((page: any) => ({
          id: page.id,
          name: page.properties.Name.title[0].plain_text
        }));
        setPages(pagesData);
      } catch (error) {
        console.error('Error fetching pages:', error);
      }
    }

    fetchPages();
  }, []);

  return (
    <>
    <main className="text-center px-[200px] text-white">
        <div className="font-bold text-4xl pt-[100px]">
          Notion to Social Media
        </div>
        <div className="text-xl pt-4">
          Ever feeling tired managing multiple social media accounts that posts the same content? Use this open-sourced project to automate the process with Notion!
        </div>
        <div className="py-6 flex items-center justify-center">
            <PagesDropdown pages={pages} onPageSelect={setSelectedPageId} /> 
        </div>
        <div className="flex justify-center">
          <SocialsToggler />
        </div>
        <div className="py-4">
            <PostButton selectedPageId={selectedPageId} />
        </div>
    </main>
    </>
  );
}