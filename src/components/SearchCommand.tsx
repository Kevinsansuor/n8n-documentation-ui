import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { File } from 'lucide-react';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { searchIndex, SearchResult } from '@/lib/searchIndex';

interface SearchCommandProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SearchCommand = ({ open, onOpenChange }: SearchCommandProps) => {
  const navigate = useNavigate();

  const handleSelect = (path: string) => {
    onOpenChange(false);
    navigate(path);
  };

  React.useEffect(() => {
    if (open) {
      // Reset scroll position of the list
    }
  }, [open]);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Buscar en la documentación..." />
      <CommandList>
        <CommandEmpty>No se encontraron resultados.</CommandEmpty>
        <CommandGroup heading="Artículos">
          {searchIndex.map((item: SearchResult) => (
            <CommandItem
              key={item.path}
              value={item.title + " " + item.category + " " + item.content}
              onSelect={() => handleSelect(item.path)}
            >
              <File className="mr-2 h-4 w-4" />
              <span>{item.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};