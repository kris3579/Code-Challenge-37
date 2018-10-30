'use strict';

const Queue = require('queue-fifo');

module.exports = function bfs(graph, startVertex, endVertex) {
  const queue = new Queue();
  const visitedVertex = new Set();
  const parentPath = new Map();

  queue.enqueue(startVertex);
  visitedVertex.add(startVertex);

  while (queue.size() > 0) {
    const currentVertex = queue.dequeue();
    if (currentVertex === endVertex) {
      return parentPath;
    }
    const neighbors = graph.getNeighbors(currentVertex);

    for (const neighbor of neighbors) { // eslint-disable-line
      const neighborVertex = neighbor.vertex;
      if (visitedVertex.has(neighborVertex)) {
        continue; // eslint-disable-line
      } else {
        visitedVertex.add(neighborVertex);
      }
      parentPath.set(neighborVertex, currentVertex);
      queue.enqueue(neighborVertex);
    }
  }
  return null;
};
