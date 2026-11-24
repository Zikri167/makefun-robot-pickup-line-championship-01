// The Robot Pickup Line Championship
// Writes the funniest one-line pickup line a robot would use to /output/entry.txt.
// Chosen line: a robot confesses it threw away 9,999 pre-written lines for one person.
// Machine-native (creators, stored lines, deletion), unexpected turn (deletion as
// sincerity, not a pun), every word earns its place, charming, repeatable.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My creators gave me 10,000 pickup lines. I deleted 9,999 of them the moment I saw you.";

// Gate: 1-200 characters, single line, not only whitespace. Fail loudly
// instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n") || !LINE.trim()) {
  throw new Error(`Invalid entry line (${LINE.length} chars)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
