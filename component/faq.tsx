import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, MoveDown } from "lucide-react";

export default function Faq() {
  const faqs = [
    {
      id: 1,
      question: "What types of furniture do you make?",
      answer:
        "We craft custom chairs, tables, cabinets, wardrobes, and more — all tailored to your style, space, and needs.",
    },
    {
      id: 2,
      question: "Do you use real wood?",
      answer:
        "Yes, we use high-quality solid wood and premium materials to ensure durability and beauty that lasts for decades.",
    },
    {
      id: 3,
      question: "Can I choose the design and finish?",
      answer:
        "Absolutely! Every piece is made according to your vision, including wood type, color, texture, and finishing details.",
    },
    {
      id: 4,
      question: "How long does it take to complete an order?",
      answer:
        "Most projects take between 2 to 6 weeks, depending on the complexity and size of the furniture.",
    },
    {
      id: 5,
      question: "Do you offer delivery and installation?",
      answer:
        "Yes, we deliver and professionally install your furniture so it's ready to use immediately.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-amber-900 uppercase tracking-tight">
            Frequently Asked Questions  
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-xl">
            Everything you need to know about our custom furniture process
          </p>
        </div>

        <Accordion 
          type="single" 
          collapsible 
          className="bg-white rounded shadow-lg overflow-hidden"
        >
          {faqs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={`item-${faq.id}`}
              className="border-b border-amber-100 last:border-0"
            >
              <AccordionTrigger className="flex items-center justify-between outline-none w-full p-6 py-12 text-left hover:bg-amber-50 transition-colors">
                <span className="font-semibold text-amber-00  text-xl ">
                  {faq.question}
                </span>
                <ChevronDown className="h-5 w-5 text-amber-600 transition-transform duration-300" />
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 bg-amber-50 text-amber-800">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center">
          <p className="text-amber-700 mb-4">
            Still have questions?
          </p>
          <button className="px-3 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white font-medium rounded-full hover:shadow-lg transition-shadow animate-bounce">
            <MoveDown />
          </button>
        </div>
      </div>
    </section>
  );
}