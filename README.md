# SocialNet Backend

A robust social networking application backend built with NestJS, featuring a hybrid database architecture with PostgreSQL and MongoDB for optimized data management.

## 🚀 Tech Stack

- **NestJS 10.0** - Progressive Node.js framework for scalable server-side applications
- **TypeScript 5.1** - Typed superset of JavaScript
- **Prisma 5.9** - Next-generation ORM for PostgreSQL and MongoDB
- **PostgreSQL** - Relational database for user profiles and relationships
- **MongoDB** - NoSQL database for posts, likes, and notifications
- **JWT (jsonwebtoken)** - Token-based authentication
- **Bcrypt** - Password hashing
- **Winston** - Logging library

## 🏗️ Architecture

### Hybrid Database Design

**PostgreSQL (Relational Data):**
- User authentication and profiles
- Friend relationships
- Follow relationships
- User interests and tags

**MongoDB (Document Data):**
- Posts and content
- Likes and reactions
- Comments and replies
- Notification system

This hybrid approach optimizes for both relational integrity (users, friends) and flexible, scalable content storage (posts, notifications).

## 📋 Prerequisites

Before you begin, ensure you have installed:
- Node.js (version 16 or higher)
- npm or yarn
- PostgreSQL database
- MongoDB database

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SocialNet-Backend-main
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
# PostgreSQL
PG_URL="postgresql://username:password@localhost:5432/socialnet"

# MongoDB
Mongo_URL="mongodb://localhost:27017/socialnet"

# JWT
JWT_SECRET="your-secret-key"
JWT_EXPIRES_IN="7d"
```

4. Initialize databases:
```bash
# Generate Prisma clients for both databases
npm run dbgen

# Push schema to databases
npm run dbpush

# (Optional) Seed database with mock data
npm run dbscript
```

## 🚦 Available Scripts

### Development
```bash
npm run start:dev    # Start in watch mode with hot reload
npm run start        # Start in standard mode
npm run start:debug  # Start with debugging enabled
```

### Production
```bash
npm run build        # Build the application
npm run start:prod   # Start production server
```

### Database Management
```bash
npm run dbgen        # Generate Prisma clients
npm run dbpush       # Push schema changes to databases
npm run dbscript     # Run database seed script
npm run dbtrunc      # Reset databases (caution: deletes all data)
```

### Testing
```bash
npm run test         # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run test:cov     # Run tests with coverage report
npm run test:e2e     # Run end-to-end tests
npm run test:e2e:cov # E2E tests with coverage
```

### Code Quality
```bash
npm run lint         # Run ESLint with auto-fix
npm run format       # Format code with Prettier
```

## 📁 Project Structure

```
src/
├── app.module.ts           # Root application module
├── app.controller.ts       # Root controller
├── app.service.ts          # Root service
├── main.ts                 # Application entry point
├── requests.http           # HTTP request examples
├── xueshen/                # User management module
├── lewis/                  # Posts and content module
├── byan/                   # Social interactions module
└── demo/                   # Demo/testing module

prisma/
├── schema.pg.prisma        # PostgreSQL schema
├── schema.mongo.prisma     # MongoDB schema
└── migrations/             # Database migrations

test/
├── app.e2e-spec.ts        # E2E tests
└── jest-e2e.json          # Jest E2E configuration
```

## 💾 Database Schema

### PostgreSQL Schema

**User Model:**
- Authentication (email, password, role)
- Profile information (username, fullname, avatar, bio)
- User interests and tags
- Location and external links
- Birthday and gender

**Relationships:**
- Friends (bidirectional friendship)
- Follows (unidirectional following)

**User Roles:**
- COMMON - Regular users
- ADMIN - Administrative users
- DISABLED - Disabled accounts

**User Interests:**
- SPORT, MUSIC, MOVIE, TRAVEL, FOOD, GAME, TECH, ART, SCIENCE, LITERATURE, OTHER

### MongoDB Schema

**Post Model:**
- Content (title, text, media)
- Post status (DRAFT, UNDER_REVIEW, PUBLISHED, HIDDEN)
- Replies and reposts (hierarchical structure)
- Timestamps (create/update time)

**Interactions:**
- Likes (many-to-many between users and posts)
- Notifications (LIKE, REPLY, FOLLOW types)
- Notification center per user

## 🔐 Authentication & Security

- **Password Hashing**: Bcrypt with salt rounds
- **JWT Tokens**: Secure token-based authentication
- **CORS**: Configured for cross-origin requests
- **Validation**: Class-validator for input validation
- **Role-Based Access**: Admin and user role separation

## 🌐 API Endpoints

The application runs on `http://127.0.0.1:8000` by default.

Check `src/requests.http` for example API requests.

### Common Endpoints Structure:
- `/auth/*` - Authentication routes
- `/users/*` - User management
- `/posts/*` - Post operations
- `/friends/*` - Friend operations
- `/follows/*` - Follow operations
- `/notifications/*` - Notification management

## 🔧 Configuration

### Global Pipes
- **ValidationPipe**: Automatic request validation and transformation

### CORS Settings
- Origin: `*` (configure for production)
- Methods: GET, POST
- Credentials: Enabled
- Headers: All allowed

### Logging
- Levels: error, warn, log
- Powered by Winston logger

## 🧪 Testing

The project uses Jest for testing:

**Unit Tests:**
- Test individual components and services
- Mock dependencies for isolated testing

**E2E Tests:**
- Test complete API workflows
- Use supertest for HTTP assertions

**Coverage Reports:**
- Generate coverage with `npm run test:cov`
- View reports in the `coverage/` directory

## 🚀 Deployment

### Production Build
```bash
npm run build
```

The compiled output will be in the `dist/` directory.

### Environment Variables for Production
Ensure all environment variables are properly set:
- PostgreSQL connection string (PG_URL)
- MongoDB connection string (Mongo_URL)
- JWT secret and expiration

### Running in Production
```bash
npm run start:prod
```

### Docker Deployment (Recommended)
Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "start:prod"]
```

Build and run:
```bash
docker build -t socialnet-backend .
docker run -p 8000:8000 socialnet-backend
```

### Database Migrations
For production databases:
```bash
# Generate migration for PostgreSQL
npx prisma migrate dev --schema=./prisma/schema.pg.prisma

# Apply migration
npx prisma migrate deploy --schema=./prisma/schema.pg.prisma
```




