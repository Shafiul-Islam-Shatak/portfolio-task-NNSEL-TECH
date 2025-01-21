# Portfolio Task - NNSEL TECH

## Used Next.js For BackEnd and FrontEnd both

## Project Overview
This project is a portfolio web application built using modern technologies. It showcases various projects and features designed to provide an elegant and interactive experience for users. The application is structured to load project data dynamically, ensuring scalability and responsiveness. 

### Key Features:
- **Dynamic Project Highlights**: Fetch and display project information from an API.
- **Interactive UI**: A user-friendly interface using React components.
- **Responsive Design**: Fully optimized for all devices.
- **Loading States**: Displays a loader while data is being fetched.

---

## Instructions to Set Up and Run the Application Locally

### Prerequisites
1. **Node.js**: Make sure Node.js is installed on your machine. You can download it [here](https://nodejs.org/).
2. **Package Manager**: Install `npm` (comes with Node.js) or `yarn`.
3. **Git**: Ensure Git is installed to clone the repository.

### Steps to Set Up the Application:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Shafiul-Islam-Shatak/portfolio-task-NNSEL-TECH.git
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd portfolio-task-NNSEL-TECH
   ```

3. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The application will be available at `http://localhost:3000`.

5. **Build for Production (Optional)**
   To build the application for production:
   ```bash
   npm run build
   ```

6. **Start the Production Server**
   After building, run:
   ```bash
   npm start
   ```

---

## API Endpoints
The application interacts with an API to fetch project data. Below is the description of the relevant API endpoint:

### 1. **GET `/api/projects`**
- **Description**: Fetches a list of projects to display on the portfolio.
- **Response**:
  ```json
  {
      "data": [
          {
              "title": "Project Title",
              "description": "Brief description of the project",
              "image": "URL of the project image",
              "link": "URL to the project demo or details"
          },
          
      ]
  }
  ```
- **Error Handling**:
  Returns a 500 status code with an error message if data retrieval fails.

---

### OTHERS APIS
Also used  APIs to handle CRUD operation by id 
### 1. **GET `/api/projects/${projectId}`**
### 2. **DELETE `/api/projects/${projectId}`**
### 3. **PATCH `/api/projects/${id}`**

