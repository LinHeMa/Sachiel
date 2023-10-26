export type IntroItem = {
  title: string
  name: string
}
export const teamIntro2022: IntroItem[] = [
  {
    title: '監製',
    name: '簡信昌',
  },
  {
    title: '製作人',
    name: '張蘊方、李又如',
  },
  {
    title: '設計',
    name: '吳曼努',
  },
  {
    title: '工程',
    name: '陳柏維、李法賢、蘇庭葳、傅典洋、張容瑄',
  },
  {
    title: '社群',
    name: '徐湘芸',
  },
]
export const teamIntro2024: IntroItem[] = [
  {
    title: '監製',
    name: '簡信昌',
  },
  {
    title: '製作人',
    name: '劉怡馨、張蘊方、李又如',
  },
  {
    title: '設計',
    name: '吳曼努、曾立宇',
  },
  {
    title: '工程',
    name: '張容瑄、詹佳霖、陳柏維、簡信昌',
  },
  {
    title: '社群',
    name: '徐湘芸',
  },
]

export type DownloadItem = {
  title: string
  link: string
}
export const fileDownload2022: DownloadItem[] = [
  {
    title: '下載縣市長政見',
    link: 'https://whoareyou-gcs.readr.tw/politics/politics-81.csv',
  },
  {
    title: '下載縣市議員政見',
    link: 'https://whoareyou-gcs.readr.tw/politics/politics-82.csv',
  },
]
export const fileDownload2024: DownloadItem[] = [
  {
    title: '下載總統政見',
    link: '/',
  },
  {
    title: '下載立委政見',
    link: '/',
  },
]

//2024首頁：總統政見-事實查核 預設資料
export const defaultFactCheckJSON = [
  {
    id: '76785',
    number: '1',
    person_id: {
      id: '226',
      name: '賴清德',
    },
    politicsCount: 2,
    politics: [],
  },
  {
    id: '76786',
    number: '2',
    person_id: {
      id: '38254',
      name: '柯文哲',
    },
    politicsCount: 0,
    politics: [],
  },
  {
    id: '76787',
    number: '3',
    person_id: {
      id: '38255',
      name: '侯友宜',
    },
    politicsCount: 0,
    politics: [],
  },
  {
    id: '76783',
    number: '4',
    person_id: {
      id: '44206',
      name: '郭台銘',
    },
    politicsCount: 0,
    politics: [],
  },
]

export const checkboxLabels = [
  {
    title: '立場變化',
    value: 'positionChangeCount',
  },
  {
    title: '事實釐清',
    value: 'factCheckCount',
  },
  {
    title: '專家看點',
    value: 'expertPointCount',
  },
  {
    title: '相似政見',
    value: 'repeatCount',
  },
]

export const defaultComparisonJSON = [
  {
    id: '76785',
    number: '1',
    person_id: {
      id: '226',
      name: '賴清德',
    },
    politicsCount: 100,

    positionChangeCount: 5,
    factCheckCount: 5,
    expertPointCount: 6,
    repeatCount: 6,
    politicCategories: [
      {
        id: 1,
        name: '能源',
        displayColor: '#DB4C65',
        politicsCount: 10,
      },
      {
        id: 2,
        name: '勞工',
        displayColor: '#F58439',
        politicsCount: 9,
      },
      {
        id: 3,
        name: '教育',
        displayColor: '#F6BA31',
        politicsCount: 8,
      },
      {
        id: 4,
        name: '社會福利',
        displayColor: '#2FB7BF',
        politicsCount: 7,
      },
      {
        id: 5,
        name: '國際事務',
        displayColor: '#8379F8',
        politicsCount: 6,
      },
      {
        id: 6,
        name: '其他',
        displayColor: '#C5CBCD',
        politicsCount: 100,
      },
    ],
  },
  {
    id: '76786',
    number: '2',
    person_id: {
      id: '38254',
      name: '柯文哲',
    },
    politicsCount: 120,

    positionChangeCount: 25,
    factCheckCount: 25,
    expertPointCount: 26,
    repeatCount: 26,
    politicCategories: [
      {
        id: 1,
        name: '能源',
        displayColor: '#DB4C65',
        politicsCount: 20,
      },
      {
        id: 2,
        name: '勞工',
        displayColor: '#F58439',
        politicsCount: 19,
      },
      {
        id: 3,
        name: '教育',
        displayColor: '#F6BA31',
        politicsCount: 18,
      },
      {
        id: 4,
        name: '社會福利',
        displayColor: '#2FB7BF',
        politicsCount: 17,
      },
      {
        id: 5,
        name: '國際事務',
        displayColor: '#8379F8',
        politicsCount: 16,
      },
      {
        id: 6,
        name: '其他',
        displayColor: '#C5CBCD',
        politicsCount: 30,
      },
    ],
  },
  {
    id: '76787',
    number: '3',
    person_id: {
      id: '38255',
      name: '侯友宜',
    },
    politicsCount: 180,

    positionChangeCount: 20,
    factCheckCount: 15,
    expertPointCount: 10,
    repeatCount: 5,
    politicCategories: [
      {
        id: 1,
        name: '能源',
        displayColor: '#DB4C65',
        politicsCount: 50,
      },
      {
        id: 2,
        name: '勞工',
        displayColor: '#F58439',
        politicsCount: 20,
      },
      {
        id: 3,
        name: '教育',
        displayColor: '#F6BA31',
        politicsCount: 10,
      },
      {
        id: 4,
        name: '社會福利',
        displayColor: '#2FB7BF',
        politicsCount: 5,
      },
      {
        id: 5,
        name: '國際事務',
        displayColor: '#8379F8',
        politicsCount: 2,
      },
      {
        id: 6,
        name: '其他',
        displayColor: '#C5CBCD',
        politicsCount: 20,
      },
    ],
  },
  {
    id: '76783',
    number: '4',
    person_id: {
      id: '44206',
      name: '郭台銘',
    },
    politicsCount: 111,

    positionChangeCount: 22,
    factCheckCount: 11,
    expertPointCount: 44,
    repeatCount: 33,
    politicCategories: [
      {
        id: 1,
        name: '能源',
        displayColor: '#DB4C65',
        politicsCount: 77,
      },
      {
        id: 2,
        name: '勞工',
        displayColor: '#F58439',
        politicsCount: 22,
      },
      {
        id: 3,
        name: '教育',
        displayColor: '#F6BA31',
        politicsCount: 11,
      },
      {
        id: 4,
        name: '社會福利',
        displayColor: '#2FB7BF',
        politicsCount: 3,
      },
      {
        id: 5,
        name: '國際事務',
        displayColor: '#8379F8',
        politicsCount: 1,
      },
      {
        id: 6,
        name: '其他',
        displayColor: '#C5CBCD',
        politicsCount: 10,
      },
    ],
  },
]
