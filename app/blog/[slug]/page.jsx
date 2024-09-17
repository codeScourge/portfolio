import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import "./page.scss"

import GoBackSVG from "@/components/goback/comp";

const mdFolder = path.join(process.cwd(), 'content', 'blog');

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join());

  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));  
}

export async function getPostData(slug) {
  const markdownWithMeta = fs.readFileSync(
    path.join(mdFolder, `${slug}.md`),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  const processedContent = await remark().use(html).process(content);
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