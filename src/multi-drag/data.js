// @flow
import type { Column, Entities, TaskMap } from './types';
import type { Task, Id } from '../types';
import tableData from '../data/Table';

// const tasks: Task[] = Array.from({ length: 20 }, (v, k) => k).map((val: number): Task => ({
//   id: `task-${val}`,
//   content: `Task ${val}`,
// }));

let result= tableData.columns.map((column, index) => {
  column.id=index;
  column.key =index;
  return column});
const tasks: Task[] = result;
console.log(tasks);


const taskMap: TaskMap = tasks.reduce((previous: TaskMap, current: Task): TaskMap => {
  previous[current.id] = current;
  return previous;
}, {});

const columns: Column = {
  id: 'columns',
  title: 'Columns',
  taskIds: tasks.map((task: Task): Id => task.id),
};

const table: Column = {
  id: 'table',
  title: 'Table',
  taskIds: [],
};

const entities: Entities = {
  columnOrder: [columns.id, table.id],
  columns: {
    [columns.id]: columns,
    [table.id]: table,
  },
  tasks: taskMap,
};

export default entities;
