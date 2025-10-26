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
      { text: "Society Spoon", vec: [0,0,0,0,0,0,0,0,0,0] },
      { text: "Counting House", vec: [0,0,0,0,0,0,0,0,0,0] },
      { text: "Hendler's Circus", vec: [0,0,0,0,0,0,0,0,0,0] },
      { text: "Crystal Palace", vec: [0,0,0,0,0,0,0,0,0,0] },
    ],
  },
  {
    id: 2,
    question: "What spoons drink are you?",
    options: [
      { text: "Sex on the beach pitcher", vec: [0,0,0,0,0,0,0,0,0,0] },
      { text: "Bell's whiskey", vec: [0,0,0,0,0,0,0,0,0,0]},
      { text: "Woohoo pitcher", vec: [0,0,0,0,0,0,0,0,0,0] },
      { text: "Kopparberg",vec: [0,0,0,0,0,0,0,0,0,0]},
    ],
  },
  {
    id: 3,
    question: "How do you like your whiskey",
    options: [
      { text: "straight", vec: [0,0,0,0,0,0,0,0,0,0] },
      { text: "cheap", vec: [0,0,0,0,0,0,0,0,0,0] },
      { text: "sour", vec: [0,0,0,0,0,0,0,0,0,0]},
      { text: "not", vec: [0,0,0,0,0,0,0,0,0,0] },
    ],
  },
  {
    id: 4,
    question: "How close are you to retirement?",
    options: [
      { text: "This is my retirement party", vec: [0,0,0,0,0,0,0,0,0,0]},
      { text: "Years....", vec: [0,0,0,0,0,0,0,0,0,0] },
      { text: "Hundreds of thousands", vec: [0,0,0,0,0,0,0,0,0,0] },
      { text: "I won't be able to retire", vec: [0,0,0,0,0,0,0,0,0,0] },
    ],
  },
  {
    id: 5,
    question: "Musical theatre?",
    options: [
      { text: "Slay the house boots down", vec: [0,0,0,0,0,0,0,0,0,0]},
      { text: "No", vec: [0,0,0,0,0,0,0,0,0,0] },
      { text: "Bicurious", vec: [0,0,0,0,0,0,0,0,0,0] },
      { text: "If I must (bicurious)", vec: [0,0,0,0,0,0,0,0,0,0] },
    ],
  },
  {
    id: 8,
    question: "Which data types are immutable?",
    options: [
      { text: "List", vec: [5, 6, 3, 8, 1, 8, 9, 6, 0, 9] },
      { text: "Dictionary", vec: [5, 6, 3, 8, 1, 8, 9, 6, 0, 9] },
      { text: "Set", vec:  [3, 8, 1, 8, 9, 6, 0, 9, 7, 7] },
      { text: "Tuple", vec: [8, 1, 8, 9, 6, 0, 9, 7, 7, 5] },
    ],
  },
  {
    id: 9,
    question: "Would you say you are a organised or a happy person? ",
    options: [
      { text: "Very organised ...", vec: [1, 8, 9, 6, 0, 9, 7, 7, 5, 2] },
      { text: "Organised ", vec: [8, 9, 6, 0, 9, 7, 7, 5, 2, 8]},
      { text: "Happy and disorganised", vec: [9, 6, 0, 9, 7, 7, 5, 2, 8, 1] },
      { text: "Very happy and very disorganised",vec: [6, 0, 9, 7, 7, 5, 2, 8, 1, 6]},
    ],
  },
  {
    id:10,
    question: "If you were a shape, what shape would you be?",
    options: [
      { text: "Circle", vec: [0, 2, 8, 4, 1, 2, 1, 7, 0, 2] },
      { text: "Square", vec: [2, 8, 4, 1, 2, 1, 7, 0, 2, 5] },
      { text: "Triangle (equilateral)", vec: [8, 4, 1, 2, 1, 7, 0, 2, 5, 0]},
      { text: "Triangle (isosceles)", vec: [4, 1, 2, 1, 7, 0, 2, 5, 0, 3] },
    ],
  },
  {
    id: 11,
    question: "What is your favourite excel function?",
    options: [
      { text: "SUM", vec: [1, 2, 1, 7, 0, 2, 5, 0, 3, 0]},
      { text: "MAX", vec: [2, 1, 7, 0, 2, 5, 0, 3, 0, 3] },
      { text: "AVG", vec: [1, 7, 0, 2, 5, 0, 3, 0, 3, 1] },
      { text: "I have no experience with excel", vec: [7, 0, 2, 5, 0, 3, 0, 3, 1, 9] },
    ],
  },
  {
    id: 12,
    question: "Which conspiracy theory best represents your attitude in the workplace?",
    options: [
      { text: "The moon landing was fake ", vec: [0, 2, 5, 0, 3, 0, 3, 1, 9, 2]},
      { text: "Moon is made of cheese", vec: [2, 5, 0, 3, 0, 3, 1, 9, 2, 1] },
      { text: "There are aliens on the moon", vec: [5, 0, 3, 0, 3, 1, 9, 2, 1, 0] },
      { text: "The moon is man-made and small and close to us", vec: [0, 3, 0, 3, 1, 9, 2, 1, 0, 5] },
    ],
  },
  {
    id: 13,
    question: "How would you demonstate your work ethic at the new years party?",
    options: [
      { text: "Purrrrrr", vec: [3, 0, 3, 1, 9, 2, 1, 0, 5, 2]},
      { text: "I don't attend the party ", vec: [0, 3, 1, 9, 2, 1, 0, 5, 2, 2] },
      { text: "I'm losing my job", vec: [1, 9, 2, 1, 0, 5, 2, 2, 0, 5] },
      { text: "I provide catering ", vec: [9, 2, 1, 0, 5, 2, 2, 0, 5, 5] },
    ],
  },
  {
    id: 14,
    question: "Let me present you with a hypothetical... ",
    options: [
      { text: "C", vec: [2, 1, 0, 5, 2, 2, 0, 5, 5, 8]},
      { text: "B", vec: [1, 0, 5, 2, 2, 0, 5, 5, 8, 5] },
      { text: "D", vec: [0, 5, 2, 2, 0, 5, 5, 8, 5, 1] },
      { text: "A", vec: [5, 2, 2, 0, 5, 5, 8, 5, 1, 3] },
    ],
  },
  {
    id: 15,
    question: "If you could be one thing?",
    options: [
      { text: "Timeliness", vec: [2, 2, 0, 5, 5, 8, 5, 1, 3, 3]},
      { text: "Cleanliness", vec: [0, 5, 5, 8, 5, 1, 3, 3, 4, 3] },
      { text: "Communication", vec: [5, 5, 8, 5, 1, 3, 3, 4, 3, 3] },
      { text: "Team-work", vec: [5, 8, 5, 1, 3, 3, 4, 3, 3, 5] },
    ],
  },
  {
    id: 16,
    question: "what keeps you up at night?",
    options: [
      { text: "Work I haven't done", vec: [8, 5, 1, 3, 3, 4, 3, 3, 5, 2]},
      { text: "Thinking of ways to improve", vec: [5, 1, 3, 3, 4, 3, 3, 5, 2, 6] },
      { text: "The horrors of modern life", vec: [1, 3, 3, 4, 3, 3, 5, 2, 6, 7] },
      { text: "Skeletons", vec: [3, 3, 4, 3, 3, 5, 2, 6, 7, 7] },
    ],
  },
  {
    id: 18,
    question: "On a scale of one to ten, how communicative are you?",
    options: [
      { text: "No very communicative", vec: [6, 9, 9, 6, 1, 2, 4, 4, 4, 0]},
      { text: "4", vec: [0, 4, 5, 7, 9, 3, 7, 1, 8, 8] },
      { text: "6", vec: [0, 6, 1, 7, 3, 7, 8, 9, 2, 1] },
      { text: "Too communicative", vec: [1, 0, 8, 3, 5, 7, 2, 1, 4, 8] },
    ],
  },

  {
    id: 19,
    question: "In 2020 someone put milk in the kettle. The number of jokes per hackathon made about this event can be modelled as the function | -x^3 + 6|. How many jokes will be made in the year 3000?",
    options: [
      { text: "Any of the above", vec: [7, 2, 8, 3, 4, 3, 0, 1, 0, 9]},
      { text: "Overflow error ", vec: [8, 0, 9, 3, 3, 5, 9, 4, 0, 0] },
      { text: "8999994", vec: [2, 3, 0, 6, 7, 8, 7, 0, 1, 5] },
      { text: "None of these", vec: [8, 6, 6, 2, 3, 3, 0, 2, 8, 5] },
    ],
  },

  {
    id: 20,
    question: "Some of the competitors in the hackathon are computer scientists. all computer scientists are people. some people lie about when they last showered. is the statement that 'all competitors in the hackathon lie about when they last showered is false' true?",
    options: [
      { text: "I lie about when i last showered ", vec: [6, 0, 0, 6, 8, 8, 4, 9, 3, 8]},
      { text: "Rather not say", vec: [1, 6, 2, 4, 2, 5, 6, 8, 6, 4] },
      { text: "The statement is true", vec: [4, 2, 0, 8, 0, 0, 2, 5, 3, 5] },
      { text: "The question is false", vec: [1, 9, 4, 3, 3, 8, 6, 2, 4, 9] },
    ],
  },

  {
    id: 21,
    question: "What language would be most suitable to develop a game of fizzbuzz?",
    options: [
      { text: "OCaml", vec: [8, 4, 5, 4, 6, 8, 1, 2, 2, 9]},
      { text: "Perl", vec: [2, 4, 3, 9, 2, 3, 1, 2, 3, 3] },
      { text: "PHP", vec: [1, 1, 3, 1, 4, 8, 5, 2, 5, 6] },
      { text: "R", vec: [2, 8, 9, 8, 4, 9, 6, 2, 8, 5] },
    ],
  },
];