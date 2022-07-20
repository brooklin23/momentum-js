const quotes = [
  {
    quote:
      "Above all: to thine own self me true,And it must follow, as the night the day, Thou canst not then be false to any man.",
    author: "Hamlet",
  },
  {
    quote:
      "He will not go behind his fathers saying, And he likes having thought of it so well… Good fences make good neighbors.",
    author: "Mending Wall",
  },
  {
    quote:
      "When you are suffering, when you are unhappy, stay totally with what is Now. Unhappiness or problems cannot survive in the Now.",
    author: "Eckhart Tolle",
  },
  {
    quote:
      "So dont worry about tomorrow, for tomorrow will bring its own worries. Todays trouble is enough for today.",
    author: "Matthew 6:34",
  },
  {
    quote:
      "The more you try to avoid suffering, the more you suffer, because smaller and more insignificant things begin to torture you, in proportion to your fear of being hurt. The one who does most to avoid suffering is, in the end, the one who suffers most.",
    author: "Thomas Merton",
  },
  {
    quote:
      "When you can’t control what’s happening, challenge yourself to control the way you respond to what’s happening. That’s where your power is!",
    author: "The Minds Journal",
  },
  {
    quote:
      "How many hours are there in a mile? Is yellow square or round? Probably half the questions we ask – half our great theological and metaphysical problems – are like that.",
    author: "C.S. Lewis",
  },
  {
    quote:
      "The definition of insanity is doing the same thing over and over again and expecting a different result.",
    author: "Einstein",
  },
];

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

function randomGenerator() {
  const order = Math.floor(Math.random() * quotes.length);
  return order;
}

quote.innerText = `"${quotes[randomGenerator()].quote}"`;
author.innerText = `- ${quotes[randomGenerator()].author} -`;
