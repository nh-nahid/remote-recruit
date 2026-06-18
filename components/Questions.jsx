"use client";

import { useState } from "react";


const faqs = [
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "No long-term commitment required. You can start, pause, or cancel anytime. RemoteRecruit is built on flexibility — the same values we bring to the modern workforce.",
  },
  {
    question: "Can I pay for a whole year?",
    answer:
      "Yes! Annual billing is available and comes with a discount. It's a great option if you're planning to hire regularly or want uninterrupted premium access.",
  },
  {
    question: "What if I need help?",
    answer:
      "Our support team is here whenever you need them. You can reach us via live chat, email, or browse our help center — whichever works best for you.",
  },
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-5 sm:px-10 md:px-16 lg:px-30 pt-14 sm:pt-20">
      <h1 className="text-[28px] sm:text-[36px] md:text-[40px] font-medium leading-tight sm:leading-[52px]">
        Common Questions
      </h1>

      <div className="pt-8 sm:pt-12 space-y-0 divide-y divide-gray-100">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="py-5 sm:py-6">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex justify-between items-center text-left gap-4 group"
              >
                <p className="text-[16px] sm:text-[19px] leading-snug font-medium text-[#11142D] group-hover:text-[#1E3E85] transition-colors duration-200">
                  {faq.question}
                </p>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#53B4DAB1] flex items-center justify-center text-[#1E3E85] transition-transform duration-300 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              {/* Smooth accordion */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[200px] opacity-100 mt-3 sm:mt-4" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[13px] sm:text-[15px] leading-[30px] sm:leading-[35px] font-normal text-[#767784]">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="mt-10 sm:mt-15 mb-10 rounded-2xl border-2 text-[#1E3E85] border-[#53B4DAB1] h-[50px] px-6 text-[13px] font-semibold hover:bg-[#1E3E85] hover:text-white transition-all duration-300 active:scale-[0.97]">
        More Questions
      </button>
    </section>
  );
};

export default Questions;
