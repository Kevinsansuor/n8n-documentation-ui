import { useSearchParams, Link } from 'react-router-dom';
import { DocsLayout } from '@/components/DocsLayout';
import { searchIndex, SearchResult } from '@/lib/searchIndex';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      const filteredResults = searchIndex.filter(
        (item) =>
          item.title.toLowerCase().includes(lowerCaseQuery) ||
          item.content.toLowerCase().includes(lowerCaseQuery)
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query]);

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
      return <span>{text}</span>;
    }
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <mark key={i} className="bg-primary/20 text-primary-foreground rounded px-1">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <DocsLayout>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Search Results for "{query}"
        </h1>

        {results.length > 0 ? (
          <div className="space-y-6">
            {results.map((result) => (
              <Link to={result.path} key={result.path} className="block">
                <Card className="hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {highlightText(result.title, query)}
                    </CardTitle>
                    <Badge variant="secondary">{result.category}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">
                      {highlightText(result.content.trim().substring(0, 300) + '...', query)}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No results found for "{query}". Try another search.
            </p>
          </div>
        )}
      </div>
    </DocsLayout>
  );
};

export default SearchResultsPage;