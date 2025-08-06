import React, { useState, useEffect } from "react";
import classes from "../../styles/Heading.module.scss";

const Heading = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  const typingSpeed = 100;
  const deletingSpeed = 50;

  useEffect(() => {
    const phrases = [
      "IT Change & Operations Specialist ",
      "IT Project Manager ",
      "Business-Development Leader ",
      "IT Change & Operations Specialist | IT Project Manager | Business-Development Leader & Full Stack Developer",
    ];
    if (pause) return;

    const handleTyping = () => {
      if (!deleting && subIndex < phrases[index].length) {
        setDisplayedText(phrases[index].substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);
      } else if (!deleting && subIndex === phrases[index].length) {
        setPause(true);
        setTimeout(() => {
          setDeleting(true);
          setPause(false);
        }, 1500);
      } else if (deleting && subIndex > 0) {
        setDisplayedText(phrases[index].substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    };

    const timeout = setTimeout(
      handleTyping,
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, pause]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className={classes.heading}>
      <div className={classes.heading_container}>
        <h1 className={classes.welcomeText}>
          👋 Hello there! I'm Eyvaz Alishov
        </h1>
        <h2 className={classes.welcomeMessage}>
          {displayedText}
          <span className={classes.cursor}>{blink ? "|" : " "}</span>
        </h2>
        <p className={classes.description}>
          I am an{" "}
          <span>
            IT Change & Operations Specialist | IT Project Manager |
            Business-Development Leader & Full Stack Developer{" "}
          </span>
          with over 10 years of experience driving market analyses, project
          development, and business growth initiatives. I have a proven track
          record in{" "}
          <span>
            leading complex projects from concept to financial close, including
            market entry strategies, financial modeling, and investment
            partnership management
          </span>
          . Skilled in coordinating cross-functional teams, engaging senior
          stakeholders, and navigating international, multicultural
          environments. Adept at using advanced analytical tools and digital
          platforms to support data-driven decision-making and optimize project
          outcomes. Passionate about enabling sustainable growth through
          strategic market development and operational excellence.
          <p className={classes.description}>
            Over the years, I have honed my skills by leading cross-functional
            teams and developing user-centric applications that drive business
            success. My expertise spans a wide array of modern technologies,
            including <span>React</span>, <span>Node.js</span>,{" "}
            <span>TypeScript</span>, and <span>JavaScript</span>, enabling me to
            deliver cutting-edge solutions that solve real-world problems.
          </p>
        </p>
        <p className={classes.description}>
          I am currently pursuing an <span>MBA in Business Technologies </span>
          at <span> Haaga-Helia University of Applied Sciences</span>. This
          program focuses on leadership, strategizing in organizations, and
          mastering digital transformation, further enhancing my ability to
          drive innovation and align technology with business goals.
        </p>
        <p className={classes.description}>
          This portfolio is a showcase of the projects I have worked on and the
          tangible impact they've made. From crafting full-stack applications to
          managing complex projects, I am passionate about innovation and
          aligning technology with business goals.
        </p>
        <p className={classes.description}>
          I am always open to feedback, collaborations, and opportunities to
          work on meaningful projects that make a difference. If you'd like to
          connect or discuss potential collaborations, feel free to reach out
          via the contact button below.
        </p>
        <p className={classes.description}>
          Thank you for stopping by, and I look forward to creating impactful
          digital solutions with you!
        </p>

        <div>
          <a href="/contact" role="button">
            <button type="button" className={classes.contact_button}>
              Contact Me Here
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Heading;
