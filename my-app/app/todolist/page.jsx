"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Todo() {
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [Task, setTask] = useState([]);

  

  const defaultTasks = [
    {
      id: 1,
      Title: "Read Book",
      Description: "You must read this book",
      completed: false,
    },
    {
      id: 2,
      Title: "Play Tennis",
      Description: "This exercise improve your health",
      completed: false,
    },
  ];

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasklist"));
    if (saved && saved.length > 0) {
      setTask(saved);

    } else {
      setTask(defaultTasks);
      localStorage.setItem("tasklist", JSON.stringify(defaultTasks));
    }
    setLoading(false)
  }, []);


useEffect(() => {
  if (!loading) {
    localStorage.setItem("tasklist", JSON.stringify(Task));
  }
}, [Task, loading]);

  const handleSave = () => {
    if (!title || !description) {
      alert("Your title or description is empty");
      return;
    }
    const newTask = {
      id: Task.length + 1,
      Title: title,
      Description: description,
      completed: false,
    };
    alert("Your task has been added");
    setTask([...Task, newTask]);
    setTitle("");
    setDescription("");
    setShowNewTaskForm(false);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "linear-gradient(to right,red,blue)",
        minHeight: "100vh",
      }}
    >
      <strong
        style={{ marginBottom: "22px", color: "white", fontSize: "22px" }}
      >
        Todo List
      </strong>

      {loading ? (
        <div style={{ color: "white", fontSize: "20px" }}>Loading...</div>
      ) : (
        <>
          {Task.map((item) => (
            <div
              key={item.id}
              style={{ backgroundColor: item.completed ? "green" : "" }}
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={(e) => {
                  setTask(
                    Task.map((t) =>
                      t.id === item.id
                        ? { ...t, completed: e.target.checked }
                        : t
                    )
                  );
                }}
              />
              <strong style={{ color: "white" }}>
                <Link href={`/todolist/${item.id}`}>{item.Title}</Link>
              </strong>
            </div>
          ))}
        </>
      )}

      {!showNewTaskForm && (
        <button
          onClick={() => setShowNewTaskForm(true)}
          type="button"
          style={{
            color: "white",
            backgroundImage:
              "linear-gradient(to right, #22d3ee, #06b6d4, #0891b2)",
            border: "none",
            borderRadius: "8px",
            fontWeight: "500",
            fontSize: "14px",
            padding: "10px 20px",
            textAlign: "center",
            marginRight: "3px",
            marginBottom: "8px",
            cursor: "pointer",
            outline: "none",
            marginTop: "11px",
          }}
        >
          Add
        </button>
      )}

      {showNewTaskForm && (
        <>
          <div style={{ display: "flex" }}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #d1d5db",
                color: "#111827",
                fontSize: "0.875rem",
                borderRadius: "0.5rem",
                padding: "0.625rem",
                width: "100%",
                marginTop: "11px",
              }}
              placeholder="Add new title"
            />
            <button
              style={{
                width: "20%",
                height: "40px",
                marginTop: "10px",
                borderRadius: "11px",
              }}
              onClick={() => setShowNewTaskForm(false)}
            >
              x
            </button>
          </div>

          <div style={{ display: "flex" }}>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #d1d5db",
                color: "#111827",
                fontSize: "0.875rem",
                borderRadius: "0.5rem",
                padding: "0.625rem",
                width: "100%",
                marginTop: "11px",
              }}
              placeholder="Add new description"
            />
            <button
              style={{
                width: "20%",
                height: "40px",
                marginTop: "10px",
                borderRadius: "11px",
              }}
              onClick={() => setShowNewTaskForm(false)}
            >
              x
            </button>
          </div>

          <button
            onClick={() => handleSave()}
            type="button"
            style={{
              color: "white",
              backgroundImage: "linear-gradient(to right, #22c55e, #15803d)",
              border: "none",
              borderRadius: "8px",
              fontWeight: "500",
              fontSize: "14px",
              padding: "10px 20px",
              textAlign: "center",
              marginRight: "3px",
              marginBottom: "8px",
              cursor: "pointer",
              outline: "none",
              marginTop: "11px",
            }}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
}
