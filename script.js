// date info
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// tasks container
const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
  const date = new Date();

  dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
  dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
  dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
  dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
}

const addNewTask = e => {
  e.preventDefault();
  const { value } = e.target.taskText;

  if (!value) return;

  const task = document.createElement('div');

  task.classList.add('task', 'roundBorder');
  task.addEventListener('click', changeTaskState);
  task.textContent = value;
  tasksContainer.prepend(task);

  e.target.reset();
}

const changeTaskState = e => {
  e.target.classList.toggle('done');
}

const order = e => {
  const done = [];
  const toDo = [];

  tasksContainer.childNodes.forEach( node => {
    node.classList.contains('done') ? done.push(node) : toDo.push(node);
  })

  return [...toDo, ...done];
}

const renderOrderedTasks = () => {
  order().forEach(node => tasksContainer.appendChild(node));
}

setDate();
