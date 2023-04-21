import { preloadFonts } from "./utils";
import { TypeShuffle } from "./typeShuffle";

preloadFonts("biu0hfr").then(() => {
  document.body.classList.remove("loading");

  const textElement = document.querySelector(".content");
  const linkElement = document.querySelector(".effects");
  const linkElement1 = document.querySelector(".effects1");

  const ts = new TypeShuffle(textElement);
  const ts1 = new TypeShuffle(linkElement);
  const ts2 = new TypeShuffle(linkElement1);
  ts.trigger("fx6");
  ts1.trigger("fx5");
  ts2.trigger("fx5");

  function fx6() {
    return ts.trigger("fx6");
  }
  function fx4() {
    return ts2.trigger("fx6");
  }
  function fx5() {
    return ts1.trigger("fx5");
  }
  setInterval(fx6, 20000);
  setInterval(fx4, 20000);
  setInterval(fx5, 20000);
});
