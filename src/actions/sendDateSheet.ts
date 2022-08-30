import { format } from "date-fns";
import * as WAWebJS from "whatsapp-web.js";
import { DateSheet } from "../resources/dateSheet";

export const sendDateSheet = (bot: WAWebJS.Chat) => {
  let message = "This is your *DateSheet*";

  DateSheet.forEach((dateSheet) => {
    message += `\n\nTERM :*${dateSheet.term}*\nEXAMS:`;
    dateSheet.exams.forEach((exam) => {
      message += `\n\nExam Name: *${exam.examName}*\nExam Date: ${format(
        exam.date,
        "do MMM YYYY"
      )}\nShift: *${exam.shift}*`;
    });
  });

  bot.sendMessage(message);
};
