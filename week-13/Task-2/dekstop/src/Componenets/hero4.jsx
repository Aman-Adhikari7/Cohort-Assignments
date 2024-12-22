import  { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "What is Tailwind CSS?", answer: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs." },
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "How does useState work?", answer: "useState is a React hook that allows you to add state to functional components." },
    { question: "How does useState work?", answer: "useState is a React hook that allows you to add state to functional components." },
  ];

  return (
    <div id="faq" className=" max-w mx-auto mt-10 mb-20">
        <div className="mt-12 mb-10 mt-10 flex flex-col items-center text-center">
        <h1 className="mb-6 text-3xl font-bold ">Frequently Asked Questions</h1>
        <p className="w-[70%]">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>

        </div>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          {/* Question */}
          <button
            onClick={() => toggleAnswer(index)}
            className="w-full text-left p-4 bg-gray-200 rounded-md shadow cursor-pointer hover:bg-gray-300 transition"
          >
            {faq.question}
          </button>

          {/* Answer */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-[200px] p-4" : "max-h-0"
            } bg-gray-100 rounded-md`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
