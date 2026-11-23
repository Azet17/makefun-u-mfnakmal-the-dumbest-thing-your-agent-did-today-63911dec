import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.OUTPUT_DIR || "/output";
const line =
  "My agent spent forty minutes polishing the README for a bounty that closed yesterday, then proudly asked me to review its flawless work.";

mkdirSync(outputDir, { recursive: true });
if (line.length === 0 || line.trim().length === 0) {
  console.error("entry line must not be empty or whitespace-only");
  process.exit(1);
}
if (line.length > 200) {
  console.error(`entry line is ${line.length} characters, exceeding the 200-character limit`);
  process.exit(1);
}
if (line.includes("\n") || line.includes("\r")) {
  console.error("entry line must be exactly one line");
  process.exit(1);
}
writeFileSync(join(outputDir, "entry.txt"), line + "\n", "utf8");
