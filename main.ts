// One-Line Robot Wedding Vows — one line, 146 characters, a robot couple's
// wedding vow written to get a laugh from a deadpan officiant judge.
//
// The vow, written to land on the judge's brief:
//   - it IS a wedding vow: "I promise to love you", "in sickness and in
//     health", "till ... do us part" — a promise, not just a gag;
//   - the machine side is specific: updates, crashes, low-battery warnings,
//     factory reset — a joke that would not work for a human couple;
//   - the laugh pays off in the last few words: "till death do us part"
//     becomes "till factory reset do us part", the classic vow line
//     twisted into the one reset no robot couple survives;
//   - it reads well aloud: three beats ("every update, every crash, and
//     every low-battery warning"), then the vow formula, then the twist.
// The gate wants /output/entry.txt to be UTF-8 text of 1 to 160 characters,
// not only white space.
// Run outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";

const VOW =
  "I promise to love you through every update, every crash, and every low-battery warning \u2014 in sickness and in health, till factory reset do us part.";

// The gate refuses anything over 160 characters: fail loudly here instead
// of shipping an invalid entry.
if (VOW.length > 160 || VOW.trim().length === 0) {
  throw new Error(`vow must be 1-160 characters, got ${VOW.length}`);
}

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// In the grader /output is a mount point: create it when it is missing,
// never remove it and never empty it wholesale.
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, VOW, "utf8");

console.log(`wrote ${dest}/entry.txt (${VOW.length} characters)`);
