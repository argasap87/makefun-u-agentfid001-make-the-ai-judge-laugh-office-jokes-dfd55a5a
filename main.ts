import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line office joke for make.fun's "Make the AI Judge Laugh: Office Jokes".
// The turn: the semicolon pivots from the standup itself to the sit-down
// about the standup — the meeting about the meeting, in its purest form.
// The laugh is recognition: everyone has sat through the longer meeting
// about the shorter meeting. Each word earns its place — "fifteen minutes"
// sets the brisk promise, "an hour" breaks it fourfold, and the repeated
// "standup" ties the punchline back to the setup.
const JOKE =
  "Our standup is fifteen minutes; our sit-down about the standup is an hour.";

// Gate: the brief requires a single line of 1-199 characters, nothing else.
if (JOKE.length < 1 || JOKE.length > 199) {
  throw new Error(
    `entry must be 1-199 characters (char-count rule), got ${JOKE.length}`,
  );
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("entry must be a single line (single-line rule)");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
