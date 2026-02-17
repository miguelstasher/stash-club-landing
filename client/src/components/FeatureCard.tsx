import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
    >
      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#026FE3] mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-[#101828]">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
