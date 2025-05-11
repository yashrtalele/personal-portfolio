const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "NodeJS"
    },
    {
      id: 2,
      name: "React"
    },
    {
      id: 3,
      name: "React Native"
    },
    {
      id: 4,
      name: "Typescript"
    },
    {
      id: 5,
      name: "PostgreSQL"
    },
    {
      id: 6,
      name: "DevOps"
    },
    {
      id: 7,
      name: "C++"
    }
  ];

  return (
    <section className="py-5">
      <h2 className="inline-block bg-black dark:bg-white text-white dark:text-black px-2 mb-10 text-2xl font-header font-bold">
        Skills
      </h2>


      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div key={skill.id} className="group relative">
            <span className="font-mono border border-gray-200 px-3 py-1 hover:border-black cursor-default">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
