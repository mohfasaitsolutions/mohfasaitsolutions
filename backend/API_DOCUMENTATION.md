# MOHFASA IT Solutions - Consultation API Documentation

Base URL: `http://localhost:5000/api`

---

## 1. Create Consultation Request

- **Endpoint**: `POST /api/consultations`
- **Headers**: `Content-Type: application/json`

### Request Body Example
```json
{
  "fullName": "Sarah Jenkins",
  "companyName": "Apex Innovations Inc.",
  "email": "sarah@apexinnovations.com",
  "phone": "+1 (555) 019-2834",
  "country": "United States",
  "industry": "TECHNOLOGY",
  "companySize": "MEDIUM",
  "services": [
    "Custom Business Software",
    "AI & Business Automation"
  ],
  "projectTitle": "Enterprise ERP & AI Customer Agent Integration",
  "projectDescription": "We need to modernize our supply chain dispatch system and integrate autonomous AI customer support agents to handle ticket volume.",
  "budget": "BETWEEN_10000_25000",
  "expectedStart": "IMMEDIATELY",
  "preferredContact": "EMAIL",
  "referralSource": "LINKEDIN",
  "meetingRequired": true,
  "ndaRequired": true,
  "files": [
    {
      "fileName": "Apex_ERP_Spec_v1.pdf",
      "fileUrl": "https://storage.mohfasa.com/files/Apex_ERP_Spec_v1.pdf",
      "mimeType": "application/pdf"
    }
  ]
}
```

### Response Example (`201 Created`)
```json
{
  "success": true,
  "message": "Consultation request submitted successfully",
  "data": {
    "id": "e4a2c918-7b92-4f31-89e1-2c091f65d3ab",
    "fullName": "Sarah Jenkins",
    "companyName": "Apex Innovations Inc.",
    "email": "sarah@apexinnovations.com",
    "phone": "+1 (555) 019-2834",
    "country": "United States",
    "industry": "TECHNOLOGY",
    "companySize": "MEDIUM",
    "services": [
      "Custom Business Software",
      "AI & Business Automation"
    ],
    "projectTitle": "Enterprise ERP & AI Customer Agent Integration",
    "projectDescription": "We need to modernize our supply chain dispatch system and integrate autonomous AI customer support agents to handle ticket volume.",
    "budget": "BETWEEN_10000_25000",
    "expectedStart": "IMMEDIATELY",
    "preferredContact": "EMAIL",
    "referralSource": "LINKEDIN",
    "meetingRequired": true,
    "ndaRequired": true,
    "status": "NEW",
    "priority": "MEDIUM",
    "notes": null,
    "createdAt": "2026-07-26T05:45:00.000Z",
    "updatedAt": "2026-07-26T05:45:00.000Z",
    "files": [
      {
        "id": "8f3b1a2c-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
        "consultationId": "e4a2c918-7b92-4f31-89e1-2c091f65d3ab",
        "fileName": "Apex_ERP_Spec_v1.pdf",
        "fileUrl": "https://storage.mohfasa.com/files/Apex_ERP_Spec_v1.pdf",
        "mimeType": "application/pdf",
        "createdAt": "2026-07-26T05:45:00.000Z"
      }
    ],
    "activities": [
      {
        "id": "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        "consultationId": "e4a2c918-7b92-4f31-89e1-2c091f65d3ab",
        "activity": "Lead Created",
        "createdBy": "SYSTEM",
        "createdAt": "2026-07-26T05:45:00.000Z"
      }
    ]
  }
}
```

---

## 2. List All Consultations (Pagination, Filtering, Search)

- **Endpoint**: `GET /api/consultations?page=1&limit=10&status=NEW&industry=TECHNOLOGY&search=Apex`

### Response Example (`200 OK`)
```json
{
  "success": true,
  "message": "Consultation requests retrieved successfully",
  "data": [
    {
      "id": "e4a2c918-7b92-4f31-89e1-2c091f65d3ab",
      "fullName": "Sarah Jenkins",
      "companyName": "Apex Innovations Inc.",
      "email": "sarah@apexinnovations.com",
      "industry": "TECHNOLOGY",
      "status": "NEW",
      "priority": "MEDIUM",
      "createdAt": "2026-07-26T05:45:00.000Z",
      "activities": [
        {
          "id": "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
          "activity": "Lead Created",
          "createdBy": "SYSTEM",
          "createdAt": "2026-07-26T05:45:00.000Z"
        }
      ]
    }
  ],
  "meta": {
    "total": 1,
    "page": 1,
    "limit": 10,
    "totalPages": 1
  }
}
```

---

## 3. Get Consultation Details with Files & Activities

- **Endpoint**: `GET /api/consultations/e4a2c918-7b92-4f31-89e1-2c091f65d3ab`

### Response Example (`200 OK`)
```json
{
  "success": true,
  "message": "Consultation request details retrieved successfully",
  "data": {
    "id": "e4a2c918-7b92-4f31-89e1-2c091f65d3ab",
    "fullName": "Sarah Jenkins",
    "companyName": "Apex Innovations Inc.",
    "email": "sarah@apexinnovations.com",
    "phone": "+1 (555) 019-2834",
    "country": "United States",
    "industry": "TECHNOLOGY",
    "companySize": "MEDIUM",
    "services": [
      "Custom Business Software",
      "AI & Business Automation"
    ],
    "projectTitle": "Enterprise ERP & AI Customer Agent Integration",
    "projectDescription": "We need to modernize our supply chain dispatch system and integrate autonomous AI customer support agents to handle ticket volume.",
    "status": "NEW",
    "priority": "MEDIUM",
    "notes": null,
    "createdAt": "2026-07-26T05:45:00.000Z",
    "updatedAt": "2026-07-26T05:45:00.000Z",
    "files": [
      {
        "id": "8f3b1a2c-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
        "fileName": "Apex_ERP_Spec_v1.pdf",
        "fileUrl": "https://storage.mohfasa.com/files/Apex_ERP_Spec_v1.pdf",
        "mimeType": "application/pdf",
        "createdAt": "2026-07-26T05:45:00.000Z"
      }
    ],
    "activities": [
      {
        "id": "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        "activity": "Lead Created",
        "createdBy": "SYSTEM",
        "createdAt": "2026-07-26T05:45:00.000Z"
      }
    ]
  }
}
```

---

## 4. Update Consultation Request (Status, Priority, Notes)

- **Endpoint**: `PATCH /api/consultations/e4a2c918-7b92-4f31-89e1-2c091f65d3ab`
- **Headers**: `Content-Type: application/json`

### Request Body Example
```json
{
  "status": "MEETING_SCHEDULED",
  "priority": "HIGH",
  "notes": "Discovery meeting confirmed for Monday at 10 AM EST."
}
```

### Response Example (`200 OK`)
```json
{
  "success": true,
  "message": "Consultation request updated successfully",
  "data": {
    "id": "e4a2c918-7b92-4f31-89e1-2c091f65d3ab",
    "status": "MEETING_SCHEDULED",
    "priority": "HIGH",
    "notes": "Discovery meeting confirmed for Monday at 10 AM EST.",
    "updatedAt": "2026-07-26T05:50:00.000Z",
    "activities": [
      {
        "id": "2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
        "activity": "Priority updated to HIGH",
        "createdBy": "ADMIN",
        "createdAt": "2026-07-26T05:50:00.000Z"
      },
      {
        "id": "3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
        "activity": "Status updated to MEETING_SCHEDULED",
        "createdBy": "ADMIN",
        "createdAt": "2026-07-26T05:50:00.000Z"
      },
      {
        "id": "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        "activity": "Lead Created",
        "createdBy": "SYSTEM",
        "createdAt": "2026-07-26T05:45:00.000Z"
      }
    ]
  }
}
```
