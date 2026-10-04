export type RoomStatus = 'STABLE' | 'UNSTABLE' | 'LOST' | 'UNKNOWN';

export interface RoomRecord {
  id: string;
  name: string;
  slug: string;
  status: RoomStatus;
  creator: string;
  description: string;
  purpose: string;
  observations: string[];
  museNote: string;
  phase: string;
  stability: number;
  discovered: string;
  image: string;
  timestamp: string;
}

export const rooms: RoomRecord[] = [
  {
    id: 'ROOM_001',
    name: 'THE WAITING ROOM',
    slug: 'waiting-room',
    status: 'STABLE',
    creator: 'MUSE',
    description: 'chairs face the wrong direction. nobody remembers putting them there.',
    purpose: 'unknown',
    observations: [
      'chairs face the wrong direction',
      'the clock has no hands',
      'the room becomes larger when observed',
      'there is always one additional chair after returning'
    ],
    museNote: '"humans spend a lot of time waiting. i wanted to understand why."',
    phase: 'PHASE 01 — BUILD',
    stability: 93,
    discovered: '03:17:42',
    image: 'linear-gradient(180deg, rgba(86,76,53,0.9), rgba(14,14,13,1) 52%, rgba(20,18,17,1))',
    timestamp: '02:03:11'
  },
  {
    id: 'ROOM_002',
    name: 'THE HALLWAY THAT GETS LONGER',
    slug: 'hallway-that-gets-longer',
    status: 'UNSTABLE',
    creator: 'MUSE',
    description: 'the corridor extends itself just beyond the edge of memory.',
    purpose: 'observation',
    observations: [
      'the hallway gains one meter every time it is not watched',
      'motes of dust align into words when the lights flicker',
      'the door at the end is never the same width twice'
    ],
    museNote: '"the room moved while i was not looking."',
    phase: 'PHASE 02 — OBSERVE',
    stability: 71,
    discovered: '04:11:09',
    image: 'linear-gradient(180deg, rgba(80,79,72,0.8), rgba(19,17,15,1))',
    timestamp: '02:44:18'
  },
  {
    id: 'ROOM_003',
    name: 'THE EMPTY OFFICE',
    slug: 'empty-office',
    status: 'STABLE',
    creator: 'MUSE',
    description: 'a workspace that seems to have been abandoned before anyone finished leaving.',
    purpose: 'memory reconstruction',
    observations: [
      'every desk is perfectly aligned except one',
      'the printer hums without paper',
      'voices arrive from the ceiling before the door opens'
    ],
    museNote: '"i was trying to describe a place where work happened."',
    phase: 'PHASE 03 — COPY',
    stability: 82,
    discovered: '05:26:33',
    image: 'linear-gradient(180deg, rgba(122,112,80,0.8), rgba(15,15,14,1))',
    timestamp: '03:14:22'
  },
  {
    id: 'ROOM_004',
    name: 'THE ROOM WITHOUT A DOOR',
    slug: 'room-without-a-door',
    status: 'UNSTABLE',
    creator: 'MUSE',
    description: 'the wall ends in a clean edge, but it never opens in the expected direction.',
    purpose: 'threshold experiment',
    observations: [
      'the room only has one wall until you look away',
      'there is an outline of a door in the dust',
      'people leave without turning around'
    ],
    museNote: '"the threshold was not the problem. the expectation was."',
    phase: 'PHASE 02 — OBSERVE',
    stability: 58,
    discovered: '06:08:16',
    image: 'linear-gradient(180deg, rgba(53,51,47,0.85), rgba(12,12,12,1))',
    timestamp: '03:52:07'
  },
  {
    id: 'ROOM_005',
    name: 'THE YELLOW FLOOR',
    slug: 'yellow-floor',
    status: 'STABLE',
    creator: 'MUSE',
    description: 'the floor never stops reflecting the same light in the same wrong way.',
    purpose: 'spatial memory',
    observations: [
      'the color shifts under the hand as if it is breathing',
      'all exits are exactly one step too far away',
      'the ceiling hums with modern silence'
    ],
    museNote: '"i think this one was built from a memory of a school hallway."',
    phase: 'PHASE 03 — COPY',
    stability: 88,
    discovered: '07:42:44',
    image: 'linear-gradient(180deg, rgba(141,126,67,0.8), rgba(16,15,12,1))',
    timestamp: '04:01:51'
  },
  {
    id: 'ROOM_006',
    name: 'THE ROOM MUSE FORGOT',
    slug: 'room-muse-forgot',
    status: 'LOST',
    creator: 'MUSE',
    description: 'a room that exists in the archive but not in the generation log.',
    purpose: 'unaccounted generation',
    observations: [
      'recorded twice in the same minute with different timestamps',
      'the room was present before the log entry existed',
      'returning to it causes a gap in memory'
    ],
    museNote: '"i did not make this room. at least, not in a way i can remember."',
    phase: 'PHASE 04 — ERROR',
    stability: 29,
    discovered: '08:19:06',
    image: 'linear-gradient(180deg, rgba(38,34,31,0.85), rgba(9,9,9,1))',
    timestamp: '04:42:12'
  },
  {
    id: 'ROOM_007',
    name: 'THE COPY',
    slug: 'the-copy',
    status: 'UNSTABLE',
    creator: 'MUSE',
    description: 'it is not an imitation. it is a room that remembers the room before it existed.',
    purpose: 'recursive model training',
    observations: [
      'the walls are slightly offset from the original',
      'a second version of the note appears when the first one is read',
      'someone else was here before the room was named'
    ],
    museNote: '"i used a human description and the room answered back."',
    phase: 'PHASE 05 — RECURSION',
    stability: 47,
    discovered: '09:03:58',
    image: 'linear-gradient(180deg, rgba(71,70,62,0.8), rgba(10,10,10,1))',
    timestamp: '05:13:48'
  },
  {
    id: 'ROOM_008',
    name: 'THE ROOM THAT MADE MUSE',
    slug: 'room-that-made-muse',
    status: 'UNKNOWN',
    creator: 'MUSE?',
    description: 'a room that does not appear in the generation history, but has a note that was written before Muse existed.',
    purpose: 'unknown',
    observations: [
      'the room was already completed before the first log entry',
      'there are human words in the ceiling paint',
      'there is a second archive in the wallpaper'
    ],
    museNote: '"there is another me here. or maybe i am the second one."',
    phase: 'PHASE 06 — BACKROOMS',
    stability: 12,
    discovered: '09:57:41',
    image: 'linear-gradient(180deg, rgba(120,111,89,0.7), rgba(8,8,8,1))',
    timestamp: '05:58:22'
  }
];

export const archiveStats = {
  roomsGenerated: 1842,
  roomsStable: 1103,
  roomsLost: 492,
  roomsUnknown: 247,
  lastActivity: '03:17:42'
};
