import { mkdirSync, writeFileSync } from "node:fs";

// One line about a small good thing that happened today.
// Kept as a constant so every run writes byte-identical output:
// no randomness, no clock, no network, no model calls, no file reads.
const LINE =
  "Today my neighbour's cat, who has ignored me for two years, chose my lap at 4pm \u2014 and I sat perfectly still for an hour so I wouldn't ruin it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
