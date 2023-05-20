import { Column } from 'react-table';

export const COLUMNS: Column<{
  rank: string;
  registration_purpose: string;
  reception_inform: string;
  registration_cause: string;
  notes: {
    note: string[];
    canceled: string[];
  };
}>[] = [
  {
    Header: '순위번호',
    accessor: 'rank',
  },
  {
    Header: '등기목적',
    accessor: 'registration_purpose',
  },
  {
    Header: '접수',
    accessor: 'reception_inform',
    Cell: ({ value }: { value: string }) => (
      <div style={{ whiteSpace: 'pre-wrap' }}>{value.replace(' ', '\n')}</div>
    ),
  },
  {
    Header: '등기 원인',
    accessor: 'registration_cause',
  },
  {
    Header: '관리자 및 기타 사항',
    accessor: 'notes',
    Cell: ({ value }: { value: { note: string[] } }) => (
      <div style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>{value.note.join('\n')}</div>
    ),
  },
];
