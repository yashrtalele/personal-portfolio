const AboutMe = () => {
  return (
    <section className="py-10">
      <h2 className="inline-block bg-black dark:bg-white text-white dark:text-black px-2 mb-6 text-2xl font-header font-bold">
        About Me
      </h2>

      <ul
        className="space-y-3"
      >
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span className="font-ibm">full stack developer</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span className="font-ibm">final semester for master's in CS @ IIIT Bangalore</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span className="font-ibm">intern @ amazon</span>
        </li>
      </ul>
    </section>
  );
};

export default AboutMe;
