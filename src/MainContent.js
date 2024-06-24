import React from 'react';
import { motion } from 'framer-motion';
import './MainContent.css';

const MainContent = () => (
  <motion.main
    className="main-content"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2>Main Content</h2>
    {/* Add more elements as per the Figma design */}
  </motion.main>
);

export default MainContent;
