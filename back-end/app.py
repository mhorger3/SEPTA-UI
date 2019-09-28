import os

from dotenv import load_dotenv
from flask import Flask

app = Flask(__name__)
load_dotenv()

if __name__ == "__main__":
    host = os.environ.get("HOST", "0.0.0.0")
    port = os.environ.get("PORT", 5000)
    app.run(host=host, port=port)
