import React, { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import { Reminder } from "./components/ReminderList";
import ReminderClass from "./services/reminder";

function App() {
  const [reminder, setReminder] = useState<Reminder[]>([
    { id: 1, title: "Anar" },
  ]);
  const [loading, setloading] = useState<boolean>(true);
  // const reminders: Reminder[] = [
  //   { id: 1, title: "Anar" },
  //   { id: 2, title: "Turan" }
  // ]

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await ReminderClass.getData();
    setReminder(reminders);
  };

  const removeReminder = (id: number) => {
    const newReminder = reminder.filter(reminder => reminder.id !== id)
    setReminder(newReminder)
  };
  return (
    <div>
      {/* <button className="btn btn-danger mt-5">Close</button> */}
      <ReminderList items={reminder} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
