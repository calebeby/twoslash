import Head from "next/head";
import { useEffect } from "react";
import { setupTwoslashHovers } from "shiki-twoslash/dist/dom";

export default function Home(props: ReturnType<typeof getStaticProps>["props"]) {
  useEffect(setupTwoslashHovers, []);

  return (
    <>
      <Head>
        <title>Shiki Twoslash: Incredible Static Code Samples</title>
        <meta name="description" content="You take some Shiki, add a hint of TypeScript compiler, and 🎉! Incredible static code samples" />
      </Head>

      <main className="main">
        <article className="container border-red">
          <div className="intro">
            <p>
              The documentation concerning
              <br />
              the npm modules of
            </p>
            <h1 className="title">Shiki-Twoslash</h1>
            <p>
              In which markdown code samples are powered by
              <br />
              the syntax engine of Visual Studio Code
              <br />
              mixed with the TypeScript compiler’s information.
            </p>
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem", marginBottom: "3rem" }}>
            <img src={"./svgs/squiggle.svg"} alt="Decoration" width={70} height={25.5} />
          </div>

          <div className="intro">
            <p className="by">By orta therox</p>
            <p>
              Purveyor of renowned open source code
              <br />
              and TypeScript compiler team member
            </p>
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <img src="./svgs/logo.svg" alt="Shiki Logo" width={167} height={238} />
          </div>
        </article>

        <Split num={0} />    


        <article className="container border-yellow" id="shiki">
          <div style={{ textAlign: "center" }}>
            <img src="./svgs/shiki.svg" alt="The word 'shiki'" width={309} height={95} />
          </div>

          <div className="split-50-50">
            <div className="left-margin-1">
              <p>
                <span className="eu">V</span>isual Studio Code’s syntax highlighter packaged for running in a web browser and statically via Node.js.
              </p>
              <p>
                Supports all possible languages available on the VS Code extension marketplace. That’s over 200 languages. All you need is a{" "}
                <code>.tmlangauge</code> file for anything not shipped with Shiki.
              </p>
              <p>Shiki colours your code with any VS Code theme. That’s {Math.round(props.stats.themeCount/100) * props.stats.themeCount}+ last time we checked.</p>
            </div>

            <div className="left-margin-1">
              <p>Fig 1.</p>
              <p className="center-small">
                <img src="./svgs/fig-1-code.svg" alt="The word 'shiki'" width="246" height="284" />
              </p>
            </div>
          </div>
        </article>

        <article className="container border-blue" id="twoslash">
          <div style={{ textAlign: "center" }}>
            <img src="./svgs/twoslash.svg" alt="The word 'twoslash'" width={501} height={92} />
          </div>

          <div className="split-50-50">
            <div className="left-margin-1">
              <p>
                <span className="eu">T</span>hink of twoslash as a pre-processor for your code-samples.
              </p>
              <p>Twoslash is a JavaScript and TypeScript markup language. You can write a single code sample which describes an entire JavaScript project</p>
              <p>Twoslash uses the same compiler APIs as your text editors to provide type-driven hover information, accurate errors and</p>
              <p>
                Each code sample is compiled in isolation, so you can be certain all your examples still compile and work right a few major versions down the
                line.
              </p>
            </div>

            <div className="left-margin-1">
              <p>Fig 2.</p>
              <p className="center-small">
                <img src="./svgs/fig-2-code.svg" alt="The word 'shiki'" width="331" height="270" />
              </p>
            </div>
          </div>
        </article>


        <Split num={1} />    

        <article className="container border-blue" id="markup">
          <h2><a href="#markup">#</a>Chapter 1: Twoslash Markup</h2>

          <Point msg="When you mix Shiki with Twoslash you can have extremely accurate syntax highlighting for JavaScript and TypeScript. The syntax highlighting has been maintained by the TypeScript team for years and gets updated with new TypeScript releases." />

          <Code code={props.html.basic.replace("twoslash", "").replace("twoslash", "").replace("lsp", "")} />

          <Point msg="By default, code samples rendered by shiki-twoslash have all of their IDE hover information embedded inside the HTML. With a hint of JavaScript, you can support mouse-hovering in the browser. Try hovering below:" />

          <Code code={props.html.basic} />

          <Point msg="The name Twoslash refers to specially formatted comments which can be used to set up your environment, like compiler flags or separate input files. For example, here is a code sample showing export/importing a function:" />

          <TwoCode source={props.html.multiFileSrc} output={props.html.multiFileHTML} />

          <Point msg="You can write comment queries to have the twoslash powered code-samples highlight types without user interaction." />

          <TwoCode source={props.html.multiFileHighSrc} output={props.html.multiFileHighHTML} />

          <Point msg="And if a code sample becomes un-focused, you can snip it down to just the bit that matters. The compiler still verifies everything ahead of time." />

          <TwoCode source={props.html.multiFileSnipSrc} output={props.html.multiFileSnipHTML} />

          <Point msg="To some extent, anything your editor can show you about code, Twoslash can show. For example, here is the real auto-complete for an express app in JS:" />

          <TwoCode source={props.html.expressSrc} output={props.html.expressHTML} />

          <Point msg="Are you wondering where the types come from? Express is a JavaScript library, it does not ship types. During the build process Shiki-Twoslash can use types from your app’s node_modules folder. I just had to run: <code>yarn add @types/express</code>.<br/><br/>You probably don't want to only show golden-path code too, showing <em>how</em> code goes wrong is also a critical way to understand code. Shiki Twoslash has native support for TypeScript compiler errors." />

          <TwoCode source={props.html.errorSrc} output={props.html.errorHTML} />

          <Point msg="You see how we declared which errors were expected in the source? That means if this code sample errors with something else, Shiki Twoslash will fail to render.<br /><br />Failing rocks because your CI will tell you that your code samples are out of date." />
        </article>



        <article className="container border-blue" id="shiki">
          <h2><a href="#shiki">#</a>Chapter 2: Shiki</h2>

          <Point msg="Twoslash Shiki is a polite but hard fork of the Shiki code rendering engine. Let's look at a few of the Shiki Twoslash features" />

          <Code code={props.html.theme} />

          <Point msg="Twoslash Shiki is a polite but hard fork of the Shiki code rendering engine. Let's look at a few of the Shiki Twoslash features" />

          <Code code={props.html.theme} />

        </article>

      </main>
    </>
  );
}

const Point = (props: { msg: string }) => {
  const msg = `<span class="eu">${props.msg[0]}</span>${props.msg.substring(1)}`
  return <p className="mid-6" dangerouslySetInnerHTML={{__html: msg }} />
}

const Code = (props: { code: string }) => <div className="mid-8" dangerouslySetInnerHTML={{ __html: props.code }} />;

const TwoCode = (props: { source: string; output: string }) => (
  <div className="mid-10">
    <div style={{ paddingRight: "5px" }}>
      <span className="source">Source</span>
      <div dangerouslySetInnerHTML={{ __html: props.source }} />
    </div>
    <div style={{ marginLeft: "5px" }}>
      <span className="output">Output</span>
      <div dangerouslySetInnerHTML={{ __html: props.output }} />
    </div>
  </div>
);

const Split = (props: { num: number }) => <div className="split"><img src={`./svgs/split-${props.num}.svg`} /></div>

// Grabs the code samples
export function getStaticProps() {
  const fs = require("fs");

  return {
    props: {
      stats: fs.readFileSync("script/stats.json", "utf8"),
      html: {
        basic: fs.readFileSync("examples/render/basic.ts.html", "utf8"),
        multiFileSrc: fs.readFileSync("examples/render/multi-file.ts_src.html", "utf8"),
        multiFileHTML: fs.readFileSync("examples/render/multi-file.ts.html", "utf8"),
        multiFileHighSrc: fs.readFileSync("examples/render/multi-file-highlight.ts_src.html", "utf8"),
        multiFileHighHTML: fs.readFileSync("examples/render/multi-file-highlight.ts.html", "utf8"),
        multiFileSnipSrc: fs.readFileSync("examples/render/multi-file-snip.ts_src.html", "utf8"),
        multiFileSnipHTML: fs.readFileSync("examples/render/multi-file-snip.ts.html", "utf8"),
        expressSrc: fs.readFileSync("examples/render/express.js_src.html", "utf8"),
        expressHTML: fs.readFileSync("examples/render/express.js.html", "utf8"),
        errorSrc: fs.readFileSync("examples/render/errors.ts_src.html", "utf8"),
        errorHTML: fs.readFileSync("examples/render/errors.ts.html", "utf8"),
        theme: fs.readFileSync("examples/render/theme.ts.html", "utf8"),
      },
    },
  };
}
