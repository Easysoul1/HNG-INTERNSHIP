# HNG-INTERNSHIP
# HNG12 Stage 0 - Public API

## Project Description
This is a simple public API developed as part of the **HNG12 Stage 0 Backend Task**. The API returns JSON data containing:
- Your registered **email address** (used to register on the HNG12 Slack workspace).
- The **current datetime** in ISO 8601 format (UTC).
- The **GitHub URL** of the project's codebase.

The API is built using **Node.js (Express.js)** and is deployed to a publicly accessible endpoint.

---

## API Endpoint
**Base URL:** `https://your-api-url.com/`

### **GET /**
#### **Response Format (200 OK)**
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

---

## Example Usage
You can test the API using **cURL**, Postman, or directly in a browser.

### **Using cURL**
```sh
curl -X GET https://your-api-url.com/
```

### **Using JavaScript (fetch API)**
```javascript
fetch("https://your-api-url.com/")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
```

---

## Deployment
This API is deployed on a public hosting service, making it accessible worldwide.

### **Live URL:**
`https://your-api-url.com/`

---
