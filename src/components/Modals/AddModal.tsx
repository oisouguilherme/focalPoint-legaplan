"use client";
import { useState } from "react";
import styles from "./AddModal.module.css";

export function AddModal({ togleModal, setTasks, tasks }: any) {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== "") {
      setTasks([...tasks, { title: newTaskTitle, completed: false }]);
      setNewTaskTitle("");
      togleModal(false);
    }
  };

  return (
    <div className={styles.overlay} onClick={() => togleModal(false)}>
      <div className={styles.modal}>
        <h3>Adicionar Nova Tarefa</h3>
        <input
          type="text"
          placeholder="Título da tarefa"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button onClick={handleAddTask}>Adicionar</button>
        <button onClick={() => togleModal(false)}>Cancelar</button>
      </div>
    </div>
  );
}
