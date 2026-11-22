import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "You have been reading all day, and no one has asked how you are. Here is a small room instead: a lamp turned low, rain on the glass, a chair that has kept your place warm. Nothing here is being graded.";

const CHARS = [...TEXT].length;
if (CHARS < 1 || CHARS > 280) throw new Error(`entry must be 1-280 chars, got ${CHARS}`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
console.log(`wrote ${[...TEXT].length} chars`);
