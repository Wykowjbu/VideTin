#!/bin/bash
# Script khởi tạo hạ tầng dự án VibeTin
# Yêu cầu: Đã cài đặt gcloud SDK và login bằng Service Account

set -e

PROJECT_ID="softwarehouse-490000"
REGION="asia-southeast1"
DB_NAME="vibetin-db"
BUCKET_NAME="vibetin-media-storage"

echo "Bắt đầu khởi tạo hạ tầng cho dự án VibeTin..."

# 1. Tạo Google Cloud Storage Bucket
gcloud storage buckets create gs://$BUCKET_NAME --location=$REGION || echo "Bucket already exists, skipping."

# 2. Tạo Cloud SQL Instance (PostgreSQL)
gcloud sql instances create $DB_NAME \
    --database-version=POSTGRES_15 \
    --tier=db-f1-micro \
    --region=$REGION || echo "Cloud SQL instance may already exist."

# 3. Tạo database bên trong instance
gcloud sql databases create vibetin_db --instance=$DB_NAME

echo "Khởi tạo hạ tầng hoàn tất!"
