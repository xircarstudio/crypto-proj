import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Chinedu O.",
    title: "Business Owner, Lagos",
    image: "/images/chinedu.jpg",
    text: `I needed a reliable way to convert my crypto earnings to naira for business expenses. Since discovering this platform 3 months ago, I've completed over 50 transactions without a single issue.`,
    stars: 5,
  },
  {
    name: "Oluwaseun D.",
    title: "Crypto Trader, Port Harcourt",
    image: "/images/oluwaseun.jpg",
    text: `The speed is what impresses me most. I’ve tried five different conversion services, and nothing comes close to how quickly I get my naira.`,
    stars: 5,
  },
  {
    name: "Halima M.",
    title: "Student, Kano",
    image: "/images/halima.jpg",
    text: `As a student receiving financial support from family abroad, this platform has been a lifesaver. The process is so simple that even my non-tech-savvy relatives can use it.`,
    stars: 5,
  },
  {
    name: "Amina T.",
    title: "Freelance Developer, Abuja",
    image: "/images/amina.jpg",
    text: `As someone who gets paid in crypto by international clients, converting to naira used to be my biggest headache. Now it’s literally just three clicks and I’m done.`,
    stars: 5,
  },
  {
    name: "Ngozi E.",
    title: "Online Merchant, Enugu",
    image: "/images/ngozi.jpg",
    text: `I was skeptical about another crypto service, but the direct bank transfers won me over. No more juggling multiple apps and wallets just to access my own money.`,
    stars: 5,
  },
  {
    name: "Tunde B.",
    title: "Investment Advisor, Ibadan",
    image: "/images/tunde.jpg",
    text: `What stands out is the consistency. Every single transaction, regardless of size, is processed with the same efficiency. I’ve recommended this platform to all my clients who deal with cryptocurrency.`,
    stars: 5,
  },
  {
    name: "Victor O.",
    title: "Tech Entrepreneur, Kaduna",
    image: "/images/victor.jpg",
    text: `Running a startup means I need financial flexibility and immediate access to funds. This platform has revolutionized how I manage crypto-to-fiat conversions.`,
    stars: 5,
  },
];

export default function Testimonial() {
  return (
    <section className="bg-white pt-36 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        What Our Users Are Saying
      </h2>

      <div className="max-w-[1200px] px-6  mx-auto grid grid-cols-12 gap-6">
        {testimonials.map((t, index) => {
          let colSpanClass = "";
          if (index === 0 || index === 1 || index === 5 || index === 6) {
            colSpanClass = "col-span-12 md:col-span-6";
          } else {
            colSpanClass = "col-span-12 md:col-span-4";
          }

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`${colSpanClass} bg-white border rounded-xl p-6 shadow-sm flex flex-col space-y-4`}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.title}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">{t.text}</p>
              <div className="flex text-yellow-500">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
