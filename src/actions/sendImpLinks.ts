import * as WAWebJS from "whatsapp-web.js";
import { IMP_LINKS } from "../resources/impLinks";
import { FOOTERS } from "../utils/reply/footers";
import { random } from "./sendMessage";

export const sendImpLinks = (bot: WAWebJS.Chat) => {
  let content = "These are the *⚠Important Links⚠* for us!";
  IMP_LINKS.forEach((impLink) => {
    content += `\n\n${impLink.name}\n${impLink.link}`;
  });
  content += `\n\n: ${FOOTERS.footers[random(FOOTERS.footerMsgLength)]}`;
  bot.sendMessage(content);
};
