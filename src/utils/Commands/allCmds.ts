import { BCA_STUDY_MATERIAL, BCA_SYLLABUS } from "../../resources/impContent";
import { USER_PING_MESSAGES } from "../messages/messages";
import {
  BCA_SYLLABUS_CMD,
  BOOKS_CMD,
  COMMANDS,
  HELP_CMDS,
  NOTES_CMD,
  SOURCE,
} from "./instructions";
const IMP_COMMANDS = [...BOOKS_CMD, ...BCA_SYLLABUS_CMD];
export const User_AllCommands: string[][] = [
  COMMANDS,
  NOTES_CMD,
  IMP_COMMANDS,
  USER_PING_MESSAGES,
  HELP_CMDS,
  SOURCE,
];
