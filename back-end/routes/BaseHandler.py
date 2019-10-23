from tornado.web import RequestHandler


class BaseHandler(RequestHandler):
    def get(self):
        self.write('test')
        print(self.settings.get('db').get_client())
