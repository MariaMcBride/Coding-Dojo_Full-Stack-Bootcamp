from flask import Flask

app = Flask(__name__)
app.secret_key = "worcestershire"

DB = "dojos_and_ninjas_schema"