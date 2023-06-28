import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "Personal Assistant",
    duration: "3 years",
    details:
      "Skilled in organizing and streamlining business processes, implementing effective systems, and ensuring efficient workflow.  Strong communication and interpersonal skills, facilitating seamless coordination with clients, colleagues and external stakeholders. Proficient in handling sensitive and confidential  information, maintaining utmost discretion and confidentiality. Efficiently manages multiple businesses and projects simultaneously, ensuring deadlines are met and objectives are achieved. Demonstrates exceptional problem-solving abilities, quickly addressing any challenges or obstacles that arise in the business operations. Excellent multitasking skills, adept managing complex schedules, arranging meetings, and coordinating logistics.  Collaborates effectively with other team members and external vendors to ensure smooth operations and successful outcomes. ",
  },
  {
    year: 2020,
    title: "Freelancer",
    duration: "3 years",
    details:
      "Extensive experience providing comprehensive support to clients seeking immigration assistance.Proficient in preparing and filling immigration forms, petitions and applications. Excellent research and analytical skills to support  legal arguments and strategies. roficient in utilizing legal databases and software for case management and document preparation. Committed to providing exceptional client service and maintaining confidentiality of  sensitive information. Detail-oriented and meticulous in reviewing legal documents and identifying potential issues or discrepancies.",
  },
  {
    year: 2019,
    title: "Paralegal",
    duration: "1 year",
    details:
      "Proficient in conducting legal research, drafting legal documents, and assisting in case preparation for trials, hearings, and depositions. Skilled in managing case files, organizing documents, and maintaining accurate and up-to-date records using legal document management systems. Proficient in preparing and filing legal pleadings, motions, and discovery requests, ensuring compliance with court rules and deadlines. ",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        <a
          href="https://docs.google.com/document/d/1S5h3DOab4OLNxSU2CRAWArPJs7yEY4kHCavwLAUdmUw/edit?usp=sharing"
          className="inline-block bg-[#001b5e]  text-white px-4 py-2 rounded-md hover:bg-[#00163a]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Work/Resume
        </a>
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
