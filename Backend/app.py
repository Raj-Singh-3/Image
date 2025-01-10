from flask import Flask, request, jsonify, send_file
import cv2
import numpy as np
import os
from io import BytesIO
from PIL import Image
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from React frontend

def cartoonize_image(file):
    # Read the image file
    img = Image.open(file).convert('RGB')
    img_np = np.array(img)

    # Convert to grayscale
    gray = cv2.cvtColor(img_np, cv2.COLOR_RGB2GRAY)
    gray = cv2.medianBlur(gray, 5)

    # Get edges
    edges = cv2.adaptiveThreshold(
        gray, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY, 9, 9)

    # Apply bilateral filter
    color = cv2.bilateralFilter(img_np, 9, 300, 300)

    # Combine color and edges
    cartoon = cv2.bitwise_and(color, color, mask=edges)

    # Convert back to PIL image
    cartoon_pil = Image.fromarray(cartoon)

    # Save to a BytesIO stream
    cartoon_io = BytesIO()
    cartoon_pil.save(cartoon_io, format='PNG')
    cartoon_io.seek(0)

    return cartoon_io

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'image' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['image']
    if file:
        try:
            cartoon_image = cartoonize_image(file)
            return send_file(cartoon_image, mimetype='image/png', as_attachment=False, download_name="cartoon_image.png")
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    else:
        return jsonify({'error': 'Invalid file type'}), 400

if __name__ == '__main__':
    app.run(debug=True)