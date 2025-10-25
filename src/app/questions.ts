"use client";
interface Option {
  text: string;
  vec: number[];
}

interface Question {
  id: number;
  question: string;
  options: [Option, Option, Option, Option]; // add more options
}

export type { Question, Option };

export const questions: Array<Question> = [
  {
    // hardcode more options
    id: 1,
    question: "Which spoons are you?",
    options: [
      { text: "Society Spoon", vec: [0,0,0,0,0,0,0,0,0,0] },
      { text: "Counting House", vec: [0,0,0,0,0,0,0,0,0,0] },
      { text: "Hendler's Circus", vec: [0, 0,0,0,0,0,0,0,0,0] },
      { text: "Crystal Palace", vec: [0, 0,0,0,0,0,0,0,0,0] },
    ],
  },
  {
    id: 2,
    question: "What spoons drink are you?",
    options: [
      { text: "Sex on the beach pitcher", vec: [0, 0,0,0,0,0,0,0,0,0] },
      { text: "Bell's whiskey", vec: [0, 0,0,0,0,0,0,0,0,0]},
      { text: "Woohoo pitcher", vec: [0, 0,0,0,0,0,0,0,0,0] },
      { text: "Kopparberg",vec: [0, 0,0,0,0,0,0,0,0,0]},
    ],
  },
  {
    id: 3,
    question: "How do you like your whiskey",
    options: [
      { text: "straight", vec: [0, 0,0,0,0,0,0,0,0,0] },
      { text: "cheap", vec: [0, 0,0,0,0,0,0,0,0,0] },
      { text: "sour", vec: [0, 0,0,0,0,0,0,0,0,0]},
      { text: "not", vec: [0, 0,0,0,0,0,0,0,0,0] },
    ],
  },
  {
    id: 4,
    question: "How close are you to retirement?",
    options: [
      { text: "This is my retirement party", vec: [0, 0,0,0,0,0,0,0,0,0]},
      { text: "Years....", vec: [0, 0,0,0,0,0,0,0,0,0] },
      { text: "Hundreds of thousands", vec: [0, 0,0,0,0,0,0,0,0,0] },
      { text: "I won't be able to retire", vec: [0, 0,0,0,0,0,0,0,0,0] },
    ],
  },
  {
    id: 5,
    question: "Musical theatre?",
    options: [
      { text: "Slay the house boots down", vec: [0, 0,0,0,0,0,0,0,0,0]},
      { text: "No", vec: [0, 0,0,0,0,0,0,0,0,0] },
      { text: "Bicurious", vec: [0, 0,0,0,0,0,0,0,0,0] },
      { text: "If I must (bicurious)", vec: [0, 0,0,0,0,0,0,0,0,0] },
    ],
  },
];