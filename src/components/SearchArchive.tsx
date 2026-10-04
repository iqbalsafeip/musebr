import { useMemo, useState } from 'react';
import { rooms } from '../data/rooms';

export function SearchArchive() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) {
      return rooms.slice(0, 4);
    }

    const filtered = rooms.filter((room) => {
      const haystack = [
        room.id,
        room.name,
        room.status,
        room.creator,
        room.description,
        room.purpose,
        room.museNote,
        room.phase,
        room.observations.join(' ')
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(q);
    });

    if (filtered.length === 0) {
      return [
        {
          id: 'UNKNOWN_RECORD_000',
          name: 'NOT FOUND',
          status: 'NOT FOUND' as const,
          creator: 'UNKNOWN',
          description: 'you shouldn\'t be searching for this.',
          slug: 'unknown-record',
          purpose: 'unindexed',
          observations: ['query unresolved'],
          museNote: '"the archive does not remember this."',
          phase: 'VOID',
          stability: 0,
          discovered: '??:??:??',
          image: 'linear-gradient(180deg, rgba(21,19,17,1), rgba(8,9,9,1))',
          timestamp: '??:??:??'
        }
      ];
    }

    return filtered.slice(0, 6);
  }, [query]);

  return (
    <div className="search-panel">
      <div className="search-heading">SEARCH ARCHIVE</div>
      <div className="search-bar-wrap">
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="door, hallway, memory, creator..."
          aria-label="Search archive"
        />
      </div>

      <div className="search-results">
        <div className="search-results-label">RESULTS</div>
        {results.map((room) => (
          <a href={room.id === 'UNKNOWN_RECORD_000' ? '/unknown' : `/rooms/${room.slug}`} className="search-result" key={room.id}>
            <span className="search-id">{room.id}</span>
            <span className="search-name">{room.name}</span>
            <span className="search-status">STATUS: {room.status}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
