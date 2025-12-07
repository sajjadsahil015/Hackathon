import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

interface TerminalBlockProps {
  commands: {
    linux?: string;
    windows?: string;
    mac?: string;
  };
}

export default function TerminalBlock({ commands }: TerminalBlockProps) {
  const tabs = [];
  if (commands.linux) tabs.push({ label: 'Linux', value: 'linux', content: commands.linux });
  if (commands.windows) tabs.push({ label: 'Windows', value: 'windows', content: commands.windows });
  if (commands.mac) tabs.push({ label: 'macOS', value: 'mac', content: commands.mac });

  if (tabs.length === 0) return null;

  return (
    <div className="my-6">
      <div className="bg-gray-800 text-gray-200 px-4 py-2 rounded-t-md text-sm font-mono flex items-center">
        <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
        <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
        <span className="ml-2">Terminal</span>
      </div>
      <Tabs defaultValue={tabs[0].value} values={tabs.map(t => ({ label: t.label, value: t.value }))}>
        {tabs.map((tab) => (
          <TabItem key={tab.value} value={tab.value}>
            <CodeBlock language="bash" showLineNumbers>
              {tab.content}
            </CodeBlock>
          </TabItem>
        ))}
      </Tabs>
    </div>
  );
}
