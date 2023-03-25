"use strict";
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(name) {
        if (!this.adjacencyList[name]) {
            this.adjacencyList[name] = [];
        }
    }
    removeVertex(name) {
        const edges = this.adjacencyList[name];
        for (const vertexKey of edges) {
            this.adjacencyList[vertexKey] = this.adjacencyList[vertexKey].filter((item) => item !== vertexKey);
        }
        delete this.adjacencyList[name];
    }
    addEdge(vertexKey1, vertexKey2) {
        const vertex1 = this.adjacencyList[vertexKey1];
        const vertex2 = this.adjacencyList[vertexKey2];
        // if (vertex1 && vertex2) {
        vertex1.push(vertexKey2);
        vertex2.push(vertexKey1);
        // }
    }
    removeEdge(vertexKey1, vertexKey2) {
        this.adjacencyList[vertexKey1] = this.adjacencyList[vertexKey1].filter((key) => key !== vertexKey2);
        this.adjacencyList[vertexKey2] = this.adjacencyList[vertexKey2].filter((key) => key !== vertexKey1);
    }
}
// const g = new Graph();
// g.addVertex("Tokyo");
// g.addVertex("Dallas");
// g.addVertex("Aspen");
// g.addEdge("Tokyo", "Dallas");
// g.addEdge("Tokyo", "Aspen");
// g.addEdge("Dallas", "Aspen");
// g.removeEdge("Dallas", "Aspen");
// g.removeVertex("Tokyo");
// console.log(g);
//# sourceMappingURL=Graph.js.map