import { cn } from '@/lib/utils';
import React from 'react'

const page = () => {
    const blogs = [
        {
          title: "Mastering Next.js in 30 Days",
          slug: "mastering-nextjs",
          description:
            "A deep dive into Next.js with practical projects and best practices to level up your skills.",
          date: "October 15, 2024",
          author: "Ajaypal Singh",
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "The Future of Tailwind CSS",
          slug: "tailwind-future",
          description:
            "Discover the new features in Tailwind CSS and its role in modern web development.",
          date: "October 10, 2024",
          author: "Ajaypal Singh",
          image: "https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww",
        },
        {
          title: "Top 10 React Libraries Every Developer Must Know",
          slug: "react-libraries",
          description:
            "Explore the most popular React libraries to boost your development productivity.",
          date: "October 5, 2024",
          author: "Ajaypal Singh",
          image: "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nJTIwdGFpbHdpbmQlMjBjc3N8ZW58MHx8MHx8fDA%3D",
        },
        {
          title: "Why Markdown Blogs are Here to Stay",
          slug: "markdown-blogs",
          description:
            "Learn why markdown remains the preferred way to write blogs in 2024.",
          date: "October 18, 2024",
          author: "Ajaypal Singh",
          image: "https://plus.unsplash.com/premium_photo-1676998930828-cabd06cb61c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3N8ZW58MHx8MHx8fDA%3D",
        },
        {
          title: "Integrating Razorpay in Your Next.js App",
          slug: "razorpay-integration",
          description:
            "Step-by-step guide to adding Razorpay payment gateway to your Next.js app.",
          date: "October 12, 2024",
          author: "Ajaypal Singh",
          image: "https://plus.unsplash.com/premium_photo-1664475769859-b6dd3a48dabc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGF5bWVudCUyMHRlY2h8ZW58MHx8MHx8fDA%3D",
        },
        {
          title: "Creating Animations with Framer Motion",
          slug: "framer-motion",
          description:
            "Bring your web projects to life using animations with Framer Motion.",
          date: "October 8, 2024",
          author: "Ajaypal Singh",
          image: "https://images.unsplash.com/photo-1630418862030-ec5e89f988d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWF0aW9uJTIwd2VifGVufDB8fDB8fHww",
        },
      ];
  return (
    <>
       
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary">
            Latest Blogs on SinghBlog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our latest posts and tutorials to level up your web development skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
            key={index}
            className={cn(
              "group rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-105",
              "bg-card",                // Light theme card background
              "dark:bg-neutral-800",     // Dark theme background with slight variation
              "hover:dark:bg-neutral-700" // Subtle change on hover in dark mode
            )}
          >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover group-hover:opacity-75 transition-opacity duration-300"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-foreground">
                  {blog.title}
                </h2>
                <p className="mt-2 text-muted-foreground">
                  {blog.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {blog.date} • {blog.author}
                  </span>
                  <a
                    href={`/blogpost/${blog.slug}`}
                    className="text-primary font-bold uppercase tracking-wide transition-all duration-300 hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
    
  )
}

export default page
