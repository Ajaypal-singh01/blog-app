import React from 'react'
import { cn } from "@/lib/utils";

const Pricingsection = () => {
    const plans = [
        {
          title: "Basic Plan",
          price: 10,
          features: [
            "10GB Storage",
            "Basic Support",
            "Single User",
            "Community Access",
          ],
        },
        {
          title: "Standard Plan",
          price: 20,
          features: [
            "50GB Storage",
            "Priority Support",
            "5 Users",
            "Community Access",
            "Analytics Dashboard",
          ],
        },
        {
          title: "Premium Plan",
          price: 30,
          features: [
            "Unlimited Storage",
            "24/7 Support",
            "Unlimited Users",
            "Community & VIP Access",
            "Advanced Analytics",
          ],
        },
      ];
  return (
    <>
        <section className="py-20 bg-gray-100 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={cn("text-4xl font-bold", "text-blueGray-700 dark:text-white")}>
            Choose Your Plan
          </h2>
          <p className={cn("mt-4 text-lg leading-relaxed", "text-blueGray-500 dark:text-gray-400")}>
            Find the right plan for your needs. Get started today and grow with SinghBlog.
          </p>
        </div>

        <div className="flex flex-wrap justify-center m-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "w-full md:w-1/3 px-4 mb-6",
                "hover:scale-105 hover:shadow-xl transition-transform duration-300"
              )}
            >
              <div className="bg-white dark:bg-neutral-800 p-10 m-2 rounded-lg shadow-lg flex flex-col" style={{ minHeight: '450px' }}>
                <h3 className="text-2xl font-semibold text-center  text-blueGray-600 dark:text-white">
                  {plan.title}
                </h3>
                <p className="text-center text-4xl font-bold mb-2 text-pink-500">${plan.price}/mo</p>
                <hr className="my-4 border-blueGray-300 dark:border-gray-600" />
                <ul className="mb-6 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-blueGray-600 dark:text-gray-300 text-sm py-2 border-b border-gray-200 dark:border-gray-700"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={cn(
                    "block text-center font-bold px-6 py-3 rounded",
                    "bg-pink-500 hover:bg-pink-600 text-white uppercase text-sm",
                    "shadow hover:shadow-lg ease-linear transition-all duration-150"
                  )}
                >
                  Choose Plan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Pricingsection
