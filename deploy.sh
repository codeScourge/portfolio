#!/bin/bash
REMOTE_USER="root"
REMOTE_HOST="116.203.254.26"


read -p "Enter a commit message: " COMMIT_MESSAGE
git add -A
git commit -m "${COMMIT_MESSAGE}"
git push origin main


ssh ${REMOTE_USER}@${REMOTE_HOST} << EOF
    cd /root/applications/portfolio

    echo "Pulling latest code from git..."
    git pull
    
    echo "Running Docker Compose..."
    docker-compose up --build -d
    
    if [ $? -eq 0 ]; then
        echo "Docker Compose ran successfully."
    else
        echo "Failed to run Docker Compose."
        exit 1
    fi
EOF