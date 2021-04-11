import { h } from "preact";
import { IRecordResponse } from "../src/api/service";
import { RecordHtml } from "../src/pages/record/recordHtml";
import { renderPage } from "./render";
import { IStorage } from "../src/types";
import { IEither } from "../src/utils/types";
import { DateUtils } from "../src/utils/date";
import { Exercise } from "../src/models/exercise";
import { History } from "../src/models/history";
import { StringUtils } from "../src/utils/string";
import { Weight } from "../src/models/weight";
import fetch from "node-fetch";

export function renderRecordHtml(data: IRecordResponse, userId: string, recordId: number): string {
  return renderPage(<RecordHtml data={data} userId={userId} recordId={recordId} />);
}

export async function recordImage(storage: IStorage, recordId: number): Promise<IEither<ArrayBuffer, string>> {
  const history = storage.history;
  const historyRecord = history.find((hi) => hi.id === recordId);
  if (historyRecord != null) {
    const json = {
      programName: historyRecord.programName,
      dayName: historyRecord.dayName,
      date: DateUtils.format(historyRecord.date),
      exercises: historyRecord.entries.map((entry) => {
        const exercise = Exercise.get(entry.exercise);
        const prSet = History.findPersonalRecord(recordId, entry, history);
        const set = History.getMaxSet(entry);
        const value = `${set?.completedReps || 0} ${StringUtils.pluralize(
          "rep",
          set?.completedReps || 0
        )} x ${Weight.display(
          Weight.convertTo(set?.weight || Weight.build(0, storage.settings.units), storage.settings.units)
        )}`;
        return {
          name: exercise.name,
          value,
          pr: !!prSet,
        };
      }),
    };

    const response = await fetch("https://xns95doaoh.execute-api.us-west-2.amazonaws.com/prod/recordogimage", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(json),
    });

    if (response.status === 200) {
      return { success: true, data: await response.arrayBuffer() };
    } else {
      return { success: false, error: await response.text() };
    }
  } else {
    return { success: false, error: `Missing history record with given id ${recordId}` };
  }
}