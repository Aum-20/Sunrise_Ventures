# Sunrise Ventures API Documentation

## Base URL
```
http://localhost:8000/api
```

## Authentication
The API uses session-based authentication for admin routes.

### Admin Authentication Endpoints

#### Login
```http
POST /admin/login
```
**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```
**Response:**
```json
{
  "statusCode": 200,
  "data": {
    "user": {
      "email": "string"
    }
  },
  "message": "Login successful"
}
```

#### Logout
```http
POST /admin/logout
```
**Response:**
```json
{
  "statusCode": 200,
  "data": null,
  "message": "Logged out successfully"
}
```

## Real Estate Endpoints

### Get Listings
```http
GET /real-estate/listings
```
**Query Parameters:**
- `type`: (optional) Filter by 'buyers' or 'sellers'
- `state`: (optional) Filter by state
- `city`: (optional) Filter by city
- `propertyType`: (optional) Filter by property type
- `minPrice`: (optional) Minimum price/budget
- `maxPrice`: (optional) Maximum price/budget
- `minArea`: (optional) Minimum area
- `maxArea`: (optional) Maximum area

**Response:**
```json
{
  "statusCode": 200,
  "data": {
    "buyers": [],
    "sellers": []
  },
  "message": "Listings retrieved successfully"
}
```

### Create Buyer Request
```http
POST /real-estate/buyers
```
**Request Body:**
```json
{
  "name": "string",
  "whatsappNumber": "string",
  "mobileNumber": "string (optional)",
  "email": "string",
  "state": "string",
  "city": "string",
  "area": "string (optional)",
  "budget": "string (optional)",
  "propertyType": "string (optional)"
}
```
**Response:**
```json
{
  "statusCode": 201,
  "data": {
    "buyer": {}
  },
  "message": "Buyer request created successfully"
}
```

### Create Seller Listing
```http
POST /real-estate/sellers
```
**Request Body:**
```json
{
  "name": "string",
  "whatsappNumber": "string",
  "mobileNumber": "string (optional)",
  "email": "string",
  "address": "string",
  "city": "string",
  "state": "string",
  "pincode": "string",
  "area": "string",
  "cost": "string",
  "propertyType": "string (optional)"
}
```
**Response:**
```json
{
  "statusCode": 201,
  "data": {
    "seller": {}
  },
  "message": "Seller listing created successfully"
}
```

## Admin Management Endpoints
All admin routes require authentication.

### Create Admin
```http
POST /admin
```
**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

### Real Estate Management

#### Get All Real Estate Data
```http
GET /admin/real-estate
```
**Query Parameters:**
- `page`: (optional) Page number, default: 1
- `limit`: (optional) Items per page, default: 10

#### Search Real Estate
```http
GET /admin/real-estate/search
```
**Query Parameters:**
- `query`: Search term
- `type`: (optional) Filter by 'buyers' or 'sellers'

#### Remove Buyer
```http
DELETE /admin/real-estate/buyers/:id
```

#### Remove Seller
```http
DELETE /admin/real-estate/sellers/:id
```

### Contact Management

#### Get All Contacts
```http
GET /admin/contacts
```
**Query Parameters:**
- `page`: (optional) Page number, default: 1
- `limit`: (optional) Items per page, default: 10

#### Search Contacts
```http
GET /admin/contacts/search
```
**Query Parameters:**
- `query`: Search term

#### Remove Contact
```http
DELETE /admin/contacts/:id
```

## Contact Form Endpoint

### Submit Contact Form
```http
POST /contact/submit
```
**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phoneNo": "string",
  "state": "string",
  "msg": "string"
}
```
**Response:**
```json
{
  "statusCode": 201,
  "data": {
    "contact": {}
  },
  "message": "Contact form submitted successfully"
}
```

## Error Responses
The API uses consistent error response format:
```json
{
  "statusCode": 400,
  "data": null,
  "success": false,
  "message": "Error message",
  "errors": []
}
```

Common HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Internal Server Error
