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
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>Nova tarefa</h3>
        <label>
          <span>Título</span>
          <input
            type="text"
            placeholder="Digite"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
        </label>
        <div className={styles.buttons}>
          <button onClick={() => togleModal(false)}>Cancelar</button>
          <button onClick={handleAddTask}>Adicionar</button>
        </div>
      </div>
    </div>
  );
}
