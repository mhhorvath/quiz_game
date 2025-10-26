"use client";
interface Option {
  text: string;
  vec: number[];
  // could add image to option box
}

interface Question {
  id: number;
  question: string;
  options: [Option, Option, Option, Option];
}

export type { Question, Option };

export const questions: Array<Question> = [
  {
    // something needs calibrating here because we keep getting the same options.. (riddle pub quiz)
    id: 1,
    question: "Which spoons are you?",
    options: [
      { text: "Society Spoon", vec: [9, 6, 0, 8, 0, 1, 9, 3, 7, 0] },
      { text: "Counting House", vec: [2, 5, 3, 7, 3, 1, 3, 1, 0, 2] },
      { text: "Hengler's Circus", vec: [0, 3, 9, 4, 5, 9, 0, 2, 9, 6] },
      { text: "Crystal Palace", vec: [0, 5, 8, 2, 6, 0, 3, 4, 4, 8] },
    ],
  },
  {
    id: 2,
    question: "What spoons drink are you?",
    options: [
      { text: "Sex on the beach pitcher", vec: [2, 2, 3, 6, 9, 6, 8, 2, 7, 0] },
      { text: "Bell's whiskey", vec: [0, 7, 5, 2, 3, 3, 5, 0, 8, 0]},
      { text: "Woohoo pitcher", vec: [6, 3, 8, 1, 2, 2, 6, 5, 3, 7]},
      { text: "Kopparberg",vec: [8, 6, 4, 3, 5, 3, 1, 9, 3, 7]},
    ],
  },
  {
    id: 3,
    question: "How do you like your whiskey",
    options: [
      { text: "straight", vec: [2, 8, 1, 2, 9, 6, 4, 3, 5, 7] },
      { text: "cheap", vec: [0, 6, 6, 3, 2, 6, 3, 1, 1, 8]},
      { text: "sour", vec: [6, 2, 8, 9, 7, 2, 7, 9, 8, 7]},
      { text: "not", vec: [7, 6, 9, 5, 3, 7, 6, 9, 2, 0] },
    ],
  },
  {
    id: 4,
    question: "How close are you to retirement?",
    options: [
      { text: "This is my retirement party", vec: [7, 2, 8, 7, 5, 5, 7, 6, 7, 4]},
      { text: "Years....", vec: [0, 3, 9, 4, 5, 9, 0, 2, 9, 6] },
      { text: "Hundreds of thousands", vec: [6, 2, 6, 7, 0, 6, 8, 0, 7, 9] },
      { text: "I won't be able to retire", vec: [6, 6, 3, 0, 5, 0, 5, 4, 4, 3] },
    ],
  },
  {
    id: 5,
    question: "Musical theatre?",
    options: [
      { text: "Slay the house boots down", vec: [9, 3, 8, 0, 0, 5, 8, 6, 1, 0]},
      { text: "No", vec: [7, 3, 7, 1, 9, 1, 7, 8, 0, 2] },
      { text: "Bicurious", vec: [2, 5, 0, 5, 9, 7, 4, 2, 1, 0]},
      { text: "If I must (bicurious)", vec: [0, 8, 8, 8, 0, 6, 8, 1, 0, 5]},
    ],
  },
  {
    id: 8,
    question: "Which data types are immutable?",
    options: [
      { text: "List", vec: [6, 3, 8, 1, 2, 2, 6, 5, 3, 7] },
      { text: "Dictionary", vec: [7, 5, 2, 8, 5, 7, 3, 4, 6, 4] },
      { text: "Set", vec:  [1, 2, 1, 7, 0, 7, 9, 8, 0, 0] },
      { text: "Tuple", vec: [3, 1, 9, 2, 1, 0, 7, 9, 0, 0] },
    ],
  },
  {
    id: 9,
    question: "Would you say you are a organised or a happy person? ",
    options: [
      { text: "Very organised ...", vec: [5, 5, 8, 5, 2, 3, 2, 4, 1, 3] },
      { text: "Organised ", vec: [5, 2, 6, 7, 1, 5, 7, 9, 5, 4]},
      { text: "Happy and disorganised", vec: [8, 6, 4, 3, 5, 3, 1, 9, 3, 7] },
      { text: "Very happy and very disorganised",vec: [9, 7, 2, 2, 2, 0, 4, 7, 8, 8]},
    ],
  },
  {
    id:10,
    question: "If you were a shape, what shape would you be?",
    options: [
      { text: "Circle", vec: [9, 2, 9, 9, 8, 4, 8, 4, 1, 2] },
      { text: "Square", vec: [7, 3, 7, 1, 9, 1, 7, 8, 0, 2] },
      { text: "Triangle (equilateral)", vec: [0, 8, 8, 8, 0, 6, 8, 1, 0, 5]},
      { text: "Triangle (isosceles)", vec: [5, 0, 0, 3, 9, 5, 2, 2, 6, 0] },
    ],
  },
  {
    id: 11,
    question: "What is your favourite excel function?",
    options: [
      { text: "SUM", vec: [0, 7, 5, 2, 3, 3, 5, 0, 8, 0]},
      { text: "MAX", vec: [9, 3, 8, 0, 0, 5, 8, 6, 1, 0] },
      { text: "AVG", vec: [0, 8, 3, 7, 0, 2, 4, 6, 4, 7] },
      { text: "I have no experience with excel", vec: [2, 5, 0, 5, 9, 7, 4, 2, 1, 0] },
    ],
  },
  {
    id: 12,
    question: "Which conspiracy theory best represents your attitude in the workplace?",
    options: [
      { text: "The moon landing was fake ", vec: [3, 8, 7, 1, 8, 9, 9, 8, 3, 6]},
      { text: "Moon is made of cheese", vec: [7, 4, 8, 3, 5, 4, 6, 4, 9, 4] },
      { text: "There are aliens on the moon", vec: [8, 2, 4, 3, 3, 2, 5, 7, 2, 3] },
      { text: "The moon is man-made and small and close to us", vec: [2, 8, 1, 2, 9, 6, 4, 3, 5, 7] },
    ],
  },
  {
    id: 13,
    question: "How would you demonstate your work ethic at the new years party?",
    options: [
      { text: "Purrrrrr", vec: [9, 6, 0, 8, 0, 1, 9, 3, 7, 0]},
      { text: "I don't attend the party ", vec: [4, 9, 7, 2, 5, 4, 5, 9, 0, 9] },
      { text: "I'm losing my job", vec: [0, 7, 0, 4, 2, 8, 8, 8, 4, 5]},
      { text: "I provide catering ", vec: [8, 1, 7, 0, 4, 2, 7, 4, 1, 2] },
    ],
  },
  {
    id: 14,
    question: "Let me present you with a hypothetical... ",
    options: [
      { text: "C", vec: [0, 3, 9, 4, 5, 9, 0, 2, 9, 6]},
      { text: "B", vec: [7, 2, 8, 7, 5, 5, 7, 6, 7, 4] },
      { text: "D", vec: [8, 3, 6, 1, 4, 0, 3, 9, 4, 8] },
      { text: "A", vec: [2, 5, 3, 7, 3, 1, 3, 1, 0, 2] },
    ],
  },
  {
    id: 15,
    question: "If you could be one thing?",
    options: [
      { text: "Timeliness", vec: [1, 7, 7, 0, 4, 0, 3, 6, 4, 2]},
      { text: "Cleanliness", vec: [0, 6, 7, 3, 4, 7, 8, 9, 4, 8]},
      { text: "Communication", vec: [6, 2, 6, 7, 0, 6, 8, 0, 7, 9]},
      { text: "Team-work", vec: [0, 5, 8, 2, 6, 0, 3, 4, 4, 8] },
    ],
  },
  {
    id: 16,
    question: "what keeps you up at night?",
    options: [
      { text: "Work I haven't done", vec: [0, 6, 6, 3, 2, 6, 3, 1, 1, 8]},
      { text: "Thinking of ways to improve", vec: [5, 8, 3, 6, 4, 4, 5, 9, 7, 4] },
      { text: "The horrors of modern life", vec: [8, 9, 6, 4, 7, 5, 6, 4, 5, 6]},
      { text: "Skeletons", vec: [8, 6, 1, 5, 8, 4, 3, 6, 4, 7]},
    ],
  },
  {
    id: 18,
    question: "On a scale of one to ten, how communicative are you?",
    options: [
      { text: "No very communicative", vec: [1, 1, 1, 2, 7, 3, 5, 8, 1, 3]},
      { text: "4", vec: [6, 2, 8, 9, 7, 2, 7, 9, 8, 7] },
      { text: "6", vec: [4, 9, 5, 7, 8, 1, 2, 6, 3, 1] },
      { text: "Too communicative", vec: [7, 7, 4, 0, 0, 3, 5, 6, 7, 7] },
    ],
  },

  {
    id: 19,
    question: "In 2020 someone put milk in the kettle. The number of jokes per hackathon made about this event can be modelled as the function | -x^3 + 6|. How many jokes will be made in the year 3000?",
    options: [
      { text: "Any of the above", vec: [7, 6, 9, 5, 3, 7, 6, 9, 2, 0]},
      { text: "Overflow error ", vec: [2, 2, 3, 6, 9, 6, 8, 2, 7, 0] },
      { text: "8999994", vec: [1, 6, 9, 9, 5, 7, 5, 9, 0, 8] },
      { text: "None of these", vec: [6, 6, 3, 0, 5, 0, 5, 4, 4, 3] },
    ],
  },

  {
    id: 20,
    question: "Some of the competitors in the hackathon are computer scientists. all computer scientists are people. some people lie about when they last showered. is the statement that 'all competitors in the hackathon lie about when they last showered is false' true?",
    options: [
      { text: "I lie about when i last showered ", vec: [0, 8, 0, 8, 9, 5, 9, 9, 6, 6]},
      { text: "Rather not say", vec: [9, 9, 6, 7, 9, 6, 4, 5, 9, 0] },
      { text: "The statement is true", vec: [4, 5, 7, 5, 8, 4, 9, 4, 4, 0] },
      { text: "The question is false", vec: [6, 1, 7, 7, 7, 8, 4, 3, 7, 2] },
    ],
  },

  {
    id: 21,
    question: "What language would be most suitable to develop a game of fizzbuzz?",
    options: [
      { text: "OCaml", vec: [7, 4, 2, 8, 9, 2, 3, 5, 0, 0]},
      { text: "Perl", vec: [7, 5, 0, 0, 9, 5, 9, 8, 5, 0] },
      { text: "PHP", vec: [6, 7, 5, 8, 2, 1, 6, 3, 8, 1]},
      { text: "R", vec: [2, 8, 9, 8, 4, 9, 6, 2, 8, 5, 6] },
    ],
  },
];