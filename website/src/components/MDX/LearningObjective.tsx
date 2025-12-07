import React from 'react';

interface LearningObjectiveProps {
  objectives: string[];
}

export default function LearningObjective({ objectives }: LearningObjectiveProps) {
  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6 rounded-r-md">
      <h4 className="flex items-center text-blue-800 dark:text-blue-300 font-bold text-lg mb-2 mt-0">
        <span className="mr-2 text-xl">🎯</span> Learning Objectives
      </h4>
      <ul className="list-disc list-inside space-y-1 mb-0 text-gray-700 dark:text-gray-300">
        {objectives.map((obj, index) => (
          <li key={index}>{obj}</li>
        ))}
      </ul>
    </div>
  );
}
