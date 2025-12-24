import BlogPost from "./blog-post";
import airplane from "../../images/ppl.png";
import { useEffect } from "react";
export default function PilotArticle({ color }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <BlogPost date="April 25, 2023" articleImage={airplane} title="The time I became a pilot" />
        <p style={{ color: color }} className="content">
        When I was a kid, I was obsessed with washing machines. Yes—washing machines.
        I vividly remember going to my cousin’s house when their family bought a
        brand-new front loader with all the bells and whistles. While everyone else
        went about their day, I sat on the floor in front of it for the entire
        hour-long cycle, completely transfixed.
        <br></br>
        <br></br>
        Looking back, I think what fascinated me was the idea that you could put in
        something dirty, let a machine do some work, and get a clean result on the
        other side. <em>Input, process, output.</em> In hindsight, that fascination
        holds up pretty well—that’s essentially what programming is all about.
        <br></br>
        <br></br>
        Over time, my interest in washing machines evolved into a broader love of
        understanding how things work. Whether it was an electric toothbrush, a car,
        or a computer, I wanted to know what was happening under the hood. One
        interest, though, stayed with me my entire life: aviation.
        <br></br>
        <br></br>
        In January of 2022, I started my first job as a software developer. One of the
        very first things I did after I started making big boy money was book a
        discovery flight at my local airport, KDSM. A discovery flight is essentially
        an introduction to flight training—a chance to see what learning to fly is
        actually like. My discovery flight was awesome. I was immediately hooked.
        Unfortunately, as a fresh college grad, I had no money. If there’s one thing
        that sucks about aviation, it’s the cost. And so began the saving. I saved for
        four years until I finally had enough to start flight training. On December
        1st, 2022, I had my first official flight lesson.
        <br></br>
        <br></br>
        My excitement was quickly replaced with terror and regret the moment we took
        off.
        <br></br>
        <br></br>
        We were flying a Pipistrel Alpha Trainer—a tiny airplane with a relatively
        powerful engine. Because of that, it has to be flown fairly aggressively to
        avoid stalling or overspeeding. Combine that with the fact that airplanes
        perform even better in cold air, and the first takeoff felt like being
        launched from a slingshot. I’ve always struggled with motion sickness, so that
        initial leap into the air was deeply uncomfortable.
        <br></br>
        <br></br>
        I remember my instructor calmly talking on the radio during the climb,
        discussing airspeed management and departure procedures, while I could barely
        think straight and felt like I was on the verge of blacking out. The only
        thought running through my head was, <em>there’s no way I’ll ever be able to do
        this.</em>
        <br></br>
        <br></br>
        Unfortunately, the lesson only got worse. My instructor demonstrated several
        maneuvers required for a pilot’s license, including steep turns and ground
        reference maneuvers. In a steep turn, the airplane is banked sharply while
        maintaining altitude, which increases the load factor—or G-forces—on the
        body. Essentially, you weigh more than normal, and your inner ear is very
        aware of it. After four or five of those puppies, I was barely holding it
        together. I tried desperately to push through, but eventually I had to admit
        defeat and let my instructor know that I was about to barf in his plane.
        <br></br>
        <br></br>
        On the flight back to the airport, I felt completely crushed. I wasn’t cut out
        for this dream I’d had since I was a kid. I stared out at the incredible view
        below us, taking it all in, because I genuinely believed this would be the
        last time I’d ever experience it.
        <br></br>
        <br></br>
        After a long internal struggle—and a lot of regret—I did what any reasonable
        person would do in this situation. I decided to book another lesson.
        <br></br>
        <br></br>
        The second lesson was just as bad. So was the third. But somehow, I kept
        showing up. It was the most difficult thing I had ever done—physically,
        emotionally, and mentally exhausting in a way I hadn’t experienced before.
        Every flight felt like a battle between the excitement of learning to fly and
        the overwhelming discomfort of air sickness.
        <br></br>
        <br></br>
        Eventually, through research and conversations with other flight instructors,
        I learned something that surprised me: motion sickness is extremely common
        among new student pilots. Your body simply isn’t used to moving through three
        dimensions while also trying to process an overwhelming amount of
        information. That realization didn’t make it easy—but it made it survivable.
        <br></br>
        <br></br>
        So I pushed and pushed. After about 10 lessons, the motion sickness had
        disappeared entirely.
        <br></br>
        <br></br>
        People often underestimate how much there is to learn when becoming a pilot.
        Aerodynamics, weather, systems, regulations, navigation—it’s an enormous
        cognitive load. But that part played directly to my strengths. Once the
        physical barrier was gone, I felt unstoppable. I leaned into the learning and
        kept pressing forward. One instructor even told me I’d given him one of the
        best ground lessons he’d ever had with a student, simply because of how deeply
        I understood some of the material.
        <br></br>
        <br></br>
        After almost a year of training, on November 13, 2025, I took my checkride,
        which is the final practical exam required to earn a pilot’s license. This was
        the day I became a private pilot.
        <br></br>
        <br></br>
        Not long after getting my license, I had an amazing opportunity to buy into a
        fractional ownership of an airplane. It felt surreal. Something that had once
        seemed impossibly distant had quietly become real.
        <br></br>
        <br></br>
        Looking back, the connection feels obvious. The washing machines I obsessed
        over as a kid weren’t really about washing clothes. They were about putting
        something messy in, committing to the process, and trusting that if you stayed
        long enough—through the noise, the shaking, and the discomfort—you’d get
        something better out the other side. Flight training was exactly the same. I
        put in fear, frustration, and uncertainty, and after months of grinding
        through the cycle, the output was competence, confidence, and a pilot
        certificate.
        <br></br>
        <br></br>
        Not only did I accomplish my childhood dream, I learned many life long
        lessons.
        </p>
    </>
  );
}
