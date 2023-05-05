from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import requests

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

POKE_URL: str = 'https://pokeapi.co/api/v2/'
# @app.route('/pokemon/<name>')
@app.route('/pokemon')
@cross_origin()
def get_pokemon():
    # print("IN THE SERVER. HERE IS THE NAME:", name)
    try:
        name = request.args.get('name')
        response = requests.get(f'{POKE_URL}pokemon/{name}')
        response.raise_for_status()
        data = response.json()
        return jsonify(data)
    except requests.exceptions.HTTPError as error:
        return jsonify({'error': str(error)}), error.response.status_code
    except Exception as error:
        return jsonify({'error': str(error)}), 500
    
if __name__ == '__main__':
    app.run(debug=True)

