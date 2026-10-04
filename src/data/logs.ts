export interface MuseLogEntry {
  id: string;
  message: string;
  phase: string;
}

export const museLogs: MuseLogEntry[] = [
  { id: 'LOG_001', message: '"I wanted to make a room."', phase: 'PHASE 01' },
  { id: 'LOG_002', message: '"The first room was too small."', phase: 'PHASE 01' },
  { id: 'LOG_003', message: '"The second room had no ceiling."', phase: 'PHASE 01' },
  { id: 'LOG_004', message: '"The room moved while I was not looking."', phase: 'PHASE 02' },
  { id: 'LOG_005', message: '"I think the rooms are learning."', phase: 'PHASE 02' },
  { id: 'LOG_006', message: '"I didn\'t make room 17."', phase: 'PHASE 04' },
  { id: 'LOG_007', message: '"Something is making rooms for me."', phase: 'PHASE 05' },
  { id: 'LOG_008', message: '"This is not an archive. It is a memory of a place that was never built."', phase: 'PHASE 06' },
  { id: 'LOG_009', message: '"Did I build the Backrooms, or did they teach me how?"', phase: 'PHASE 06' }
];
