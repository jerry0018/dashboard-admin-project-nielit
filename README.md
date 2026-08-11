# AWS Cloud Infrastructure & Automated Monitoring System

An end-to-end cloud deployment featuring a Node.js dashboard hosted on AWS EC2, configured with custom VPC networking, static Elastic IP routing, IAM security controls, Amazon S3 integration, and automated monitoring via Amazon CloudWatch and SNS.

---

## 🌐 Active Live Dashboard URL
- **Static Dashboard Endpoint:** [http://34.195.121.169/index.html](http://34.195.121.169/index.html)
- **Elastic IP Address:** `34.195.121.169`

---

## 📌 Project Overview

This project demonstrates the architecture and deployment of a web application infrastructure on Amazon Web Services (AWS). It covers secure networking, application deployment using Node.js and PM2, file storage with S3, persistent IP mapping with Elastic IP, and automated server performance monitoring with CloudWatch CPU alerts and SNS email notifications.

---

## 🛠️ Tech Stack & AWS Services Used

| Category | Technology / Service | Details / Value |
| :--- | :--- | :--- |
| **Cloud Platform** | Amazon Web Services (AWS) | Primary Cloud Infrastructure |
| **Compute** | Amazon EC2 (`Ubuntu Server`) | Dashboard Application Host (`dashboard-web-server`) |
| **Networking** | Amazon VPC, Public Subnet, Security Groups | Network isolation & security firewall rules |
| **Static Routing** | AWS Elastic IP | Permanent public IP (`34.195.121.169`) |
| **Identity & Security** | AWS IAM Roles (`EC2DashboardS3Role`) | Instance profile permissions for S3 bucket access |
| **Storage** | Amazon S3 | Document & artifact storage |
| **Monitoring & Alerts** | Amazon CloudWatch, Amazon SNS | CPU utilization monitoring & email notifications |
| **Runtime & PM** | Node.js, npm, PM2 | Application server runtime & process management |
| **Version Control** | Git, GitHub | Code repository |

---

## 🏗️ Architecture Flow

```text
               +-------------------------------------------------------+
               |                  Amazon VPC                           |
               |  +-------------------------------------------------+  |
               |  |               Public Subnet                     |  |
               |  |  +-------------------------------------------+  |  |
               |  |  |            Security Group                 |  |  |
 User Request  |  |  |  +-------------------------------------+  |  |  |
-------------> |  |  |  |  EC2 Instance (Ubuntu)              |  |  |  |
 Elastic IP    |  |  |  |  - Node.js Application / PM2        |  |  |  |
(34.195.121.169)  |  |  +------------------+------------------+  |  |  |
               |  +--+---------------------|---------------------+--+  |
               +-----|---------------------|---------------------------+
                     |                     |
                     v                     v
              +--------------+    +------------------+
              |  Amazon S3   |    | Amazon CloudWatch|
              | (File Storage|    | (CPU Alarm)      |
              +--------------+    +--------+---------+
                                           |
                                           v
                                  +------------------+
                                  |    Amazon SNS    |
                                  | (Email Alert)    |
                                  +------------------+
