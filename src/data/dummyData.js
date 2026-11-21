// Data dummy awal berbentuk Array of Objects (pengganti database untuk Front-End)

export const initialParties = [
  {
    id: 1,
    ign: 'FadelWave',
    role: 'Roamer',
    rank: 'Immortal 100-199',
    durationHours: 3,
    discord: 'fadelwave#1044',
    notes: 'Cari party push 5-man santai tapi serius, wajib on mic Discord.',
    status: 'open',
    createdAt: '2026-11-21T19:00:00+08:00',
  },
  {
    id: 2,
    ign: 'KaltimCarry',
    role: 'Jungler',
    rank: 'Glory',
    durationHours: 6,
    discord: 'kaltimcarry',
    notes: 'Butuh Jungler assassin/tank yang objektif turtle & lord.',
    status: 'open',
    createdAt: '2026-11-21T18:30:00+08:00',
  },
]

export const initialTournaments = [
  {
    id: 1,
    title: 'Balikpapan Coffee Cup MLBB Season 4',
    date: '2026-12-05',
    location: 'Kedai Kopi Sudirman, Balikpapan',
    mode: 'Offline',
    format: 'BO3',
    entryFee: 'Rp 75.000 / Tim',
    prizePool: 'Rp 3.500.000',
    registerUrl: 'https://example.com/daftar-coffee-cup',
    poster: '',
    description: 'Turnamen komunitas MLBB terbuka untuk wilayah Balikpapan dan sekitarnya.',
  },
  {
    id: 2,
    title: 'ITK Informatics E-Sports Championship',
    date: '2026-12-14',
    location: 'Online (Regional Kaltim)',
    mode: 'Online',
    format: 'BO1 / Final BO3',
    entryFee: 'Rp 50.000 / Tim',
    prizePool: 'Rp 5.000.000',
    registerUrl: 'https://example.com/daftar-itk-cup',
    poster: '',
    description: 'Kompetisi MLBB antar mahasiswa dan komunitas gamer Kalimantan Timur.',
  },
]
