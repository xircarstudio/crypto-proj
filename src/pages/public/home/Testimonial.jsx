"use client";
import { motion } from "framer-motion";
import Row1, { Row3, Row2 } from "../components/TestimonialCard";

export default function Testimonial() {
  return (
    <>
      <div className="max-w-[1136px] mx-auto mt-40">
        <div className="home-header font-bold text-center m-12">
          What Our Users Are Saying
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Row1 />
            <Row2 />
            <Row3 />
          </div>
        </div>
      </div>
    </>
  );
}
