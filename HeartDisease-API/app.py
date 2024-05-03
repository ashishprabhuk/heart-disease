#final code works

# from flask import Flask, request, jsonify, render_template
# from flask_cors import CORS
# from flask_restful import Resource, Api
# import F_model

# app = Flask(__name__)
# CORS(app)
# api = Api(app)

# class Test(Resource):
#     def get(self):
#         return "Welcome to The Backend API"

#     def post(self):
#         try:
#             value = request.get_json()
#             if value:
#                 ans = F_model.get_values(value)
#                 return ans
#             else:
#                 return {"error": "Invalid format."}
#         except Exception as error:
#             return {'error': str(error)}

# api.add_resource(Test, '/api')

# @app.route('/')
# def view_form():
#     return render_template('login.html')

# if __name__ == "__main__":
#     app.run(debug=True)



from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from flask_restful import Resource, Api
import F_model

app = Flask(__name__)
CORS(app)
api = Api(app)

class Test(Resource):
    def get(self):
        return "Welcome to The Backend API"

    def post(self):
        try:
            value = request.get_json()
            if value:
                ans = F_model.get_values(value)
                return ans
            else:
                return {"error": "Invalid format."}
        except Exception as error:
            return {'error': str(error)}

api.add_resource(Test, '/api')

@app.route('/')
def view_form():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
