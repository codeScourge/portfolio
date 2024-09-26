---
title: "Graphs are the coolest thing for AI"
date: "2024-09-26"
---
So graphs are basically fucking awesome. They have been used for Network Analysis for several decades already, so why am I talking about them now? Well, because AI made them more interesting than ever, but more on that later.

A graph consists of nodes/entities an has connections between them. Just like the node itself, the connections also can hold data. For example, Facebook is a giant social-graph of people (the nodes) and their relationships (the connections).

#### Using existing Knowledge Graphs
LLMs suck. We first tried to query them using (now called naive) RAG, which never was meant to work, since vector search on random chunks is awful and doesn't offer any visibility into the data and what is going wrong with it. 

GraphRAG tries to solve this by querying on a knowledge graph instead. The basic approach is pretty simple: we retrieve a single nodes using something like vector or keyword search, and then use the connections to find adjacent information to feed into the context.

Let me give you some examples of how this could be used:
- a social-network to get close connections of a person and analyze their social circle
- a culinary knowledge graph which holds ingredients and dishes with connections like "is_part_of", "pair_well_with", would allow to build a cooking assistant, as each node could also hold some info text on how to handle that ingredient / cook that dish
- the same with the music industry having artists, labels, albums, songs as nodes that are grouped into genres


#### Agentic Traversal
Besides programmatically getting the connected nodes we can let the AI itself decide what information it needs. 

An example is a customer support bot which traverses a tree-like graph. Let's say we are working in a repair shop, and the user says "The Motor of my car is broken". A possible structure of the graph could then look like this and enable the following movement
![](/blog/00_1.png)
Reaching the "engine" node, would yield instructions to the AI, how to analyze the situation further. Through more conversation with the user, it could then select which possible engine problem it could be and traverse the graph once more to get instructions on how to deal with this specific problem.


#### Generating a Knowledge Graph
Traditionally this required specific data formats, which is unfortunate since most of the worlds data are plain dumps. Microsoft's [GraphRAG tool](https://github.com/microsoft/graphrag) solves this.

The unstructured text is chunked, turned into structured nodes / connections, and merged into a single graph. This means that the priorly scattered information about a topic is now concatenated in a single place and can be accessed at once - the accuracy improvements are insane


To give you an example, I scraped all of [Paul Graham's Essays](https://paulgraham.com/articles.html) into a graph consisting of about 4000 entities. I then visualized the Graph using Gephi and got these results:
![](/blog/00_2.png)
![](/blog/00_3.png)

Just imagine the different use-cases for that. For example, you could turn internal company documents into a graph of employees, departments, and projects. Big companies would pay big money for that kind of insights

#### Graph Analysis
Graph Analysis is running some fancy Algorithms on the Graph. The main ones can be categorized in:
- Pathfinding: finding the shortest route between two nodes
- Centrality: how connected a node is
- Community finding: clustering nodes into groups

Now that you can automatically generate Knowledge Graph, you gain the ability to run these algorithms on any data. Read [this book on Graph Algorithms](https://www.oreilly.com/library/view/graph-algorithms/9781492047674/) to get an introduction. I am sure that while reading you will get thousands of ideas of how you could use this to generate value in form of insights.