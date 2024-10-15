# Drone System Monitoring Dashboard with AI Agents

This project is a comprehensive **drone management system** designed to monitor drones during mass events, detect incidents, and generate reports using **AI agents**. The system provides a unified dashboard interface for drone operators, including real-time monitoring, incident tracking, and system analytics.

![Drone System Monitoring Dashboard](./A_sleek,_modern_dashboard_design_for_a_drone_manag.png)

The project is structured as a **monorepo** that includes both frontend and backend components. The backend manages drone data and incident detection, while the frontend offers an interactive user interface. AI agents are responsible for detecting incidents, managing drone routes, and handling operational tasks with minimal human intervention.

## Project Overview

### Key Features

- **Drone Monitoring**: Real-time drone location and status tracking on an interactive map.
- **Incident Detection and Reporting**: AI agents automatically detect and report incidents in real-time.
- **System Status**: Dashboard displays the current state of drones, incidents, and system performance.
- **AI Agent Integration**: AI agents handle incident detection, route management, and report generation.
- **Simplified UI**: Clean and user-friendly dashboard for quick access to key information.

## Technologies Used

### **Frontend:**

- **React**: JavaScript library for building dynamic user interfaces.
- **TypeScript**: Enhances React with static typing for better code reliability.
- **Tailwind CSS**: Utility-first CSS framework for responsive and custom styling.
- **Mapbox**: Provides the interactive map for visualizing drone locations.
- **D3.js**: Used for generating data visualizations (graphs, charts) in the dashboard.

### **Backend:**

- **Node.js**: JavaScript runtime environment for building the backend server.
- **Express**: Web framework for creating the backend API to manage drone data and incidents.
- **MongoDB**: NoSQL database for storing drone data, incidents, and system logs.
- **AI Agents**: Custom AI agents are responsible for detecting incidents, generating reports, and managing drones in real-time.

### **AI Components:**

- **Machine Learning**: Pre-trained models are used for incident detection based on drone data and static images.
- **AI Agents**: These agents are responsible for monitoring drone activities, detecting anomalies, and sending alerts to the dashboard.
  
### **Monorepo Management:**

- **Nx**: Monorepo tool used for managing both frontend and backend projects within a single repository, ensuring efficient builds, testing, and deployment.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/drone-monitoring-system.git
