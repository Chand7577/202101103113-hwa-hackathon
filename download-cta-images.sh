#!/bin/bash

# Create directory for CTA images
mkdir -p public/images/cta

echo "📸 Downloading 5 free stock images for CTA section..."
echo ""

# Image 1: Golden Retriever - Unsplash
echo "1/5 Downloading Golden Retriever image..."
curl -L "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=1200&q=80" \
  -o public/images/cta/cta-dog-1.jpg

# Image 2: Australian Shepherd - Unsplash  
echo "2/5 Downloading Australian Shepherd image..."
curl -L "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80" \
  -o public/images/cta/cta-dog-2.jpg

# Image 3: Border Collie - Unsplash
echo "3/5 Downloading Border Collie image..."
curl -L "https://images.unsplash.com/photo-1568572933382-74d440642117?w=1200&q=80" \
  -o public/images/cta/cta-dog-3.jpg

# Image 4: French Bulldog - Unsplash
echo "4/5 Downloading French Bulldog image..."
curl -L "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200&q=80" \
  -o public/images/cta/cta-dog-4.jpg

# Image 5: Mixed Breed - Unsplash
echo "5/5 Downloading happy dog image..."
curl -L "https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=1200&q=80" \
  -o public/images/cta/cta-dog-5.jpg

echo ""
echo "✅ All images downloaded successfully!"
echo "📁 Images saved to: public/images/cta/"
echo ""
echo "Images downloaded:"
ls -lh public/images/cta/
