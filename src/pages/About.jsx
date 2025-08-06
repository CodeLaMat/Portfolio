import React from "react";
import myImage from "../assets/photos/20240426-20240426.jpg";

import classes from "../styles/About.module.scss";

const About = () => {
  return (
    <div className={classes.aboutMe}>
      <div>
        <h2>About Me</h2>

        <p>
          I'm a Helsinki-based digital operations and project specialist with a
          background spanning private companies, public-sector projects, and
          fast-moving startups. My work focuses on building efficient systems,
          coordinating cross-functional teams, and turning complex requirements
          into actionable solutions. Over the past several years, I’ve worked
          across roles in{" "}
          <span>
            digital transformation, ICT policy advising, compliance management,
            project management, and full-stack software development
          </span>
          . I've led initiatives ranging from workflow automation in the
          construction sector to agile platform development in education and
          public services. Whether working as a product owner, developer, or
          project coordinator, I focus on clarity, structured delivery, and
          outcomes that scale. I hold an MBA in Business Technologies (ongoing)
          and a vocational qualification in full-stack development. I'm{" "}
          <span>
            certified in project management (CAPM®), Scrum, and Microsoft 365
            project tools
          </span>
          . Technically, I’m fluent in tools like{" "}
          <span>
            Jira, SharePoint, Dynamics 365, and Git-based development
            environments
          </span>
          . With professional fluency in English and working proficiency in
          Finnish, I’ve collaborated with international teams across Europe and
          the Caucasus. I enjoy roles that combine communication with
          execution—where bridging gaps between people, tools, and processes
          leads to real impact. I'm a citizen of Finland and Azerbaijan.
        </p>

        <p>
          My technical skill set includes a range of languages and frameworks,
          such as{" "}
          <span>
            HTML, CSS/SCSS, TypeScript, JavaScript, Node.js (Express, Morgan),
            React (Next.js, Redux, Axios, Bootstrap, MUI), Vue.js (Nuxt.js,
            Quasar), Docker, Jest, MongoDB, Firebase, Git, AWS (EC2,
            CodeCommit), and CI/CD (Jenkins).
          </span>{" "}
          I leverage these technologies to build user-centric, efficient
          solutions.
        </p>
        <p>
          I have experience leading teams in <span>Agile </span>and{" "}
          <span>Scrum </span>environments, focusing on iterative development,
          sprint planning, and backlog management. My project management
          expertise includes project scoping, risk assessment, resource
          allocation, and maintaining alignment with key performance indicators
          (KPIs) and business objectives. I have managed national-scale
          projects, been involved in the review and preparation of ICT-related
          legal acts, and served as a member of the EU-Azerbaijan Sub-committee
          on Justice, Security, Human Rights, and Democracy.
        </p>
        <p>
          Currently, I am pursuing my Master of Business Administration (MBA)
          studies in Business Technologies at
          <span>Haaga-Helia University of Applied Sciences</span>. The program
          focuses on business technologies, leadership, and strategizing in
          organizations, enhancing my ability to drive digital transformation
          and lead innovative projects effectively.
        </p>
        <p>My soft skills as a project manager include:</p>
        <ul>
          <li>
            <span>Leadership:</span> Inspiring and guiding teams toward
            achieving project goals with a collaborative approach.
          </li>
          <li>
            <span>Communication:</span> Effectively conveying ideas to both
            technical and non-technical stakeholders, fostering understanding
            and alignment.
          </li>
          <li>
            <span>Problem-solving:</span> Identifying challenges early and
            implementing innovative, practical solutions to ensure project
            success.
          </li>
          <li>
            <span>Time management:</span> Prioritizing tasks and ensuring
            projects are completed within deadlines and budgets.
          </li>
          <li>
            <span>Conflict resolution:</span> Addressing conflicts
            constructively to maintain team cohesion and focus on objectives.
          </li>
          <li>
            <span>Adaptability:</span> Adjusting strategies to align with
            changing project requirements and environments.
          </li>
          <li>
            <span>Stakeholder management:</span> Building strong relationships
            with clients, vendors, and team members to ensure smooth project
            execution.
          </li>
        </ul>
        <p>
          I am proficient in collaboration and project management tools like{" "}
          <span>Figma</span>, <span>Trello</span>, <span>Jira</span>, and{" "}
          <span>Miro</span>, which help streamline workflows and enhance team
          productivity. Being fluent in several languages—including{" "}
          <span>Finnish, English, Turkish, and Russian</span>—allows me to work
          effectively in diverse teams.
        </p>
        <p>
          My combined expertise in software development and project management
          enables me to approach projects with a strategic mindset, ensuring
          technical solutions align with operational efficiency and business
          goals. I thrive on tackling challenges and continuously strive to
          improve processes within the teams I work with.
        </p>
      </div>
      <div className={classes.imageAboutme}>
        <div className={classes.imageWrapper}>
          <img className={classes.imgMe} src={myImage} alt="eyvaz.alishov" />
        </div>
      </div>
    </div>
  );
};

export default About;
