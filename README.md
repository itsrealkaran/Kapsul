

<!-- [![Netlify Status](https://api.netlify.com/api/v1/badges/a1112024-489d-47c0-b5f7-540ae40b0781/deploy-status)](https://app.netlify.com/sites/kapsulao/deploys) -->


# Kapsul

Kapsul is a data aggregator that simplifies API access for developers. By abstracting complex interactions, developers can fetch data using just the API name and specific tags. It’s designed to streamline data integration, manage high traffic with a balance loader, and prepare for future scalability with subscription or pay-per-use models.

[![protocol.land](https://arweave.net/eZp8gOeR8Yl_cyH9jJToaCrt2He1PHr0pR4o-mHbEcY)](https://protocol.land/#/repository/396d9846-20c8-459d-abdf-d6a5f49a8340)

<!-- ## [Live Demo](https://gem-hunter-ao.vercel.app/) -->


# Index

- [Kapsul](#kapsul)
- [Index](#index)
- [Introduction](#introduction)
  - [Techstack](#techstack)
  - [Key Features](#key-features)
- [How to Use Kapsul](#how-to-use-kapsul)
- [Details About APIs](#details-about-apis)
- [Revenue Model](#revenue-model)
- [Future Scope](#future-scope)


# Introduction

Kapsul is a data aggregator built on the Arweave blockchain, designed to make accessing APIs easier for developers. Developers can use any API from our collection simply by passing its name, and they can retrieve specific data using tags, which streamlines the process for them. We've abstracted complex API interactions into a simple handler, ensuring ease of use.

Although we haven't implemented the subscription or pay-per-use revenue model yet, our focus is currently on familiarizing developers with our platform. To handle high traffic efficiently, we've also developed a balance loader to manage API requests effectively. Kapsul aims to simplify data integration and API usage for developers while preparing for future scalability and monetization.

<!-- **[Try it out here!](https://gem-hunter-ao.vercel.app/)** -->

## Techstack
     
    - LUA 
    - Nextjs

## Key Features

### **API Simplification**
- Developers can access multiple APIs using just their names.
- Fetch specific data by sending key-value tags.
- No need for extensive API integration—Kapsul handles the complexities.

### **Handler Abstraction**
- Our Main handler simplifies API requests by abstracting the underlying operations (Orbit, request process and Load Balancer).

### **Load Balancer for Efficiency**
- Requests are distributed across 5 subprocesses, ensuring that idle processes handle incoming requests.
- Efficient processing of multiple API calls simultaneously.

### **Developer-Friendly Access**
- Developers can familiarize themselves with Kapsul's offerings for free (**revenue model yet to be implemented**).
- Easy integration with minimal configuration required.

### **Scalable Design**
- Supports high request volumes while maintaining fast response times.

# How to Use Kapsul

Follow the steps below to get started

## Step 1: Run the Application

Open your terminal and run the following command:

```bash
aos
```
## Step 2: Fetch Data from Bot Archive API

To get data, copy and paste the command below into your terminal. Replace values in Params as needed:

```bash
Send({
    Target = [[aUcCtx_TmBKe7v7YzptLGYjjn_T881DSifqngR8J6BU]],
	Action = [[Main]],
	Data = [[opendata1]],
	["Params"] = [[{"username":"vote"}]]
})

```
### How it Works

- **Action**: Always use Main to call our handler.
- **Data**: The specific API identifier you want to use (e.g., opendata1 for Bot Archive).
- **Params**: Pass the required parameters as key-value pairs. For example:

```bash
{"username": "vote"}
```

### Example 
If you want data about the "Vote" Telegram bot, set Params as:

```bash
["Params"] = [[{"username":"vote"}]]
```

# Details About APIs

Kapsul provides access to multiple APIs. Each API comes with its own identifier (e.g., **opendata1**) and required parameters. By abstracting complexity, we let you easily call these APIs and retrieve specific data by passing tags or key-value pairs.

# Revenue Model

We are considering two revenue models and will implement one in the near future:

### Subscription-Based Model

- Developers can subscribe to Kapsul's services for a monthly or yearly fee.
- This will allow unlimited or tiered access to APIs, depending on the chosen subscription plan.

### Pay-Per-Use Model

- Developers will only pay for the API calls they make.
- This model ensures cost-effectiveness for developers who make fewer requests.

# Future Scope

### Enhanced Load Balancer

- We plan to add **caching mechanisms** for frequently accessed data.
- Our load balancer will spawn more subprocesses dynamically to handle huge traffic loads without slowing down the system.

### Custom APIs

- We will allow developers to create custom APIs to bring data from off-chain sources to on-chain storage.

### Cross-Chain Integration

- Kapsul's services will expand beyond the Arweave blockchain, enabling support for other blockchains and creating a cross-chain ecosystem.



