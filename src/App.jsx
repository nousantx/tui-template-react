import { useLayoutEffect } from "react";
import tenoxui, { defineProps as makeProps, makeStyles } from "tenoxui";

function App() {
  useLayoutEffect(() => {
    // adding new props
    makeProps({
      // type example
      d: "display",
    });
    // define styles
    makeStyles({
      // styler example
      body: "bg-#0d0d0d tc-white family-[font-body] m-0",
      code: "bg-[code-back] ph-6px pv-2px br-0.125rem fs-inherit",
      // reusable class example
      ".center": "d-flex flex-parent-center",
      ".w-full": "w-100%",
    });
    // init tenoxui
    tenoxui();
  });

  return (
    <>
      <section className="center w-full h-mn-100vh p-2rem ph-10vw">
        <header className="ta-center">
          <h1 className="fs-2.4rem">React x TenoxUI App</h1>
          <p className="mb-2rem tc-#aaa fs-14px">
            Try tenoxui! It's fast, sometimes :D
          </p>
          <p className="tc-gray fs-12px">
            Edit <code>/src/App.jsx</code>
          </p>
        </header>
      </section>
      <footer className="center w-full position-fixed b-0 p-1rem">
        <p className="fs-12px tc-#aaa">
          &copy; 2024 NOuSantx. Built with tenoxui/css
        </p>
      </footer>
    </>
  );
}

export default App;
