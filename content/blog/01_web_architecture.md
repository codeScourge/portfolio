---
title: "How to architect your WebApp (for everyone)"
date: "2024-09-22"
---


There is a big divide in the Software Engineering World between two groups:

a) the people over-engineering the fuck out of their todo-app

b) the people not doing it

What do both of them have in common? They don't have any users, just like most of the applications.


This was supposed to be a technical deep dive into Systems Engineering of what I learned from [one](https://www.goodreads.com/book/show/23463279-designing-data-intensive-applications?ac=1&from_search=true&qid=sjo9yA2czG&rank=1) or the [other](https://www.goodreads.com/book/show/23615147-web-scalability-for-startup-engineers?ref=nav_sb_ss_1_21) book, but what I noticed is that it is more about knowing about what can actually can go wrong and how to fix it, instead of knowing about the ideal distributed, high-availability, microservices, big-data, AI, TDD, dipshit system.

So, let's start small. What do you need for a basic webapp? A database holding user-data and a webserver something handling that data. Now let's say someone actually gives a shit about your application and starts using it, thats amazing! Unfortunately more users also means:
- more space and I/O for your database
- more compute and memory for your webserver (and database)
- more bandwidth for your network

That's simple! Beef up the instance with more CPU cores, RAM disks, and RAID arrays (a storage thing, look it up it is actually pretty cool). And for the bandwidth? Just add a CDN and optimize the way we deliver content.

Unfortunately this is only feasible until a certain point, since after a while the cost for better hardware rises exponentially. That's where ✨horizontal scaling✨ comes in. What we do is that we run the application on multiple servers instead of one, and use a load-balancer to spread the traffic coming through our CDN over all our instances (similar thing is done for your database). 

So does this mean I should have a distributed architecture for my MVP that I am gonna show two people and then most likely abandon? Well, no. What you should however do is always keep in mind what to do to be able to scale, in the case you need to, and prepare accordingly. This could for example mean:
- run the webserver and database in separate Docker container to be able to easily move those
- design your webserver in a stateless manner or move it to a separate Redis container so you can easily scale horizontally

*The major difference between a thing that can and can't fail, is that once both fail, the one that can can also be repaired easily* - Martin Kleppmann (I think??)

While a sudden spike in traffic will break your servers, you will be able to respond in a matter of hours instead of days, without you needing to first spend weeks of engineering efforts on preparing your application to be scalable