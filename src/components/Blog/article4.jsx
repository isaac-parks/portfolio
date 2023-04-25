import BlogPost from "./blog-post";
import isaac from "../../images/isaac.png";
import { useEffect } from "react";
export default function Article4({ color }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <BlogPost date="April 25, 2023" articleImage={isaac} title="Etude" />
      <p style={{ color: color }} className="content">
        It feels like it's been YEARS since I was cooped up in my dorm room,
        desperately trying to sponge up information about programming in hopes
        that I would be able to get a dev job straight out of college (even
        though my degree was in Marketing). In reality, it's only been just over
        a year. It's hard to believe! Relax old me, you did it! Take a shower!
        <br></br>
        That's right, just over a year ago, on January 3, 2022, I got my first
        job as a software developer. I was hired as a Full Stack developer at a
        company in Urbandale, IA. To say it was overwhelming at first is an
        understatement. Coming into it, the only experience I had with software
        development was less than a year's worth of self-taught knowledge. On
        top of that - this was a full stack position. The only type of
        “development” I had done up to that point was front end!
        <br></br>I will never forget my third day at that job. I was sitting in
        our “dev room” with a fellow junior developer who had several months of
        experience on me, and a senior developer. We were learning about SQL,
        which of course, I had zero experience with. The senior developer was
        walking us through some of the tables the team used, and was trying to
        explain how foreign key relationships worked between them. At one point,
        she asked me if I could explain how two tables were related to each
        other when given a list of their column names. I have never felt dumber.
        I had no idea! I went home that night feeling so hopeless. However!
        Realizing how fortunate I was to have been given this job opportunity, I
        worked incredibly hard to catch up. After work each night, I would spend
        hours watching SQL (and ASP.NET) videos to catch up. And sure enough, I
        did just that. Within four months at that job, I got my first raise. One
        month after that, I felt that my skills outgrew this job and I wasn't
        learning as much, so I left for a new job on a much bigger team working
        on a much more modern and challenging codebase.
        <br></br>
        When I look back at the crazy journey I've had in such a short amount of
        time, not much has really changed. I mean, here I am cooped up in my
        room at 1:00 a.m., with a book about a CS topic on one monitor (in this
        case it's{" "}
        <em>
          Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow)
        </em>{" "}
        and a few VSCode windows on the other. The only difference is some of
        those windows are work related. Oh, and I'm like, way smarter and better
        at programming.
      </p>
    </>
  );
}
