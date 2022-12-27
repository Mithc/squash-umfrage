import "dotenv/config";
import handler from "./dist/lambda/index.js";

await handler({
  detail: {
    chatId: -842671953,
    forwardChatId: [-842671953],
    poll: { question: "Test", options: ["yes", "no"] },
  },
});
