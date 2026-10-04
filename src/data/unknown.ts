export interface UnknownRecord {
  id: string;
  name: string;
  creator: string;
  status: string;
  description: string;
}

export const unknownRecords: UnknownRecord[] = [
  {
    id: 'UNKNOWN_???',
    name: '[REDACTED]',
    creator: 'MUSE?',
    status: 'UNRESOLVED',
    description: 'this room appears in the archive every 17 minutes.'
  },
  {
    id: 'UNKNOWN_010',
    name: '[UNNAMED]',
    creator: 'MUSE?',
    status: 'UNSTABLE',
    description: 'the room only exists after a failed search.'
  }
];
