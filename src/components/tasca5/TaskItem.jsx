function TaskItem({ taskName, completed, canviTasca }) {
  return (
    <div>
      <input type="checkbox" checked={completed}   onChange={canviTasca} />
      <span>{taskName}</span>
    </div>
  );
}

export default TaskItem;