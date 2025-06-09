# ---------- base image ----------
    FROM node:20-alpine            

    # ---------- app setup ----------
    WORKDIR /app
    
    # copy dependency manifests first for layer-cache friendliness
    COPY package.json package-lock.json ./
    
    # deterministic install (uses package-lock.json)
    RUN npm ci --omit=dev            
    
    # copy the rest of your source
    COPY . .
    
    # ---------- build ----------
    RUN npm run build                
    
    # minimal static file server
    RUN npm install -g serve
    
    # container will listen on 3000
    EXPOSE 3000
    
    # ---------- runtime ----------
    CMD ["serve", "-s", "build", "-l", "3000"]
    