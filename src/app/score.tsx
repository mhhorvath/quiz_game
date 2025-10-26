"use client";
import Image from "next/image";
import type { QuizResult, Plan } from "./page";

interface ScoreProps {
  show: boolean;
  result: QuizResult;
  plan: Plan | null;
  onNext: () => void;
}

export default function Score({ show, plan, result, onNext }: ScoreProps) {
  const imagePath = plan
    ? `/images/${plan.name.toLowerCase().replace(/\s+/g, "-")}.jpg`
    : null;
  console.log(imagePath);
  return show ? (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-12">
        <div className=" lg:w-1/2 text-center lg:text-left">
          <div className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">Selected Activity</div>
          <div className="text-1xl lg:text-2xl mb-6 leading-tight">Based on your preferences, we would recommend:</div>
          <div className="my-5">
            <div className="w-full bg-slate-300 dark:bg-slate-700 p-10 rounded text-center">
              <div className="text-6xl font-bold ">
                {plan ? (
                <div>
                  {imagePath && (
                    <div className="mb-6 flex justify-center">
                      <Image
                        src={imagePath}
                        alt={plan.name}
                        width={300}
                        height={200}
                        className="rounded-xl shadow-md object-cover"
                      />
                    </div>
                  )}

                  <div className="text-4xl font-bold mb-4">{plan.name}</div>
                  <p className="text-lg opacity-80">{plan.description}</p>
                  </div>
                  ) : (
                    <div>No Plan for you !</div>
                )}
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={onNext}
              className="text-lg bg-white text-gray-800  px-10 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-10 shadow-lg"
            >
              Try Again?
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}