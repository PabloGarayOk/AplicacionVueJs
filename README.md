# Patients Dashboard (Vue.js)

This project is a frontend dashboard built with **Vue.js** that consumes a custom **REST API** for managing patient records.

It was developed as a learning and demonstration project, focusing on frontend–backend integration, routing, and CRUD operations using a real API.

The dashboard is part of a two-project setup:
- **Backend API**: REST API built in PHP
- **Frontend Dashboard**: Vue.js application (this repository)

---

## Project Overview

**Role:** Frontend Developer (Vue.js)  
**Type:** Web Dashboard (SPA)  

---

## Live Demo

Dashboard  
https://dashboard.pablogaray.com.ar

> **Authentication required**  
> Demo credentials are provided below.

---

## Demo Credentials

To prevent unauthorized data modification, login credentials are intentionally **not displayed on the website UI**.

Please use the following demo credentials:

- **User:** `hola@pablogaray.com.ar`  
- **Password:** `123456`

*(Credentials are limited to demo usage only.)*

---

## Browser Compatibility

This dashboard was tested and optimized primarily for **Mozilla Firefox**.

Some visual or behavioral differences may appear in other browsers.  
This project focuses on demonstrating frontend–backend integration, routing, and CRUD functionality rather than cross-browser production hardening.

---

## Features

- User authentication (login / logout)
- Patients list view
- Create new patient
- Edit existing patient
- Delete patient
- Form validation and user feedback alerts
- Route-based navigation using Vue Router
- Secure interaction with REST API using Axios

---

## Application Views

### Login
- Simple authentication form
- Required to access the dashboard

### Dashboard
- List of patients with basic information:
  - Patient ID
  - Name
  - Last name
  - DNI
  - Phone
  - Email
- Button to create a new patient
- Logout option

### Edit Patient
- Click on any patient row to edit
- Preloaded patient data
- Actions:
  - Edit
  - Delete
  - Exit

### New Patient
- Empty form with required field validation
- Actions:
  - Save
  - Exit

---

## Technologies Used

- Vue.js
- Vue Router
- Axios
- Bootstrap
- JavaScript (ES6)
- REST API consumption
- Route Params
- CRUD operations

---

## Project Setup

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run serve
```

Build for production:
```bash
npm run build
```

Lint and fix files:
```bash
npm run lint
```

---

## Lessons Learned

- Consuming a real backend API highlighted the importance of consistent response formats.
- Route params and state handling are critical for building clean CRUD workflows in Vue.js.
- Clear user feedback (alerts and validations) improves usability even in simple dashboards.
- Frontend projects benefit significantly from well-defined backend contracts.

---

## Possible Improvements

The following enhancements are planned or could be implemented in future iterations of this project:

- **Cross-browser compatibility**
  - Full testing and visual adjustments for Chrome, Edge, and Safari.
  - Refinement of CSS and UI behaviors to ensure consistent rendering across different browsers.

- **UI/UX improvements**
  - Clearer visual indicators for clickable rows in the patients list.
  - Improved feedback states for user actions (hover, focus, disabled states).

- **Authentication & security**
  - Enhanced session handling and token expiration management.
  - Improved access control and role-based permissions.


---

## Related Project

Backend REST API used by this dashboard:  
[Rest API](https://github.com/PabloGarayOk/apirest-pacientes)

---

## Author

Pablo Garay  
[Personal website](https://pablogaray.com.ar)

