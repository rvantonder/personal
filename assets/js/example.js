(function() {
  var easter_egg, q;

  $(document).ready(function() {});

  q = 0;

  $(window).scroll(function() {
    if (($(window).scrollTop() + $(window).height()) === $(document).height()) {
      q += 1;
      if (q === 4) {
        return easter_egg();
      }
    }
  });

  easter_egg = function() {
    var txt;
    txt = "<br><br><br><hr/><br><h1>You found the easter egg :)</h1>";
    txt += "<p>This is primarily a collection of thoughts and sayings that I've collected over time.</p>";
    txt += "<h2>Things people have said that strike a chord with me</h2>";
    txt += "<p>'Never plan more than one month in advance. Maybe two' -- Ivan";
    txt += "<p>'In research, keep second guessing yourself' -- David";
    txt += "<p>'In research, you either have to be the first, or the best' -- Patrice";
    txt += "<p>'Dear Rijnard, Never give up on your dreams! Also, remember that smaller dreams are easier to achieve.' -- James Mickens";
    txt += "<p>'Don't cut something before making sure the knife is sharp' -- me";
    txt += "<p>'If you're not exercising 3 times a week, your priorities are wrong' -- can't remember</p>";
    txt += "<p>'Everyone has a plan 'till they get punched in the mouth.' - Mike Tyson";
    txt += "<p>'When you're on top there's only one way to go.' - ?</p>";
    txt += "<p>'Shoot, if you want bad stuff, watch the news.' - Bob Ross</p>";
    txt += "<h2>On \"Success\"</h2>";
    txt += "<p>The race is not to the swift,<br> Nor the battle to the strong,<br> Nor bread to the wise,<br> Nor riches to men of understanding,<br> Nor favor to men of skill;<br> But time and chance happen to them all.</p>";
    txt += "<img src=images/success.png>";
    txt += "<p>Whatever you want to be good at, it's about getting those 10,000 hours in (Malcolm Gladwell). Thats ~1.14 years.</p>";
    txt += "<h3>The Pareto Principle</h3>";
    txt += "<p>The Pareto principle says that for many events, roughly 80% of the effects come from 20% of the causes.</p>";
    txt += "<p>I *think* this applies to research as well. That basically means that, 80% of the significant (publishable?) research that I output, will result from only 20% of the things that I hope are significant. That's both frustrating and optimistic. Time will tell if it holds.</p>";
    txt += "<h3>More things I've encountered</h3>";
    txt += "<p>Parkinson's law of triviality and the queen with the duck</p>";
    txt += "<p>Fredkin's paradox and self-referential decisions to avoid the paradox that result in engaging in the same paradox.";
    txt += "<p>Hofstadter's law: \"It always takes longer than you expect, even when you take into account Hofstadter's Law.\"</p>";
    txt += "<p>\"It ain't what you don't know that gets you into trouble. It's what you know for sure that just ain't so.\" - Mark Twain</p>";
    return $("#base").append(txt);
  };

}).call(this);
