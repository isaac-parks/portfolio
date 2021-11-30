import coding from "../../images/coding.png";
import BlogPost from "./blog-post";
export default function Article3({ color }) {
  return (
    <>
      <BlogPost
        title="How I Found My Passion in Coding"
        articleImage={coding}
        date="November 21, 2021"
      />
      <p style={{ color: color }} className="content">
        Throughout my life, I’ve always been labeled as “the smart kid.” My
        parents were always proud of my good grades, classmates always wanted to
        look at my homework, and teachers would tell me that I was destined for
        great things. This sounds great, doesn’t it? To be honest, it really
        bothered me. Why? Because I didn’t have any passions whatsoever. There
        was always this talk about going to college and choosing what to study,
        but there wasn’t anything I could imagine studying that didn’t make me
        want to vomit.
        <br></br>
        <span style={{ color: color }} className="article-bold-text">
          ...But I still went to college
        </span>
        <br></br>
        Despite my weak stomach, I kept walking along the path that others had
        set out for me. I went to college and ended up studying marketing
        communications. It didn’t turn out nearly as bad as I thought it would,
        in fact, it turned out quite good. I had a blast working for my student
        newspaper, and got an incredible internship opportunity in New York as a
        small-town kid from Iowa. But it still felt like something was missing.
        While I enjoy marketing, it just doesn’t quite feel like my passion.
        <br></br>
        <span style={{ color: color }} className="article-bold-text">
          And that’s where programming comes into the picture.
        </span>
        <br></br>
        An important part of my identity is that I love learning. I am
        incredibly curious. Perhaps the best way to sum it up would be to say,
        “where others see paint drying on a wall, I see a complex chemical
        compound that was engineered in a way to retain its color and structural
        integrity for a myriad of years - also why do we even paint walls? What
        is this inherited concept of beauty that humans have that gives us the
        urge to do something like paint a wall? (and the rabbit hole
        continues).” Anyway, that is how I interpret the world.
        <br></br>
        <br></br>
        You can probably tell that it was quite easy for programming to spark my
        interest. The “push” that led me to learn my first programming language
        (Python) was seeing a video about NASA and their Mars rovers. It was
        amazing to me that we could write instructions for a computer to make it
        perform autonomously on Mars, how cool! When I started writing my own
        programs, I didn’t even realize that it was what I wanted to do in terms
        of my career - I was just having a ton of fun. I read fascinating books
        about algorithms and data structures. I built Discord Bot in Python
        using the discord.py library, a website scraper to curate sources for my
        college classes, and a script that automatically ran every morning to
        autonomously complete my daily COVID check-in for on-campus students (I
        always forgot to do them, so I thought, why not?).
        <br></br>
        <span style={{ color: color }} className="article-bold-text">
          What was the next step?
        </span>
        <br></br>
        As I got closer to graduation, I realized that I wouldn’t mind spending
        the rest of my life coding - so why not try to get into a career doing
        it? When I began researching the types of jobs I could get in
        development, Front-end seemed like the perfect fit. It combines the best
        of both of the things I enjoy - marketing and coding. At the end of the
        day, front-end development is based around providing a great experience
        for clients - very similar to marketing. You have to think about what a
        customer expects, and how to live up to those expectations. So here I am
        today - ridiculously excited to have found my passion, and blessed
        enough to be able to work towards fulfilling my dreams with that passion
        in mind.
      </p>
    </>
  );
}
