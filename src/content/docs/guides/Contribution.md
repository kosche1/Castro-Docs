---
title: Contribution
description: This document provides a summary of various internet and development technologies.
---


```markdown
# API Endpoints

### Authentication
* **Login:** 
  * **POST** `/api/login`
  * **Request Body:**
    * `email` (string)
    * `password` (string)
  * **Response:**
    * `token` (string)

* **Logout:**
  * **POST** `/api/logout`
  * **Request Header:**
    * `Authorization: Bearer <token>`

### Student Information
* **Get Student Info:**
  * **GET** `/api/students/{studentId}`
  * **Request Header:**
    * `Authorization: Bearer <token>`
  * **Response:**
    * `student_id` (integer)
    * `name` (string)
    * `email` (string)
    * `other_fields` (various)

### Student Checklist
* **Get Student Checklist:**
  * **GET** `/api/students/{studentId}/checklist`
  * **Request Header:**
    * `Authorization: Bearer <token>`
  * **Response:**
    * `checklist_items` (array)
      * `id` (integer)
      * `description` (string)
      * `completed` (boolean)

### Student Grades
* **Get Student Grades:**
  * **GET** `/api/students/{studentId}/grades`
  * **Request Header:**
    * `Authorization: Bearer <token>`
  * **Response:**
    * `grades` (array)
      * `subject_name` (string)
      * `grade` (string or number)
