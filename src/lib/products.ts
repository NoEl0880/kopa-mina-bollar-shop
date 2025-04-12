
export type GolfBallGrade = 'A' | 'B' | 'C';

export interface GolfBallPrice {
  grade: GolfBallGrade;
  price: number;
  available: boolean;
}

export interface GolfBallModel {
  id: string;
  name: string;
  description: string;
  image: string;
  prices: GolfBallPrice[];
}

export const golfBallModels: GolfBallModel[] = [
  {
    id: "titleist-prov1",
    name: "Titleist Pro V1",
    description: "Titleist Pro V1 erbjuder exceptionell distans, konsekvent flygbana och mjuk känsla. Perfekt för spelare som söker ett allround-resultat.",
    image: "/placeholder.svg",
    prices: [
      { grade: "A", price: 26, available: true },
      { grade: "B", price: 22, available: true },
      { grade: "C", price: 19, available: true }
    ]
  },
  {
    id: "titleist-prov1x",
    name: "Titleist Pro V1x",
    description: "Titleist Pro V1x har en högre flygtrajektoria och fastare känsla jämfört med Pro V1. Utmärkt för spelare med hög svinghastighet.",
    image: "/placeholder.svg",
    prices: [
      { grade: "A", price: 24, available: true },
      { grade: "B", price: 21, available: true },
      { grade: "C", price: 18, available: true }
    ]
  },
  {
    id: "titleist-toursoft",
    name: "Titleist Tour Soft",
    description: "Titleist Tour Soft ger längd med mjuk känsla. En perfekt balans mellan prestanda och komfort för medelhandikapparen.",
    image: "/placeholder.svg",
    prices: [
      { grade: "A", price: 22, available: true },
      { grade: "B", price: 18, available: true },
      { grade: "C", price: 15, available: true }
    ]
  },
  {
    id: "titleist-velocity",
    name: "Titleist Velocity",
    description: "Titleist Velocity fokuserar på maximal distans med hög flyktbana. Perfekt för spelare som vill ha extra längd från tee.",
    image: "/placeholder.svg",
    prices: [
      { grade: "A", price: 19, available: true },
      { grade: "B", price: 17, available: true },
      { grade: "C", price: 14, available: true }
    ]
  },
];

export const getGradeDescription = (grade: GolfBallGrade): string => {
  switch(grade) {
    case 'A':
      return "Nästan nya bollar med minimal användning och minimal kosmetisk slitning. Ser nästan nya ut.";
    case 'B':
      return "Bra spelkvalitet med viss kosmetisk slitning. Perfekt för vardagsrundor.";
    case 'C':
      return "Spelar bra men med synlig användning. Utmärkta träningsbollar.";
    default:
      return "";
  }
};
