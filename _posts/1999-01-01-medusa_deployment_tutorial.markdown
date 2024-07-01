---
layout: post
title:  "Deploy Production Redy MedusaJS Store"
date:   2024-01-01 00:00:00 +0100
categories: Open_Source
img: assets/images/medusa-store.webp
---


# How to Deploy a Production-Ready Medusa Server and Storefront

[![YouTube video player](https://img.youtube.com/vi/XjMWSwoAOQc/0.jpg)](https://www.youtube.com/watch?v=XjMWSwoAOQc)

## Table of Contents
1. [Introduction](#introduction)
2. [Architecture and Requirements](#architecture-and-requirements)
3. [Setting Up the Backend](#setting-up-the-backend)
    >[Configuring the Backend](#configuring-the-backend)
    >[Digital Ocean Setup](#digital-ocean-setup)
4. [Setting Up the Frontend](#setting-up-the-frontend)
5. [Adding Essential Plugins](#adding-essential-plugins)
   >[MeiliSearch Integration](#meilisearch-integration)
   >[Stripe Integration](#stripe-integration)
   >[SendGrid Integration](#sendgrid-integration)
6. [Final Touches](#final-touches)
   >[Configuring CORS Settings](#configuring-cors-settings)
   >[Spaces Plugin for Media Storage](#spaces-plugin-for-media-storage)
7. [Conclusion](#conclusion)

<br>

🔗 Frontend Repository: https://github.com/pavlotsyhanok/medusa-tutorial-frontend

🔗 Backend Repository: https://github.com/pavlotsyhanok/medusa-tutorial-backend

## Introduction
Deploying a Medusa server and Medusa storefront can seem daunting, but with the right guidance, you can have your e-commerce platform up and running efficiently. In this blog post, we'll walk through the entire process, from setting up your backend and frontend to configuring essential plugins like MeiliSearch, Stripe, and SendGrid. By the end of this tutorial, you'll have a production-ready Medusa store that can scale seamlessly.

## Architecture and Requirements
Before diving into the deployment steps, let's quickly overview the architecture and requirements for our setup:
- **Backend**: Hosted on Digital Ocean with automatic scaling using the app platform. PostgreSQL is used for the database, Redis for event bus and caching, and S3 spaces for media files.
- **Frontend**: Deployed on Vercel, leveraging serverless functions for scalability. Stripe is used for payment processing, SendGrid for transactional emails, and MeiliSearch for the search engine.

## Setting Up the Backend
First, ensure you have the necessary dependencies installed:
- **Node.js**: JavaScript runtime engine.
- **Git**: For codebase management.
- **PostgreSQL**: Database, though we'll connect directly to Digital Ocean PostgreSQL.

Create parent directories for both the server and storefront. Initialize Git repositories for both backend and frontend, and commit the initial code.

### Configuring the Backend
Update the `package.json` and `medusa-config.js` files for compatibility with Digital Ocean. Initialize the Git repository and commit the code changes. 

### Digital Ocean Setup
Log in to Digital Ocean and create PostgreSQL and Redis databases. Set up app hosting on Digital Ocean, linking your GitHub repository and configuring environmental variables. Ensure the app scales automatically and verify its health.

## Setting Up the Frontend
Deploy the storefront to Vercel. Configure the necessary environmental variables, ensuring they align with your backend setup. Test the storefront by adding a sample product and configuring a region.

## Adding Essential Plugins
### MeiliSearch Integration
Install MeiliSearch for enhanced product search functionality. Configure the plugin and update the storefront configuration and environmental variables. Test the search functionality to ensure it works correctly.

### Stripe Integration
Install and configure the Stripe plugin for payment processing. Update the necessary keys and settings, then test the Stripe payment and capture functionality.

### SendGrid Integration
Install SendGrid for transactional emails. Create and configure a dynamic email template, then test the email functionality by placing an order.

## Final Touches
### Configuring CORS Settings
Set up CORS settings for the backend to restrict access to the storefront URL, enhancing security.

### Spaces Plugin for Media Storage
Create a Digital Ocean Spaces bucket for media file storage. Install and configure the spaces plugin, then update the storefront to accept images from the bucket. Test the image upload and retrieval functionality to ensure seamless media management.

## Conclusion
Congratulations! You've successfully deployed a Medusa server and storefront, configured with essential plugins to ensure your e-commerce store is production-ready and scalable. This comprehensive guide should serve as a solid foundation for setting up your Medusa platform. If you have any questions, feel free to reach out via Discord or the official Medusa server.

By following these steps, you'll ensure that your Medusa store is not only functional but also capable of handling growth and providing a seamless shopping experience for your customers.

<em>Thank you for reading! For more tutorials and support, join the Medusa community on Discord and the official Medusa server.</em>
