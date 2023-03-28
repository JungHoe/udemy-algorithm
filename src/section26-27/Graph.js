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
    //A B D E C F
    DFS(startNode) {
        const visited = {};
        const result = [];
        // 내부 this 바인딩하기 or arrow function 사용 or 내부클래스에서 미리 정의
        function helper(vertex) {
            var _a;
            const isVisitedNode = (_a = visited[vertex]) !== null && _a !== void 0 ? _a : false;
            if (!isVisitedNode) {
                visited[vertex] = true;
                result.push(vertex);
                const edges = this.adjacencyList[vertex];
                for (const item of edges) {
                    const binded = helper.bind(this);
                    binded(item);
                }
            }
        }
        console.log(this);
        const binded = helper.bind(this);
        binded(startNode);
        return result;
    }
    //A B E C D F
    BFS(startNode) {
        var _a;
        const visited = {};
        const result = [];
        let queue = [];
        queue.push(startNode);
        while (queue.length !== 0) {
            const vertexKey = queue.shift();
            const isViistedNode = (_a = visited[vertexKey]) !== null && _a !== void 0 ? _a : false;
            if (!isViistedNode) {
                visited[vertexKey] = true;
                result.push(vertexKey);
                const edges = this.adjacencyList[vertexKey];
                queue = queue.concat(edges);
            }
        }
        return result;
    }
}
const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log("result====", g.DFS("A"));
console.log("result====", g.BFS("A"));
//# sourceMappingURL=Graph.js.map