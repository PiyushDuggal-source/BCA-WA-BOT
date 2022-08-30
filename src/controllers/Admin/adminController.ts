import * as WAWebJS from "whatsapp-web.js";
import { sendMessage, random } from "../../actions/sendMessage";
import { USER_PING_MESSAGES } from "../../utils/messages/messages";
import { PING_REPLIES, USER_COMMANDS } from "../../utils/reply/replies";
import {
  BCA_SYLLABUS_CMD,
  BOOKS_CMD,
  COMMANDS,
  DSA_CMD,
  HELP_CMDS,
  IMP_DATES,
  IMP_LINK_CMD,
  NOTES_CMD,
  PREVIOUS_YEAR_QPs,
  SOURCE,
} from "../../utils/Commands/instructions";
import { sendNotes, sendNotesByFilter } from "../../actions/sendNotes";
import { help } from "../../actions/help";
import { sendSource } from "../../actions/sendSource";
import { sendImpLinks } from "../../actions/sendImpLinks";
import {
  BCA_STUDY_MATERIAL,
  BCA_SYLLABUS,
  DSA,
  PREVIOUS_YEAR_QUESTIONS,
} from "../../resources/impContent";

export const adminControl = (bot: WAWebJS.Chat, message: string) => {
  // Ping Replies
  if (USER_PING_MESSAGES.includes(message.toLocaleLowerCase())) {
    sendMessage(bot, PING_REPLIES.admin[random(PING_REPLIES.adminMsgNumber)]);

    // Notes Replies
  } else if (NOTES_CMD.includes(message.split(" ")[0].toLocaleLowerCase())) {
    if (message.split(" ").length > 1) {
      sendNotesByFilter(bot, message);
    } else {
      sendNotes(bot, "ADMIN");
    }

    // Commands Replies
  } else if (COMMANDS.includes(message.toLocaleLowerCase())) {
    sendMessage(bot, USER_COMMANDS, true);
  }

  // Help Commands Replies
  else if (HELP_CMDS.includes(message.toLocaleLowerCase())) {
    help(bot, "ADMIN");
  }

  // Source Command Reply
  else if (SOURCE.includes(message.toLocaleLowerCase())) {
    sendSource(bot);
  }

  // For sending Playlists
  else if (IMP_LINK_CMD.includes(message.toLocaleLowerCase())) {
    sendImpLinks(bot);
  }

  // For sending BCA_SYLLABUS
  else if (BCA_SYLLABUS_CMD.includes(message.toLocaleLowerCase())) {
    sendMessage(bot, BCA_SYLLABUS, undefined, true);
  }

  // For sending BCA BOOKS
  else if (BOOKS_CMD.includes(message.toLocaleLowerCase())) {
    sendMessage(bot, BCA_STUDY_MATERIAL, undefined, true);
  }

  // For sending PREVIOUS_YEAR_QPs
  else if (PREVIOUS_YEAR_QPs.includes(message.toLocaleLowerCase())) {
    sendMessage(bot, PREVIOUS_YEAR_QUESTIONS, undefined, true);
  }

  // For sending DSA
  else if (DSA_CMD.includes(message.toLocaleLowerCase())) {
    sendMessage(bot, DSA, undefined, true);
  }
};
