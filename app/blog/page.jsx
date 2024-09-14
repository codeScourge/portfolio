import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';

import GoBackSVG from "@/components/goba/comp";

const mdFolder = 'markdown/blog';

export async function getPosts() {
  const files = fs.readdirSync(path.join(mdFolder));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(
      path.join(mdFolder, filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return posts;
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <>
      <GoBackSVG url="/"/>
      <h1>Blog</h1>
      <ul>
        {posts.map(({ slug, frontmatter }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>
              {frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}