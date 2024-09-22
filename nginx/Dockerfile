FROM nginx:alpine

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Create directories for SSL certificates
RUN mkdir -p /etc/ssl/certs /etc/ssl/private

# Copy SSL certificates and Cloudflare configuration
COPY cloudflare.pem /etc/ssl/certs/cloudflare.pem
COPY cloudflare.key /etc/ssl/private/cloudflare.key
COPY cloudflare.conf /etc/nginx/cloudflare.conf

# Expose HTTP and HTTPS ports
EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]