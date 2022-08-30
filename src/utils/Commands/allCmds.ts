import { USER_PING_MESSAGES } from "../messages/messages";
import {
  BCA_SYLLABUS_CMD,
  BOOKS_CMD,
  COMMANDS,
  DSA_CMD,
  HELP_CMDS,
  NOTES_CMD,
  PREVIOUS_YEAR_QPs,
  SOURCE,
} from "./instructions";
const IMP_COMMANDS = [
  ...BOOKS_CMD,
  ...BCA_SYLLABUS_CMD,
  ...DSA_CMD,
  ...PREVIOUS_YEAR_QPs,
];
export const User_AllCommands: string[][] = [
  COMMANDS,
  NOTES_CMD,
  IMP_COMMANDS,
  USER_PING_MESSAGES,
  HELP_CMDS,
  SOURCE,
];
