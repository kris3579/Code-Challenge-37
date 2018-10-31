'use strict';

const GraphBFS = require('../graphBFS');

const Graph = require('../lib/graph');
const Vertex = require('../lib/vertex');

const testGraph = new Graph();

const two = new Vertex(2);
const four = new Vertex(4);
const twenty = new Vertex(20);
const one = new Vertex(1);
const three = new Vertex(3);
const eight = new Vertex(8);

testGraph.addVertex(two);
testGraph.addVertex(four);
testGraph.addVertex(twenty);
testGraph.addVertex(one);
testGraph.addVertex(three);
testGraph.addVertex(eight);

testGraph.addDirectedEdge(two, four);
testGraph.addDirectedEdge(four, twenty);
testGraph.addDirectedEdge(two, one);
testGraph.addDirectedEdge(one, three);
testGraph.addDirectedEdge(three, eight);
testGraph.addDirectedEdge(eight, twenty);

const testUnconnectedGraph = new Graph();
const five = new Vertex(5);
const six = new Vertex(6);
const seven = new Vertex(7);
const ten = new Vertex(10);
const twelve = new Vertex(12);
const twentyFive = new Vertex(25);

testUnconnectedGraph.addVertex(five);
testUnconnectedGraph.addVertex(six);
testUnconnectedGraph.addVertex(seven);
testUnconnectedGraph.addVertex(ten);
testUnconnectedGraph.addVertex(twelve);

testUnconnectedGraph.addDirectedEdge(five, seven);
testUnconnectedGraph.addDirectedEdge(six, ten);
testUnconnectedGraph.addDirectedEdge(five, twelve);
testUnconnectedGraph.addDirectedEdge(seven, twelve);

describe('graphBFS.js', () => {
  test('Success, returned maps first value as equal to the startNode, and the last key as equal to the endNode ', () => {
    const result = GraphBFS(testGraph, two, three);
    let currentValue = result.get(three);
    while (currentValue !== two) {
      currentValue = result.get(currentValue);
    }
    expect(currentValue).toEqual(two);
  });
  test('Return null if the path is not possible due to unconnected nodes', () => {
    const result = GraphBFS(testUnconnectedGraph, five, six);
    expect(result).toEqual(null);
  });
  test('Return null if a given vertex does not exist in the graphs adjacency list', () => {
    const result = GraphBFS(testGraph, two, twentyFive);
    expect(result).toEqual(null);
  });
});
