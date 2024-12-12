---
title: Backend
description: This document provides a summary of various internet and development technologies.
---

This document provides a summary of various internet and development technologies that i learn from the roadmap.sh

<!-- ## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework -->





### Internet

The internet is a vast network of interconnected computers that communicate using standardized protocols, primarily TCP/IP. When you request a webpage, your device sends a data packet through your internet service provider (ISP) to a DNS server, which translates the website's domain name into an IP address. The packet travels across various networks to the destination server, which processes the request and sends back the response. This exchange enables the transfer of data like web pages, emails, and files, making the internet a dynamic and decentralized system for global communication.

### PHP

PHP is a server-side scripting language used to build dynamic web pages. It runs on a server, not the user's web browser. Despite claims of its decline, PHP is still used on a significant portion (70%) of websites. Its popularity stems from its speed, simplicity, and flexibility, making it a good choice for small businesses and freelancers.

**Key Points:**

* **Server-side scripting:** PHP code executes on a server, and the resulting HTML is sent to the user's browser.
* **Widely used:** PHP remains a popular choice for web development.
* **Good for small businesses and freelancers:** PHP is relatively easy to learn and suitable for building small to medium-sized websites.

**Additional Information:**

* Created by Rasmus Lerdorf in 1995.
* Open-source language (free to use and modify).
* Cross-platform (runs on Windows, Linux, and macOS).

### Git and Github

Git is a version control system that allows developers to track changes to their code over time. It's a powerful tool for collaboration among developers on projects.

**Key Points:**

* **Tracks code changes:** Git allows you to see how your code has evolved over time.
* **Collaboration:** Enables multiple developers to work on the same project simultaneously.
* **Hosted repositories:** GitHub and GitLab provide web interfaces for managing Git repositories.

**Additional Information:**

* Created by Linus Torvalds in 2005.
* Open-source project.
* Available for Windows, macOS, and Linux.

### Database

**MySQL:**

MySQL is a popular open-source relational database management system (RDBMS) known for its speed, reliability, and ease of use. It utilizes SQL (Structured Query Language) for interacting with databases and offers various data management features. MySQL integrates well with many programming languages and platforms and is frequently used with web servers and frameworks in stacks like LAMP (Linux, Apache, MySQL, PHP/Python/Perl).

**Key Points:**

* Powerful and versatile database management system.
* Uses SQL for database interaction.
* Stored procedures and triggers automate tasks and enforce data integrity.

**MariaDB:**

* Known for improved speed, advanced thread pool, and features like JSON, WITH, and KILL statements.
* Supports more connections than MySQL.
* Faster replication.
* Fully open-source.
* Generally faster than MySQL.
* Forked from MySQL in 2009.

**SQLite:**

* Lightweight, serverless, self-contained SQL database engine designed for simplicity and efficiency.
* Commonly used in embedded systems and applications where a full-featured database server is unnecessary (mobile apps, desktop apps, small/medium websites).
* Stores data in a single file for easy deployment and management.
* Supports standard SQL queries and provides ACID compliance for data integrity.
* Small footprint, minimal configuration, and ease of use make it popular for compact, high-performance database needs. 

### API

APIs (Application Programming Interfaces) are sets of rules and specifications that enable communication between different software applications. They act as bridges between software components, allowing them to exchange data and functionality.

**Key Points:**

* **What is an API?** A set of rules for software applications to communicate.
* **How do APIs work?** APIs use a request-response model. A client application sends a request to a server, which processes the request and sends a response back.
* **Types of APIs:** REST APIs, SOAP APIs, and GraphQL APIs.
* **Benefits of using APIs:**
    * Build more powerful and flexible applications.
    * Integrate with other services and data sources.
    * Improve application performance and scalability.
    * Reduce development time and cost.

**Additional Information:**

* Used in various applications like web apps, mobile apps, and IoT devices.
* Can be public or private (available to anyone or authorized users only).
* Can be used to access data, perform actions, or both.

### JSON API

JSON API is a specification that defines how clients can request and modify resources and how servers should respond to these requests.

**Key Points Summary**

* **Resource-based:** Focuses on resources (articles, users, comments).
* **Standard Request Methods:** Uses GET, POST, PATCH, DELETE for operations.
* **Consistent Response Format:** Enforces a format with `type`, `id`, and `attributes` fields.
* **Relationships:** Handles relationships between resources for efficient data fetching.
* **Sparse Fieldsets:** Allows specifying exact fields needed (reduces data transfer).
* **Includes:** Enables fetching related resources in a single request (improves performance).
* **Error Handling:** Defines a standard format for clear error information.
* **Simplicity:** Easy to use and popular for building APIs.
* **Flexibility:** Handles various data structures and relationships.
* **Community Support:** Strong community providing resources and libraries.

### Authentication
**Token Authentication

* Simpler login with a temporary code (token) that expires.
* More secure than passwords (doesn't store password information).
* Gives website owners more control over user access.

**Basic Authentication**

* Simple and widely used, but not very secure.
* Sends username and password in plain text.
* Best for applications that don't require strong security.

### Additional

**Docker**

* Simplifies creating, deploying, and running applications.
* Packages software into containers (easy movement and deployment).
* Ensures consistency and efficiency across environments.
* Improves development process, collaboration, and deployment speed.

**Enum**

* Special data type defining a set of named constants (fixed values).
* Improves code readability, maintainability, and reduces errors.

**Bearer Token**

* Used for secure authentication in PHP applications.
* Server generates a token and sends it to the client.
* Client includes the token in subsequent requests for server verification.
* More secure than traditional methods like basic authentication.

**Sanctum**

* Lightweight authentication system for Laravel (SPAs and APIs).
* Simplifies issuing API tokens to users without OAuth complexity.

**Sanctum Key Features:**

* Simple token-based authentication for user applications.
* Token scoping for fine-grained control over user access.
* Easy integration with Laravel's authentication system.
* Secure token generation and handling for API protection.
