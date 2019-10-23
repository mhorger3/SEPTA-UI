import os
import json
import requests
import pprint
import loguru

from tornado.ioloop import IOLoop
from tornado.web import Application
from routes.BaseHandler import BaseHandler
import db.database_controller as db


def create_app():
    return Application([
        (r'/', BaseHandler),
    ],
        db=db,
    )


if __name__ == "__main__":
    host = os.environ.get("HOST", "0.0.0.0")
    port = os.environ.get("PORT", 5000)

    app = create_app()
    app.listen(port)
    loguru.logger.info(f'Server starting on port: {port}')
    IOLoop.current().start()
