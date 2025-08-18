import { isCancel, text } from '@clack/prompts';
import path from "node:path";
import fs from "node:fs";
import { format } from 'date-fns';

const BASE_DIR = path.join(process.cwd(), 'content/articles');

async function main() {

  const title = await text({
    message: 'Article Title (required)',
    placeholder: 'Enter the title of the article',
    defaultValue: 'New Article',
    validate(value) {
      if (value.length === 0) return `Value is required!`;
    },
  });


  // 判断取消
  if(isCancel(title)) {
    console.log('Canceled');
    process.exit(0);
  }


  const slug = title.toString().toLowerCase().replace(/ /g, '-');

  const content = `---
title: "${title.toString()}"
date: "${format(new Date(), 'yyyy-MM-dd')}"
description: ""
tags: []
---
  `;

  const filePath = path.join(BASE_DIR, `${slug}.md`);

  fs.writeFileSync(filePath, content);

  console.log(`Article created successfully: ${filePath}`);
}


main().then(() => process.exit(0))
