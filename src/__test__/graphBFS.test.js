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

describe('graphBFS.js', () => {
  test('Returned empty map because of empty string', () => {
    const result = GraphBFS(testGraph, two, three);
    const testMapBFSResultIterator = result.values();
    expect(testMapBFSResultIterator.next().value.value).toEqual(0);
  });
});
