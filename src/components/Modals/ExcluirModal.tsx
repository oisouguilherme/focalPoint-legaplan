import { toast } from "react-toastify";
import styles from "./ExcluirModal.module.css";

export function ExcluirModal({
  togleModal,
  setTasks,
  tasks,
  selectedTaskIndex,
  setSelectedTaskIndex,
}: any) {
  const handleDeleteTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(selectedTaskIndex, 1);
    setTasks(updatedTasks);
    togleModal(false);
    setSelectedTaskIndex(null);
    toast.success("Deletado com sucesso");
  };

  return (
    <div
      className={styles.overlay}
      onClick={() => {
        togleModal(false);
        setSelectedTaskIndex(null);
      }}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h3>Deletar tarefa</h3>
        <p>Tem certeza que você deseja deletar essa tarefa?</p>
        <div className={styles.buttons}>
          <button
            onClick={() => {
              togleModal(false);
              setSelectedTaskIndex(null);
            }}
          >
            Cancelar
          </button>
          <button onClick={handleDeleteTask}>Deletar</button>
        </div>
      </div>
    </div>
  );
}
