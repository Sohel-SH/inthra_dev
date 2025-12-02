'use client'

import React from 'react'
import { useScrollTyping } from '@/hooks/useInView';

export function Features() {

    const { typed: aboutTyped, elementRef } = useScrollTyping("Inthra.", 70);

  return (
    <section
      id="features"
      className="relative bg-white text-gray-900 py-16 md:py-24"
    >
      <div className="relative container-custom transition-all duration-700">
        <div className="mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            About{" "}
            <span
              ref={elementRef}
              className="bg-gradient-to-r from-[#233EFF] via-[#233EFF] to-[#8c9eff] bg-clip-text text-transparent typing-caret"
            >
              {aboutTyped}
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center max-w-3xl mx-auto px-4">
            Built by insider threat engineers, Inthra turns complex user activity data into clear, actionable insight.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="p-4 md:p-6 border border-gray-100 rounded-2xl shadow-sm transition-transform duration-500 hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Who we are</h3>
            <p className="text-sm md:text-base text-gray-600">
              Founded by two leading insider threat security engineers, Inthra is an innovative insider threat tool that leverages Al, visual graph analytics and true intelligent detection rules. Inthra aims to detect near-real-time Insider activity, revolutionising the current insider threat detection capabilities currently found on the market from reactive into a proactive security measure, minimising the impact to your business.
            </p>
          </div>
          <div className="p-4 md:p-6 border border-gray-100 rounded-2xl shadow-sm transition-transform duration-500 hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">How it works</h3>
            <p className="text-sm md:text-base text-gray-600">
              When it comes to business, we have defined and solved the problem of multiple, messy data outputs into visually appealing and fully interactive graph analytics combined with LLM based searches, the focus is on clear and easy to query data. Inthra combines the data collected with further contextual information at every stage of analysis. Inthra makes hunting easy. Leaving traditional Monolog of ETL Inthra reimagines how staff data can be extracted and recorded via use of our simple workflow design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}