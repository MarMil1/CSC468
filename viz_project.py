# J. Nathan Farmer, Sachinder Katoch, Rohit Kothari
#
# Step 5: Run this file to launch the web server

from flask import Flask, render_template, request, jsonify, send_from_directory
import prep_data

app = Flask(__name__, static_url_path='')

@app.route('/')
def index():
    try:
        return render_template('index.html')
    except Exception as e:
        return(str(e))

@app.route('/data/<path:path>')
def send_html(path):
    return send_from_directory('data', path)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')