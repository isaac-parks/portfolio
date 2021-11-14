import BlogPost from "./blog-post";
import money from "../../images/money.png";
export default function Article2() {
  return (
    <>
      <BlogPost
        date="April 13, 2021"
        articleImage={money}
        title="3 Quick Ways to Start Saving Money"
      />
      <p className="content">
        One of the most important skills required to build wealth is knowing how
        to save your money. It may sound simple, but it’s a bit more difficult
        than it seems. Without a proper plan, it can be easy to let your
        spending get ahead of itself, and for your savings to take the hit for
        it. <br></br>{" "}
        <span className="article-bold-text">Tracking expenses</span>
        Consistently tracking how much money you are spending is crucial to
        saving. One of the biggest reasons people spend more money than they
        should is due to “micro purchases.” When a person is grocery shopping,
        for example, and you see a $3 dollar food item that you don’t really
        need, it’s not uncommon to think, “one $3 purchase won’t really hurt.”{" "}
        <br></br>While this might be true at the time, people do this a lot more
        than they should. Constantly doing this throughout the month can easily
        end up costing you an extra (several) hundred dollars in expenses.{" "}
        <br></br>
        Keeping track of what you spend, and having a running monthly balance is
        very important. Keeping a written balance may seem outdated, but there
        are more modern ways to do it. Wally, for example, is a great app for
        helping you keep track of how much you’re spending. It keeps all of your
        bank accounts in one easy to find place, which makes it great for seeing
        where your money is going. <br></br>
        <span className="article-bold-text">
          Cut out the extra, set priorities
        </span>
        Six months ago I looked at one of my monthly bank statements for the
        first time in several months. I was shocked to see I had still been
        paying a $20 monthly subscription for a service I hadn’t used in years.
        <br></br>Once you start recording your expenses and paying more
        attention to what you’re spending money on, you’ll be shocked at how
        much extra stuff you buy. Too often people buy things to impress other
        people or make impulse decisions to make purchases they don’t really
        need. <br></br>Make a list of items you feel like you actually need. It
        isn’t a bad thing to have a Spotify subscription, if it’s something you
        use consistently and benefit from. However, if you have a premium
        Netflix subscription you pay $20 for every month, it’s probably best to
        downgrade, or even cancel it all together. <br></br>
        <span className="article-bold-text">Budgeting and goal setting</span>
        Perhaps the most important aspect of saving money is budgeting. Every
        month you should have a good estimate as to where your money is going.
        Before each month begins, plan out how much money you plan on spending,
        and stick to it. <br></br>A big mistake people make is spending all of
        their discrectionary income each month. You should also be setting
        savings goals, such as a certain amount towards investments.
      </p>
    </>
  );
}
