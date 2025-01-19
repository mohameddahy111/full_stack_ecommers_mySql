# Step 1: Use the Node.js 18 base image
FROM node:18 AS builder

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package manager files
COPY package.json ./
COPY yarn.lock ./
COPY package-lock.json ./

# Step 4: Install dependencies based on the available package manager
RUN if [ -f yarn.lock ]; then yarn install; \
    elif [ -f package-lock.json ]; then npm install; \
    else echo "No package manager lock file found. Exiting."; exit 1; fi

# Step 5: Copy the entire project into the container
COPY . .

# Step 6: Build the Next.js application
RUN if [ -f yarn.lock ]; then yarn build; \
    elif [ -f package-lock.json ]; then npm run build; \
    else echo "No package manager lock file found. Exiting."; exit 1; fi

# Step 7: Use a lightweight Node.js image for serving the app
FROM node:18-slim AS runner

# Step 8: Set the working directory inside the container
WORKDIR /app

# Step 9: Copy the build files and dependencies from the builder stage
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/package-lock.json ./package-lock.json

# Step 10: Expose the application port
EXPOSE 3000

# Step 11: Define the default command to start the application
CMD [ "sh", "-c", "if [ -f yarn.lock ]; then yarn start; else npm start; fi" ]
