// PagesDropdown.tsx
"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Page {
  id: string;
  name: string;
}

interface PagesDropdownProps {
  pages: Page[];
  onPageSelect: (pageId: string) => void;
}

export default function PagesDropdown({ pages, onPageSelect }: PagesDropdownProps) {
  return (
    <Select onValueChange={onPageSelect}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a page" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {pages.map(page => (
            <SelectItem key={page.id} value={page.id}>
              {page.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
