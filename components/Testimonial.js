import React from 'react'

const Testimonial = () => {
    const testimonials = [
        {
          name: "John Doe",
          title: "Content Creator",
          testimonial:
            "SinghBlog has transformed the way I share my thoughts. The interface is clean and easy to use!",
        },
        {
          name: "Jane Smith",
          title: "Blogger",
          testimonial:
            "I love how simple it is to create and publish content. The community is supportive, and I feel inspired every day.",
        },
        {
          name: "Mike Johnson",
          title: "Entrepreneur",
          testimonial:
            "The features offered are exactly what I need to connect with my audience. Highly recommend SinghBlog!",
        },
      ];
      
  return (
    <>
          <section className="py-20  dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blueGray-600 dark:text-white">
            What Our Users Say
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-blueGray-500 dark:text-gray-400">
            Hear from our amazing community of users!
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 px-4 mb-6"
            >
              <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
                <p className="text-lg italic text-blueGray-600 dark:text-gray-300 mb-4">
                  "{testimonial.testimonial}"
                </p>
                <div className="text-right">
                  <h4 className="font-semibold text-blueGray-600 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-blueGray-500 dark:text-gray-400">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Testimonial
