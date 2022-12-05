import { h, JSX, Fragment } from "preact";
import { Link } from "../link";

export function HelpChooseProgramFirstTime(): JSX.Element {
  return (
    <>
      <h2 className="pb-2 text-xl">Choose a program</h2>
      <p className="pb-2">
        This screen lists the available pre-built programs, and gives you an option to create your own.
      </p>
      <p className="pb-2">
        If you're a beginner, consider starting with the pre-built program rather than creating your own.
      </p>
      <p className="pb-2">
        A program defines the list of workout days and the exercies for each day. It also defines the logic for
        increasing or decreasing reps and weights over time, depending on your workout performance.
      </p>
      <p className="pb-2">
        Each program has <strong>tags</strong>, which define the style of the program. Like, whether it's assumes you
        have access to <strong>barbell</strong>, or <strong>dumbbell</strong> only, whether it's{" "}
        <strong>beginner</strong> or
        <strong>intermediate</strong>, etc.
      </p>
      <p className="pb-2">
        After you pick a program, you can modify it in any way you want. The app is very flexible, you can change the
        reps/weights logic, using a special scripting language called{" "}
        <Link href="/docs/docs.html#liftoscript-tutorial">Liftoscript</Link>
      </p>
    </>
  );
}