---
title: "Mastering Next.js in 30 Days"
date: "2024-10-22"
author: "Ajaypal Singh"
---

## Introduction

Next.js has rapidly become one of the most popular frameworks for building modern web applications. Developed by Vercel, Next.js combines the power of React with built-in support for server-side rendering, static site generation, API routes, and more. This guide will take you on a 30-day journey to master Next.js, complete with practical projects and best practices to level up your skills.

## Day 1-5: Getting Started with Next.js
### Topics Covered:
- Setting up your development environment
- Understanding file-based routing
- Introduction to pages and components
- Building your first Next.js app

Kick off your journey by setting up a new Next.js project using the `create-next-app` command:

```bash
npx create-next-app@latest my-next-app
cd my-next-app
npm run dev
```
Explore the folder structure, understand the importance of the pages directory, and start building basic pages and components:

```bash
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <p>This is the homepage.</p>
    </div>
  );
}
```
## Day 6-10: Styling and Layouts
### Topics Covered:
- CSS Modules
- Global styles and custom _app.js
- Layout components

To manage styles in Next.js, you can use CSS Modules. Create a Home.module.css file inside the styles folder:
```bash
/* styles/Home.module.css */
.container {
  margin: 0 auto;
  padding: 2rem;
  max-width: 800px;
}
```


Then, import and use it in your component:
```javascript 
// pages/index.js
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Next.js App</h1>
      <p>This is the homepage.</p>
    </div>
  );
}
```

## Day 11-15: Data Fetching in Next.js
### Topics Covered:
- getStaticProps
- getServerSideProps
- getStaticPaths
Next.js offers multiple ways to fetch data. Here's an example using getStaticProps:

```javascript 
// pages/posts.js
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default function Posts({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
``` 
## Day 16-20: API Routes
### Topics Covered:
- Creating API routes
- Connecting to a database
You can create serverless API routes directly in your Next.js application. Here's a simple example:
```javascript 
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello, Next.js!' });
}
```
Access this API route by visiting http://localhost:3000/api/hello.


## Day 21-25: Dynamic Routing and SSG
### Topics Covered:
- Dynamic routes
- getStaticPaths with dynamic pages
To create a dynamic route, you can use square brackets in the file name. Here's an example of a dynamic post page:
```javascript
// pages/posts/[id].js
export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
```

## Day 26-30: Deploying and Optimizing
### Topics Covered:
- Deployment to Vercel
- Image optimization
- Performance tuning

Deploying your Next.js app is straightforward with Vercel:

Create a GitHub repository for your project.
Push your project to GitHub.
Go to vercel.com and connect your GitHub account.
Import the repository, and Vercel will handle the deployment for you.
To optimize images, you can use the <Image /> component from next/image:

```javascript
// pages/index.js
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <Image
        src="/example.jpg"
        alt="Example Image"
        width={500}
        height={300}
      />
    </div>
  );
}
```

And there you have it! A complete journey to mastering Next.js in 30 days, with practical examples and projects to help you along the way.
