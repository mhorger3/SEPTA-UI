import os
import json
import requests
import pprint

from dotenv import load_dotenv
from flask import Flask

app = Flask(__name__)
load_dotenv()

if __name__ == "__main__":
    host = os.environ.get("HOST", "0.0.0.0")
    port = os.environ.get("PORT", 5000)
    j = json.loads(requests.get('https://api.darksky.net/forecast/4c6ed4cf490531031ccd759d722b2035/42.3601,-71.0589').text)
    print(pprint.pprint(j))

    # app.run(host=host, port=port)
