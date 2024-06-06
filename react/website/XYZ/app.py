from flask import Flask, render_template, request, send_file
from PIL import Image
import io

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/convert', methods=['POST'])
def convert():
    file = request.files['file']
    conversion_type = request.form['conversion_type']
    
    if conversion_type == 'jpg_to_pdf':
        img = Image.open(io.BytesIO(file.read()))
        pdf_bytes = io.BytesIO()
        img.save(pdf_bytes, format='PDF')
        pdf_bytes.seek(0)
        return send_file(pdf_bytes, attachment_filename='converted.pdf', as_attachment=True)
    
    elif conversion_type == 'pdf_to_jpg':
        # Add PDF to JPG conversion logic here
        pass

if __name__ == '__main__':
    app.run(debug=True)
