import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';

import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';
import rehypeExternalLinks from 'rehype-external-links';


import GoBackSVG from "@/components/goback/comp";
import "./page.scss"


const mdFolder = path.join(process.cwd(), 'content', 'blog');


export async function generateStaticParams() {
  const mdFolder = path.join(process.cwd(), 'content', 'blog');
  const files = fs.readdirSync(mdFolder);

  return files
    .filter((filename) => filename.endsWith('.md')) 
    .map((filename) => ({
      slug: filename.replace('.md', ''),
    }));
}


export async function getPostData(slug) {
  const markdownWithMeta = fs.readFileSync(
    path.join(mdFolder, `${slug}.md`),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  const processedContent = await remark()
    .use(remarkParse) // Parse markdown
    .use(remarkRehype, { allowDangerousHtml: true }) // Convert markdown to HTML, allowing raw HTML
    .use(rehypeRaw) // Parse the raw HTML
    .use(rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }) // Add target="_blank" to <a> tags
    .use(rehypeStringify) // Stringify the HTML
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    frontmatter,
    contentHtml,
  };
}

export default async function PostPage({ params }) {
  const { frontmatter, contentHtml } = await getPostData(params.slug);

  return (
    <div className='container'>
      <GoBackSVG url="/blog" />
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
    </div>
  );
}