import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

// Utility function to process markdown
async function getMarkdownContent(slug) {
  const filepath = `content/${slug}.md`;

  if (!fs.existsSync(filepath)) {
    return null;
  }

  try {
    const fileContent = fs.readFileSync(filepath, "utf-8");
    const { content, data } = matter(fileContent);

    // Initialize the processor
    const processor = createMarkdownProcessor();
    const htmlContent = (await processor.process(content)).toString();

    return { htmlContent, data };
  } catch (error) {
    console.error("Error reading or processing file:", error);
    return null;
  }
}

// Function to configure the markdown processor
function createMarkdownProcessor() {
  return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: '👋🌍' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3000,
        }),
      ],
    });
}

// Main page component
const Page = async ({ params }) => {
  console.log("params", params);
  
  // Get the processed content
  const contentData = await getMarkdownContent(params.slug);

  // If the file does not exist, show a 404 page
  if (!contentData) {
    notFound();
    return null;
  }

  const { htmlContent, data } = contentData;

  return (
    <div className="max-w-6xl mx-auto p-4 mt-20">
      <h1 className="text-4xl font-bold mb-4">{data?.title || "Untitled"}</h1>
      
      <div className="flex gap-2">
        <p className="text-sm text-gray-500 mb-4 italic">By {data?.author || "Unknown"}</p>
        <p className="text-sm text-gray-500 mb-4">{data?.date || "Unknown Date"}</p>
      </div>
      
      {/* Apply Tailwind prose classes for better spacing */}
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="prose prose-lg dark:prose-invert prose-pre:rounded-lg prose-pre:bg-gray-800 prose-pre:p-4 prose-pre:overflow-x-auto prose-pre:text-white"
      ></div>
    </div>
  );
};

export default Page;
