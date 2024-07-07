---
layout: post
title:  "Deploy Production Redy MedusaJS Store"
date:   2024-01-01 00:00:00 +0100
categories: Open_Source
img: assets/images/medusa-store.webp
---
{% raw %}
<div class="video-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/XjMWSwoAOQc?si=xhDl_aOP8_iC1fT4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
{% endraw %}

# How to Deploy a Production-Ready Medusa Server and Storefront


<br>

🔗 Frontend Repository: https://github.com/pavlotsyhanok/medusa-tutorial-frontend

🔗 Backend Repository: https://github.com/pavlotsyhanok/medusa-tutorial-backend

## Architecture and Requirements
Overview the architecture and requirements for our setup:

- **Backend**: Hosted on Digital Ocean with automatic scaling using the app platform. PostgreSQL is used for the database, Redis for event bus and caching, and S3 spaces for media files.

- **Frontend**: Deployed on Vercel, leveraging serverless functions for scalability. Stripe is used for payment processing, SendGrid for transactional emails, and MeiliSearch for the search engine.
