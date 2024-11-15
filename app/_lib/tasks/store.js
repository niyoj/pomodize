import { openDB } from "idb";

const DB_VERSION = 1;

export const IDB = openDB("pomodize", DB_VERSION, {
  upgrade(db, oldVersion, newVersion) {
    const store = db.createObjectStore("tasks", {
      keyPath: "id",
      autoIncrement: true,
    });

    store.createIndex("date", "date");
  },
});
