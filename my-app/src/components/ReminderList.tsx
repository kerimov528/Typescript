import React from "react";
// import {Reminder} from "../modules/Reminder";

export interface Reminder {
  id: number;
  title: string;
}

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => {
          return (
            <div className="d-flex position-relative align-items-center w-100">
              <li className="list-group-item w-100 p-3" key={item.id}>
                {item.title}
              </li>
              <div className="d-flex position-absolute end-0">
                <button className="btn btn-primary me-2">Add</button>
                <button
                  className="btn btn-danger"
                  onClick={() => onRemoveReminder(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default ReminderList;
