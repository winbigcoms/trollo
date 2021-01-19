const boardDummyData = {
  id: 1,
  name: 'trollers_clone',
  members: ['Back Seung Il', 'Han Seung Pyo', 'Lee So Ae'],
  auth: 'Back Seung Il',
  like: [],
  lists: [
    {
      id: 1,
      title: '기획',
      cards: [
        {
          id: 1,
          title: '주제선정',
          cover: '#000080',
          label: ['#000000', '#000080'],
          date: 'Jan,14',
          members: ['Back Seung Il', 'Han Seung Pyo', 'Lee So Ae']
        },
        {
          id: 2,
          title: '기능정의',
          description: '트렐로 기능 정리 후, 구현 가능한 기능 추리기',
          label: ['#000000', '#ADFF2F'],
          date: 'Jan, 18',
          members: ['Back Seung Il', 'Han Seung Pyo', 'Lee So Ae']
        },
        {
          id: 3,
          title: 'UI설계',
          description: 'Figma by 승일',
          label: ['#000000', '#20B2AA'],
          date: 'Jan, 28',
          members: ['Back Seung Il']
        },
      ]
    },
    {
      id: 2,
      title: '구현 및 테스트',
      cards: [
        {
          id: 4,
          title: '로그인 UI, 기능 구현',
          description: 'redux로 간단하게 (검증X)',
          cover: '#708090',
          label: ['#FFFF00'],
          date: 'Fab, 4',
          members: ['Lee So Ae']
        },
        {
          id: 5,
          title: '보드, 리스트, 카드 UI 구현',
          description: '가데이터로 하드코딩',
          label: ['#6ADBFF'],
          members: ['Han Seung Pyo', 'Lee So Ae']
        },
        {
          id: 6,
          title: 'DnD 테스트 및 적용',
          description: 'react-beautiful-dnd 라이브러리 사용',
          label: ['#FFFF00', '#000080'],
          date: 'Fab, 28',
          members: ['Back Seung Il', 'Han Seung Pyo', 'Lee So Ae']
        },
      ],
    },
    {
      id: 3,
      title: '최적화',
    }
  ]
}

export default boardDummyData;