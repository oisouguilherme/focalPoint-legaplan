"use client";
import { useState } from "react";
import styles from "./AddModal.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function AddModal({ togleModal, setTasks, tasks }: any) {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const generateUniqueId = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };
  const handleAddTask = () => {
    if (newTaskTitle.trim() !== "") {
      setTasks([
        ...tasks,
        { id: generateUniqueId(), title: newTaskTitle, completed: false },
      ]);
      setNewTaskTitle("");
      togleModal(false);
      toast.success("Criado com sucesso");
    } else {
      toast.error("Digite pelo menos 1 caracter");
    }
  };

  return (
    <div className={styles.overlay} onClick={() => togleModal(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
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
