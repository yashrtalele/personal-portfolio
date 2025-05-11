import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Twitter, Github } from 'lucide-react';

const Info = () => {
  const interests = ["a developer.", "a linux/vim nerd.", "an anime junkie.", "a traveller."];
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentInterest = interests[currentIndex];

      if (!isDeleting) {
        if (currentText.length < currentInterest.length) {
          setCurrentText(currentInterest.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % interests.length);
        } else {
          setCurrentText(currentText.slice(0, -1));
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  return (
    <div
      className="flex flex-col md:flex-row justify-around items-center-safe"
    >
      <div className="text-center md:text-left mb-6 md:mb-0">
        <div className="text-2xl md:text-3xl font-info-header font-light mb-2">
          hi, i am <span className="inline-block bg-black font-info-header font-bold dark:bg-white text-white dark:text-black px-2">yash</span>
        </div>
        <div className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-2 h-6">
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block"
          >
            {currentText}<motion.span
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block ml-[1px]"
            >|</motion.span>
          </motion.span>
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          open to work
        </div>
        <div className="flex justify-center md:justify-start space-x-7">
          <a href="mailto:yash.talele97@gmail.com" className="hover:opacity-70 transition-opacity" aria-label="Email">
            <Mail size={20} />
          </a>
          <a href="https://x.com/0xYvsh" className="hover:opacity-70 transition-opacity" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="https://github.com/yashrtalele" className="hover:opacity-70 transition-opacity" aria-label="GitHub">
            <Github size={20} />
          </a>
        </div>
      </div>
      <div className="w-48 h-48 md:w-65 md:h-80 relative">
        <img 
          src="avatar.png"
          alt="Profile illustration" 
          className="w-full h-full object-fill"
        />
      </div>
    </div>
  );
}

export default Info;
