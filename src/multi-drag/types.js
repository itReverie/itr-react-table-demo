// @flow
//import type { Id, Task } from '../types';
import type { DraggableId, DraggableLocation } from 'react-beautiful-dnd/src/types';

export type Column = {|
  id: Id,
  title: string,
  taskIds: Id[],
|};

export type ColumnMap = {
  [columnId: Id]: Column,
}

export type TaskMap = {
  [taskId: Id]: Task,
}

export type Entities = {|
  columnOrder: Id[],
  columns: ColumnMap,
  tasks: TaskMap,
|}

type Id = string;

type Dragging = {|
  id: DraggableId,
  location: DraggableLocation,
|}