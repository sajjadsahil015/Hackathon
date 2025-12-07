import React from 'react';
import clsx from 'clsx';

export interface HardwareProfile {
  id: string;
  name: string;
  type: "workstation" | "edge";
  gpu: string;
  cpu: string;
  ram: string;
  storage: string;
  recommended_for: string[];
}

interface HardwareComparisonProps {
  profiles: HardwareProfile[];
  highlight?: string;
}

export default function HardwareComparison({ profiles, highlight }: HardwareComparisonProps) {
  if (!profiles || profiles.length === 0) {
    return <div>No hardware profiles available.</div>;
  }

  return (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full text-left text-sm whitespace-nowrap">
        <thead className="uppercase tracking-wider border-b-2 border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <tr>
            <th scope="col" className="px-6 py-4">Feature</th>
            {profiles.map((profile) => (
              <th key={profile.id} scope="col" className={clsx("px-6 py-4", highlight === profile.id && "bg-green-50 dark:bg-green-900/20")}>
                {profile.name}
                {highlight === profile.id && <span className="ml-2 text-xs text-green-600 bg-green-100 rounded px-2 py-0.5 dark:bg-green-900 dark:text-green-300">Recommended</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">Type</th>
            {profiles.map(p => <td key={p.id} className={clsx("px-6 py-4", highlight === p.id && "bg-green-50 dark:bg-green-900/20")}>{p.type}</td>)}
          </tr>
          <tr className="border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">GPU</th>
            {profiles.map(p => <td key={p.id} className={clsx("px-6 py-4", highlight === p.id && "bg-green-50 dark:bg-green-900/20")}>{p.gpu}</td>)}
          </tr>
          <tr className="border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">CPU</th>
            {profiles.map(p => <td key={p.id} className={clsx("px-6 py-4", highlight === p.id && "bg-green-50 dark:bg-green-900/20")}>{p.cpu}</td>)}
          </tr>
          <tr className="border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">RAM</th>
            {profiles.map(p => <td key={p.id} className={clsx("px-6 py-4", highlight === p.id && "bg-green-50 dark:bg-green-900/20")}>{p.ram}</td>)}
          </tr>
          <tr className="border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">Storage</th>
            {profiles.map(p => <td key={p.id} className={clsx("px-6 py-4", highlight === p.id && "bg-green-50 dark:bg-green-900/20")}>{p.storage}</td>)}
          </tr>
          <tr>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">Best For</th>
            {profiles.map(p => (
              <td key={p.id} className={clsx("px-6 py-4 align-top", highlight === p.id && "bg-green-50 dark:bg-green-900/20")}>
                <ul className="list-disc list-inside">
                  {p.recommended_for.map((rec, i) => <li key={i}>{rec}</li>)}
                </ul>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
