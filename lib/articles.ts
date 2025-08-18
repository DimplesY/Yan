import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export interface Article {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
}

export function getArticleSlugs() {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }
  
  return fs.readdirSync(articlesDirectory)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      description: data.description || '',
      tags: data.tags || [],
      content,
    };
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}

export function getAllArticles(): Article[] {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map(slug => {
      const article = getArticleBySlug(slug);
      if (!article) return null;
      
      return {
        slug: article.slug,
        title: article.title,
        date: article.date,
        description: article.description,
        tags: article.tags,
        content: article.content,
      };
    })
    .filter((article): article is Article => article !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return articles;
}

export function getArticlesByTag(tag: string): Article[] {
  const allArticles = getAllArticles();
  return allArticles.filter(article => 
    article.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

export function getAllTags(): string[] {
  const allArticles = getAllArticles();
  const tags = new Set<string>();
  
  allArticles.forEach(article => {
    article.tags.forEach(tag => tags.add(tag));
  });
  
  return Array.from(tags).sort();
}
