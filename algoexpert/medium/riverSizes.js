// You are given a two-dimensional array (matrix) of potentially unequal height and width containing only 0s and 1s. Each 0 represents land, and each 1 represents part of a river. A river consists of any number of 1s that are either horizontally or vertically adjacent (but not diagonally adjacent). The number of adjacent 1s forming a river determine its size. Write a function that returns an array of the sizes of all rivers represented in the input matrix. Note that these sizes do not need to be in any particular order.

function riverSizes(matrix) {
  // initialize the sizes and visited array
  const sizes = [];
  const visited = matrix.map(row => row.map(el => false));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) continue;
      traverseNode(i, j, matrix, visited, sizes);
    }
  }
  return sizes;
}

function traverseNode(i, j, matrix, visited, sizes) {
  let currentRiverSize = 0;
  // Apply DFS utilizing stack
  const nodesToExplore = [[i, j]]; // initialize the stack
  while (nodesToExplore.length) {
    const currentNode = nodesToExplore.pop();
    let i = currentNode[0];
    let j = currentNode[1];

    if (visited[i][j]) {
      continue;
    }

    visited[i][j] = true;
    if (matrix[i][j] === 0) {
      continue;
    }

    // here we have a node that has not yet been visited and is a river
    currentRiverSize += 1;

    const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
    for (let neighbor of unvisitedNeighbors) {
      nodesToExplore.push(neighbor);
    }
  }
  // This funcction is being used for a side effect of pushing values to an array
  if (currentRiverSize > 0) {
    sizes.push(currentRiverSize);
  }
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
  const unvisitedNeighbors = [];
  // check the nodes above and below the current node
  if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);
  if (i < matrix.length - 1 && !visited[i + 1][j]) unvisitedNeighbors.push([i + 1, j]);

  // check the nodes left and right of the current node
  if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1]);
  if (j < matrix[0].length - 1 && !visited[i][j + 1]) unvisitedNeighbors.push([i, j + 1]);
  return unvisitedNeighbors;
}

const result = riverSizes([
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
]);

console.log(result);
