import BlogPost from "./blog-post";
import tesla from "../../images/tesla.png";
import { useEffect } from "react";
export default function Article1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <BlogPost
        date="March 30, 2021"
        articleImage={tesla}
        title="I Made Enough Money to Pay off College by Day Trading. Here's Why You Shouldn't Do it."
      />
      <p className="content">
        If you know anything about the stock market, chances are you’ve heard of
        day trading. Day trading involves buying high risk, highly volatile
        securities, and then selling them within a short time frame. Day traders
        use technical analysis in order to make plays. While very risky, it can
        reap incredible rewards. Many people who have mastered the art make day
        trading their source of full-time income.<br></br>
        <br></br> If you’ve ever Googled day trading, you’ve probably been
        bombarded with ads trying to sell you courses about how to become a
        millionaire doing it. Lots of flashy entrepreneurs make it seem easy.
        This is not the case at all. What many people won’t tell you, is that
        90% of day traders fail.
        <span className="article-bold-text">High stress, high emotion</span>
        Contrary to what I just said, day trading itself is pretty easy. It
        isn’t difficult to learn patterns and strategies in just a few months –
        they aren’t nearly as complicated as you may think. The extreme
        challenge of day trading comes from most people’s inability to control
        their emotions. Watching a stock go up and down several percent at a
        time is hard to handle, especially when you’re watching your account
        value rise and fall hundreds of dollars with it. The most important part
        of day trading is finding a working strategy, and sticking to it.
        Emotions get in the way of this. Seasoned day traders are familiar with
        terms like bag holding and FOMO, which are some of the most common
        mental mistakes people make.
        <span className="article-bold-text">Patience</span> The other big
        problem with day trading is that people simply don’t have the passion or
        the patience for it. Day trading is often marketed as a way you can quit
        your 9-5 job, and work 2 hours a day from anywhere in the world. While
        it’s true that you can make huge gains in a short amount of time, it
        takes a lot of patience to wait for winning opportunities. Most of the
        time, you’ll have to stare at your computer screen for several hours
        watching stocks before entering a position. Not many people have the
        passion to do this and for most it can be quite boring. The worst part
        is that when you start to get inpatient, you start to see patterns and
        entry points that aren’t actually there (which ultimately leads to you
        losing money).{" "}
        <span className="article-bold-text">A skill that needs developing</span>{" "}
        Finally, most people don’t understand that day trading is a skill, and
        that it requires a lot of practice to get good. I started day trading
        when I was 18, and wasn’t profitable until I was 21 (you can lose a lot
        of money in 3 years). It isn’t enough to hear about common mistakes and
        avoid them, you’ll probably have to make those mistakes yourself and
        learn from them. It can take several years to become a good day trader,
        most people don’t have it in them to lose money for that long. So should
        you give day trading a shot? t If you have an interest for it and think
        it is something you may like, go for it. Start small and don’t risk a
        ridiculously high amount of money you aren’t willing to lose.
      </p>
    </>
  );
}
