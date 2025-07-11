'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 sm:p-2 bg-background/80 hover:bg-background text-muted-foreground hover:text-foreground border border-border rounded transition-all duration-200 backdrop-blur-sm"
      title={copied ? '已复制!' : '复制代码'}
    >
      {copied ? (
        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
      ) : (
        <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
      )}
    </button>
  );
}