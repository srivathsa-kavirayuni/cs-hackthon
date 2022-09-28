const generateRandomTrend = () => {
  let arr = [];
  while (arr.length < 8) {
    let r = Math.floor(Math.random() * 100) + 1;
    // if(arr.indexOf(r) === -1)
    arr.push(r);
  }
  return arr;
};

export const mockSearchResults = [
  {
    safeNumber: "TE000001",
    name: "TestCompany 1",
    creditScore: 81,
    turnover: "1,00,000",
    industry: "Automobile",
    trendData: generateRandomTrend(),
    whishlisted: false,
  },
  {
    safeNumber: "TE000002",
    name: "TestCompany 2",
    creditScore: 88,
    turnover: "2,00,000",
    industry: "Automotive",
    trendData: generateRandomTrend(),
    whishlisted: false,
  },
  {
    safeNumber: "TE000003",
    name: "TestCompany 3",
    creditScore: 90,
    turnover: "75,000",
    industry: "Manufacturing",
    trendData: generateRandomTrend(),
    whishlisted: false,
  },
  {
    safeNumber: "TE000004",
    name: "TestCompany 4",
    creditScore: 85,
    turnover: "80,000",
    industry: "Automotive",
    trendData: generateRandomTrend(),
    whishlisted: false,
  },
  {
    safeNumber: "TE000005",
    name: "TestCompany 5",
    creditScore: 70,
    turnover: "1,10,000",
    industry: "Automobile",
    trendData: generateRandomTrend(),
    whishlisted: false,
  },

  {
    safeNumber: "TE000006",
    name: "TestCompany 6",
    creditScore: 65,
    turnover: "1,50,000",
    industry: "Manufacturing",
    trendData: generateRandomTrend(),
    whishlisted: false,
  },
];
