"use client";
import { IconTrash } from "@/assets/Icons";
import styles from "./ListTarefa.module.css";
import { useState } from "react";
import { AddModal } from "../Modals/AddModal";

export function ListTarefa() {
  const [tasks, setTasks] = useState<any>([]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState<any>(null);

  const handleCompleteTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(selectedTaskIndex, 1);
    setTasks(updatedTasks);
    setShowDeleteModal(false);
    setSelectedTaskIndex(null);
  };

  const activeTasks = tasks.filter((task: any) => !task.completed);
  const completedTasks = tasks.filter((task: any) => task.completed);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.lista}>
          <h2>Suas tarefas de hoje</h2>
          <div>
            {activeTasks.length > 0 ? (
              activeTasks.map((task: any, index: any) => (
                <div key={index} className={styles.item}>
                  <label>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleCompleteTask(index)}
                    />
                    <span
                      style={{
                        textDecoration: task.completed
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {task.title}
                    </span>
                  </label>
                  <div
                    onClick={() => {
                      setSelectedTaskIndex(index);
                      setShowDeleteModal(true);
                    }}
                  >
                    <IconTrash />
                  </div>
                </div>
              ))
            ) : (
              <p>Adicione uma Tarefa</p>
            )}
          </div>
        </div>

        <div>
          <h2>Tarefas finalizadas</h2>
          <div>
            {completedTasks != 0 ? (
              completedTasks.map(
                (task: any, index: any) =>
                  task.completed && (
                    <div key={index} className={styles.item}>
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleCompleteTask(index)}
                      />
                      <span style={{ textDecoration: "line-through" }}>
                        {task.title}
                      </span>
                      <div
                        onClick={() => {
                          setSelectedTaskIndex(index);
                          setShowDeleteModal(true);
                        }}
                      >
                        <IconTrash />
                      </div>
                    </div>
                  )
              )
            ) : (
              <p>Nenhuma Tarefa Finalizada</p>
            )}
          </div>
        </div>
      </div>

      <button onClick={() => setShowAddModal(true)} className={styles.button}>
        Adicionar nova tarefa
      </button>

      {showAddModal && (
        <AddModal
          togleModal={setShowAddModal}
          setTasks={setTasks}
          tasks={tasks}
        />
      )}

      {showDeleteModal && (
        <div className={styles.modal}>
          <h3>Tem certeza que deseja fazer isso?</h3>
          <button onClick={handleDeleteTask}>Sim</button>
          <button
            onClick={() => {
              setShowDeleteModal(false);
              setSelectedTaskIndex(null);
            }}
          >
            Não
          </button>
        </div>
      )}
    </div>
  );
}
