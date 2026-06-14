import { CaseSummary, EvidenceItem, Suspect } from '../types';

export const mockCases: CaseSummary[] = [
  {
    id: 'case-01',
    title: 'Midnight Gallery Heist',
    theme: 'High Society',
    difficulty: 'Medium',
    description: 'A stolen artifact, a shattered alibi, and a suspect with secrets.',
    solved: false,
    date: '2026-06-08'
  },
  {
    id: 'case-02',
    title: 'Harbor Murder Mystery',
    theme: 'Shipyard',
    difficulty: 'Hard',
    description: 'A body found at dawn, rival crews, and missing evidence.',
    solved: true,
    date: '2026-05-30'
  },
  {
    id: 'case-03',
    title: 'Library of Lies',
    theme: 'Academy',
    difficulty: 'Easy',
    description: 'A rare manuscript, an alibi, and a clue hidden in plain sight.',
    solved: false,
    date: '2026-06-11'
  }
];

export const mockSuspects: Suspect[] = [
  { id: 'suspect-01', name: 'Evelyn Cross', role: 'Gallery Director', suspicion: 78, status: 'Evasive' },
  { id: 'suspect-02', name: 'Jonas Pike', role: 'Port Foreman', suspicion: 62, status: 'Nervous' },
  { id: 'suspect-03', name: 'Maya Slate', role: 'Archivist', suspicion: 51, status: 'Calm' },
  { id: 'suspect-04', name: 'Leo Vaughn', role: 'Security Chief', suspicion: 83, status: 'Defensive' }
];

export const mockEvidence: EvidenceItem[] = [
  { id: 'evidence-01', title: 'Fingerprint Report', category: 'Forensics', summary: 'Partial thumbprint found inside the crime scene.' },
  { id: 'evidence-02', title: 'Security Log', category: 'Physical', summary: 'A disabled camera and a gap in surveillance.' },
  { id: 'evidence-03', title: 'Witness Statement', category: 'Witness', summary: 'A statement from the receptionist on the night shift.' }
];
