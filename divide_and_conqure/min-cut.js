const random = (arr) => {
    const set = new Set(arr);
    arr = Array.from(set);
    return arr[Math.round(Math.random() * (arr.length - 1))]
};

class Node {
    constructor(name, adjencies = []) {
        this.name = name;
        this.adjencies = adjencies;
    }
}

class Graph {
    constructor(adjacencyList) {
        this.nodes = new Map();
        adjacencyList.forEach(([ name, ...adjencies ]) => {
            const node = new Node(name, adjencies);
            this.nodes.set(node.name, node);
        });
    }

    getNode(name) {
        return this.nodes.get(name);
    }

    addNode(node) {
        this.nodes.set(node.name, node);
    }

    removeNode(node) {
        this.nodes.delete(node.name);
    }

    changeLinks(from, to) {
        const fromNode = this.getNode(from);

        fromNode.adjencies.forEach((nodeName) => {
            const node = this.getNode(nodeName);
            node.adjencies = node.adjencies.map(name => name === from ? to : name);
        })
    }

    contractNodes(node1, node2) {
        const name1 = node1.name;
        const name2 = node2.name;

        this.changeLinks(name2, name1);

        node1.adjencies = [
            ...node1.adjencies,
            ...node2.adjencies,
        ].filter(name => name !== name1);
        
        this.removeNode(node2);
    }

    contractRandomEdge() {
        const nodes = Array.from(this.nodes.values());
        const node1 = random(nodes);
        const node2Name = random(node1.adjencies);
        const node2 = this.getNode(node2Name);
        this.contractNodes(node1, node2);
    }

    get edgesCount() {
        const nodes = this.nodes.values();
        const firstNode = nodes.next().value;
        return firstNode.adjencies.length;
    }

    get size() {
        return this.nodes.size;
    }
}

function kargerMinCut(adjacencyList) {
    const size = adjacencyList.length;
    let trials = Math.round((size ** 2) * Math.log(size));
    trials = Math.min(2000, trials);
    let minCut = Number.MAX_SAFE_INTEGER;
    while (trials) {
        const graph = new Graph(adjacencyList);

        while (graph.size > 2) {
            graph.contractRandomEdge();
        }

        minCut = Math.min(minCut, graph.edgesCount);
        trials--;
    }
    return minCut;
}

module.exports = {
    kargerMinCut,
};
