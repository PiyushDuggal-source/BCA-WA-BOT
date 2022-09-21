import * as WAWebJS from "whatsapp-web.js";
import { MessageType } from "../types/types";
import { adminControl } from "./Admin/adminController";
import { userControl } from "./Users/userController";

export const main = (
  bot: WAWebJS.Chat,
  message: WAWebJS.Message,
  role: MessageType
) => {
  if (role === "ADMIN") {
    // Slice for removing BOT_PREFIX
    adminControl(bot, message);
  } else if (role === "USER") {
    userControl(bot, message);
  }
};
