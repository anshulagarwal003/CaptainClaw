import chalk from "chalk";
import { select, isCancel } from "@clack/prompts";

export async function runCliMode() {
  while (true) {
    const mode = await select({
      message: "Choose CLi sub-mode",
      options: [
        { value: "agent", label: "Agent Mode" },
        { value: "plan", label: "Plan Mode" },
        { value: "ask", label: "Ask Mode" },
        { value: "back", label: "<- back to main menu" },
      ],
    });

    if (isCancel(mode) || mode === "back") {
      return;
    } else if (mode === "agent") {
      console.log("Agent it is");
    } else if (mode === "ask") {
      console.log("Ask it is");
    } else if (mode === "plan") {
      console.log("Plan it is");
    } else {
      console.log("This mode is not implemented yet");
    }
  }
}
