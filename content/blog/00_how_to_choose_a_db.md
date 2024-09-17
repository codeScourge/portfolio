---
title: "How to choose and operate a database 101"
date: "2024-09-16"
---

So you need a database, and just blindly picking one doesn't do it anymore? Hopefully after this article, you should be able to understand and choose one of [the many databases out there](https://db-engines.com/en/ranking).

Prerequisites:
I expect you to know the basic theory behind (relational) databases, and can tell me what an entity and relation even is.

#### Data Model
The most important decision you will make is choosing the data model. In short the way you save and represent your stuff can be classified into 5 categories
- Key-Value: like a dictionary / object where a key maps to a single value
- Document: like Key-Value but the Value can be nested JSON or XML that can be queried
- Wide-Column: a table with fluid columns
- Relational: many tables with links to each other
- Graph: nodes and connections
While there are some other like spatial databases, these are edge-cases and most likely aren't suitable to be your main database.

A common advice I hear is "if in doubt, take Postgres/MySQL". And actually, it is not that dumb. I won't go into low-level details of why, but basically the relational model just builds on top of Document and Wide-Column  (It does this by supporting JOINS and through that being able to normalize many-to-many relationships, also it adds schema constraints). This means that anything you could represent in a Document or even K/V, you could also do in the relational model.

So why should you even take one of the "lower" models if relational can solve everything? Well, performance! (And flexibility.) While we remove the features (and security-considerations) the relational model brings, we increase through-put. It is also easier to scale them. 

Note: before jumping in and trying to optimize, be 100% percent certain that you have the requirements nailed down and actually need the performance boosts. Running a Cassandra cluster for your personal blog would be overkill and you should stick with the simplest tool in the box: your favorite SQL database.

So, do you have several many-to-many relationships? Use relational. If your data is EXTREMELY interconnected and the relationships even have their own data, you could consider using a Graph Database. 

#### Other Parameters
Now you've got your data model. Let's say you are building a simple CRM and need to represent many customers. Since you don't have any other entities and by that complex relationships, you know that you can run with a document or wide-column database. We have some databases for the choosing:
- MongoDB
- DynamoDB
- MySQL
##### ACID compliance
Are you handling sensitive data where a wrong write or even read will fuck things up? Then you should look into ACID transactions. This is basically a fancy term for a guarantee that your data will be correct even when sending concurrent requests to it. In short there are multiple levels of how well the Isolation of several transactions is handled
- read-committed
- snapshot isolated
- serializable
Research what these mean, and which one is right for the use-case by yourself. Let's just say we need serializable (because we will have table-wide constraints), which unfortunately MongoDB doesn't support.
##### Performance
This is where we look into the access patterns, from our example we can see two things:
- since we don't do a lot of updating and mostly just look at our CRM, we are read-heavy
- we don't really want to do f.e. analytical queries over many (or all) rows, if we did we could look into column-oriented databases. For now a row-oriented, which is the default, is fine.
Both DynamoDB and MySQL are optimized for this.

##### Distributing your Data
Also there is the decision of Replication. But to be honest, if you are running a company that has surpassed the limits of vertical scaling or is at a point where they can afford to distribute their database across regions for higher safety and lower latency, you are smarter than me. I won't be able to give you anything more than the general advice like "single-leader for consistency while multi-leader/leaderless for availability". 

#### How/Where to deploy
##### SaaS
The first one is a fully managed database as a service served through an API, those are usually proprietary, not open-source, and you should have a very good reason for using this exact database, other than that you "dOnT hAvE tO wOrrY aBouT mY dATabAse". Migrating away from those is usually a pain in the ass, I am looking at you Firestore.
##### managed deployed
This one I actually really approve of, my bank account does not though. Services like PlanetScale take care of deploying a database for you. Since you don't use a proprietary system (and query language), you can always easily migrate to a self-hosted option when needed. Besides the database itself, they usually offer stuff like Monitoring, Replication, Backups, etc., which is nice.
##### self-host on bare-metal
This one is the coolest of all, but unless you know what you are doing I don't recommend this. Just spinning up MySQL in a docker alongside will be a pain in the ass if you will need to scale . Just deploying it another instance as is will also most likely not be enough. You will have to setup that what the managed deployment already offers and make sure you have a secure connection.

Are you an enterprise where you would save money by rolling your own database and have the resources to use an entire engineer for managing that thing? Then go for it.