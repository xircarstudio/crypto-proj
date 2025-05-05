"use client";
import { motion } from "framer-motion";
import BoredApe from "../../../assets/home/boredape.jpg";

const testimonials = [
  {
    name: "Chinedu O.",
    role: "Business Owner, Lagos",
    content:
      "I needed a reliable way to convert my crypto earnings to naira for business expenses...",
    stars: 5,
    img: "src/assets/home/nedu-L.png",
  },
  {
    name: "Amina T.",
    role: "Freelance Developer, Abuja",
    content: "As someone who gets paid in crypto by international clients...",
    stars: 5,
    img: "src/assets/home/halima.png",
  },
  {
    name: "Oluwaseun D.",
    role: "Crypto Trader, Port Harcourt",
    content: "The speed is what impresses me most...",
    stars: 5,
    img: "src/assets/home/nedu-L.png",
  },
  {
    name: "Ngozi E.",
    role: "Online Merchant, Enugu",
    content: "I was skeptical about another crypto service...",
    stars: 5,
    img: "src/assets/home/halima.png",
  },
  {
    name: "Tunde B.",
    role: "Investment Advisor, Ibadan",
    content: "What stands out is the consistency...",
    stars: 5,
    img: "src/assets/home/halima.png",
  },
  {
    name: "Halima M.",
    role: "Student, Kano",
    content: "As a student receiving financial support from family abroad...",
    stars: 5,
    img: "src/assets/home/halima.png",
  },

  {
    name: "Victor O.",
    role: "Tech Entrepreneur, Kaduna",
    content: "Running a startup means I need financial flexibility...",
    stars: 5,
    img: "src/assets/home/halima.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Test() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* First column - tall card + small card */}
        <div className="grid grid-rows-1 gap-4">
          <motion.div
            className="row-span-2 bg-white p-0 rounded-2xl shadow-md flex flex-col"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center gap-4">
              <img
                src="src/assets/home/nedu-L.png"
                alt="Victor"
                className="w-full h-full  object-cover"
              />
            </div>
            <div className="text-yellow-500 text-sm mt-2">★★★★★</div>
            <p className="text-gray-700 text-sm mt-2 flex-grow">
              Running a startup means I need financial flexibility...
            </p>
            <div>
              <p className="font-semibold">Victor O.</p>
              <p className="text-sm text-gray-500">Tech Entrepreneur, Kaduna</p>
            </div>
          </motion.div>

          <motion.div
            className="row-span-1 bg-white p-5 rounded-2xl shadow-md"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center gap-4">
              <img
                src="/images/tunde.jpg"
                alt="Tunde"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Tunde B.</p>
                <p className="text-sm text-gray-500">
                  Investment Advisor, Ibadan
                </p>
              </div>
            </div>
            <div className="text-yellow-500 text-sm mt-2">★★★★★</div>
            <p className="text-gray-700 text-sm mt-2">
              What stands out is the consistency...
            </p>
          </motion.div>
        </div>

        {/* Second column - grid of cards */}
        <div className="grid col-span-2  gap-4 h-fit">
          <motion.div
            className=" bg-white p-5 rounded-2xl shadow-md flex flex-col"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center gap-4">
              <img
                src="/images/victor.jpg"
                alt="Victor"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Victor O.</p>
                <p className="text-sm text-gray-500">
                  Tech Entrepreneur, Kaduna
                </p>
              </div>
            </div>
            <div className="text-yellow-500 text-sm mt-2">★★★★★</div>
            <p className="text-gray-700 text-sm mt-2 flex-grow">
              Running a startup means I need financial flexibility...
            </p>
          </motion.div>
          {testimonials.slice(3, 5).map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-md"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="text-yellow-500 text-sm mt-2">
                {"★".repeat(testimonial.stars)}
              </div>
              <p className="text-gray-700 text-sm mt-2">
                {testimonial.content}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid  gap-4 h-fit">
          {testimonials.slice(5, 8).map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-md"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="text-yellow-500 text-sm mt-2">
                {"★".repeat(testimonial.stars)}
              </div>
              <p className="text-gray-700 text-sm mt-2">
                {testimonial.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
