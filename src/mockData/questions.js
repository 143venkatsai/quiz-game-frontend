const questions = [
  {
    id: 1,
    question: "Which of the following numbers is a prime number?",
    options: [
      { key: "A", value: "15" },
      { key: "B", value: "21" },
      { key: "C", value: "29" },
      { key: "D", value: "35" },
    ],
    correctAnswer: "C",
    category: "Prime Numbers",
  },
  {
    id: 2,
    question: "What is the smallest prime number?",
    options: [
      { key: "A", value: "0" },
      { key: "B", value: "1" },
      { key: "C", value: "2" },
      { key: "D", value: "3" },
    ],
    correctAnswer: "C",
    category: "Prime Numbers",
  },
  {
    id: 3,
    question: "Is 51 a prime number?",
    options: [
      { key: "A", value: "Yes" },
      { key: "B", value: "No" },
      { key: "C", value: "Maybe" },
      { key: "D", value: "Cannot say" },
    ],
    correctAnswer: "B",
    category: "Prime Numbers",
  },
  {
    id: 4,
    question: "How many prime numbers are there between 1 and 10?",
    options: [
      { key: "A", value: "2" },
      { key: "B", value: "3" },
      { key: "C", value: "4" },
      { key: "D", value: "5" },
    ],
    correctAnswer: "C",
    category: "Prime Numbers",
  },
  {
    id: 5,
    question: "What is the sum of the first three prime numbers?",
    options: [
      { key: "A", value: "5" },
      { key: "B", value: "10" },
      { key: "C", value: "17" },
      { key: "D", value: "15" },
    ],
    correctAnswer: "B",
    category: "Prime Numbers",
  },
  {
    id: 6,
    question:
      "If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops definitely Lazzies?",
    options: [
      { key: "A", value: "True" },
      { key: "B", value: "False" },
      { key: "C", value: "Cannot say" },
      { key: "D", value: "None of these" },
    ],
    correctAnswer: "A",
    category: "Logical Reasoning",
  },
  {
    id: 7,
    question: "Find the next number in the series: 2, 6, 12, 20, 30, ...",
    options: [
      { key: "A", value: "36" },
      { key: "B", value: "40" },
      { key: "C", value: "42" },
      { key: "D", value: "56" },
    ],
    correctAnswer: "C",
    category: "Logical Reasoning",
  },
  {
    id: 8,
    question:
      "If 'CAT' is coded as '3120' and 'DOG' is coded as '4157', what is the code for 'BAT'?",
    options: [
      { key: "A", value: "2110" },
      { key: "B", value: "2120" },
      { key: "C", value: "2117" },
      { key: "D", value: "2130" },
    ],
    correctAnswer: "A",
    category: "Logical Reasoning",
  },
  {
    id: 9,
    question: "Which word does not belong: Apple, Banana, Carrot, Cherry?",
    options: [
      { key: "A", value: "Apple" },
      { key: "B", value: "Banana" },
      { key: "C", value: "Carrot" },
      { key: "D", value: "Cherry" },
    ],
    correctAnswer: "C",
    category: "Logical Reasoning",
  },
  {
    id: 10,
    question:
      "If it takes 4 painters 6 hours to paint a house, how long would it take 6 painters?",
    options: [
      { key: "A", value: "4 hours" },
      { key: "B", value: "2 hours" },
      { key: "C", value: "3 hours" },
      { key: "D", value: "5 hours" },
    ],
    correctAnswer: "A",
    category: "Logical Reasoning",
  },
  {
    id: 11,
    question: "A train covers 60 km in 45 minutes. What is its speed in km/hr?",
    options: [
      { key: "A", value: "80" },
      { key: "B", value: "90" },
      { key: "C", value: "75" },
      { key: "D", value: "72" },
    ],
    correctAnswer: "A",
    category: "Aptitude",
  },
  {
    id: 12,
    question: "What is 15% of 200?",
    options: [
      { key: "A", value: "20" },
      { key: "B", value: "25" },
      { key: "C", value: "30" },
      { key: "D", value: "35" },
    ],
    correctAnswer: "C",
    category: "Aptitude",
  },
  {
    id: 13,
    question:
      "If a number is multiplied by 3 and then increased by 12, the result is 39. Find the number.",
    options: [
      { key: "A", value: "9" },
      { key: "B", value: "7" },
      { key: "C", value: "3" },
      { key: "D", value: "11" },
    ],
    correctAnswer: "A",
    category: "Aptitude",
  },
  {
    id: 14,
    question:
      "If the price of 5 pens is equal to the price of 3 pencils, what is the ratio of the price of a pen to a pencil?",
    options: [
      { key: "A", value: "3:5" },
      { key: "B", value: "5:3" },
      { key: "C", value: "3:2" },
      { key: "D", value: "2:3" },
    ],
    correctAnswer: "B",
    category: "Aptitude",
  },
  {
    id: 15,
    question: "Find the next number in the series: 5, 10, 20, 40, ?",
    options: [
      { key: "A", value: "60" },
      { key: "B", value: "90" },
      { key: "C", value: "80" },
      { key: "D", value: "100" },
    ],
    correctAnswer: "C",
    category: "Aptitude",
  },
  {
    id: 16,
    question:
      "If the sum of ages of 4 children born at intervals of 3 years is 40, what is the age of the youngest child?",
    options: [
      { key: "A", value: "4" },
      { key: "B", value: "5" },
      { key: "C", value: "6" },
      { key: "D", value: "7" },
    ],
    correctAnswer: "A",
    category: "Aptitude",
  },
  {
    id: 17,
    question:
      "A shopkeeper sells an article for $540, making a profit of 20%. What is the cost price?",
    options: [
      { key: "A", value: "450" },
      { key: "B", value: "400" },
      { key: "C", value: "420" },
      { key: "D", value: "430" },
    ],
    correctAnswer: "A",
    category: "Aptitude",
  },
  {
    id: 18,
    question: "What is the value of x in the equation 2x + 3 = 15?",
    options: [
      { key: "A", value: "7" },
      { key: "B", value: "6" },
      { key: "C", value: "5" },
      { key: "D", value: "8" },
    ],
    correctAnswer: "B",
    category: "Aptitude",
  },
  {
    id: 19,
    question:
      "If one angle of a triangle is 90 degrees and another angle is 45 degrees, what is the third angle?",
    options: [
      { key: "A", value: "30" },
      { key: "B", value: "45" },
      { key: "C", value: "90" },
      { key: "D", value: "60" },
    ],
    correctAnswer: "B",
    category: "Aptitude",
  },
  {
    id: 20,
    question:
      "If the speed of a boat in still water is 15 km/h and the speed of the current is 3 km/h, what is the speed downstream?",
    options: [
      { key: "A", value: "18" },
      { key: "B", value: "12" },
      { key: "C", value: "15" },
      { key: "D", value: "9" },
    ],
    correctAnswer: "A",
    category: "Aptitude",
  },
];

export default questions;
