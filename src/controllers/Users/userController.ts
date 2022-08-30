import * as WAWebJS from "whatsapp-web.js";
import { help } from "../../actions/help";
import { sendCalendar } from "../../actions/sendCalendar";
import { sendMessage, random } from "../../actions/sendMessage";
import { sendNotes, sendNotesByFilter } from "../../actions/sendNotes";
import { sendSource } from "../../actions/sendSource";
import { BCA_STUDY_MATERIAL, BCA_SYLLABUS } from "../../resources/impContent";
import {
  BCA_SYLLABUS_CMD,
  BOOKS_CMD,
  CALENDAR_COMMANDS,
  CALENDAR_TYPOS,
  COMMANDS,
  HELP_CMDS,
  IMP_DATES,
  NOTES_CMD,
  SOURCE,
} from "../../utils/Commands/instructions";
import { USER_PING_MESSAGES } from "../../utils/messages/messages";
import { PING_REPLIES, USER_COMMANDS } from "../../utils/reply/replies";
export const userControl = (bot: WAWebJS.Chat, message: string) => {
  // Ping Message Reply
  if (USER_PING_MESSAGES.includes(message.toLocaleLowerCase())) {
    sendMessage(
      bot,
      PING_REPLIES.members[random(PING_REPLIES.memberMsgNumber)]
    );
    return;
    // Commands Message Reply
  } else if (COMMANDS.includes(message.toLocaleLowerCase())) {
    sendMessage(bot, USER_COMMANDS, true);
    return;

    // Notes Replies
  } else if (NOTES_CMD.includes(message.split(" ")[0].toLocaleLowerCase())) {
    if (message.split(" ").length > 1) {
      sendNotesByFilter(bot, message);
    } else {
      sendNotes(bot, "USER");
    }

    // Calender Replies
  } else if (
    CALENDAR_COMMANDS.includes(message.toLocaleLowerCase()) ||
    CALENDAR_TYPOS.includes(message.toLocaleLowerCase())
  ) {
    sendCalendar(bot);
  }

  // Help Commands Replies
  else if (HELP_CMDS.includes(message.toLocaleLowerCase())) {
    help(bot, "USER");
  }

  // Source Command Reply
  else if (SOURCE.includes(message.toLocaleLowerCase())) {
    sendSource(bot);
  }

  // For sending BCA_SYLLABUS
  else if (BCA_SYLLABUS_CMD.includes(message.toLocaleLowerCase())) {
    sendMessage(bot, BCA_SYLLABUS, undefined, true);
  }

  // For sending BCA BOOKS
  else if (BOOKS_CMD.includes(message.toLocaleLowerCase())) {
    sendMessage(bot, BCA_STUDY_MATERIAL, undefined, true);
  }
};
