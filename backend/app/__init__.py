# Initialize the backend application module with error handling

from flask import Flask, json
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from werkzeug.exceptions import HTTPException
import logging

# Create Flask application instance
app = Flask(__name__)
CORS(app)

# Configure application
app.config.from_object('config.default')

# Initialize database
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Import routes to register them with the application
from . import routes, models

# Error handling
@app.errorhandler(HTTPException)
def handle_exception(e):
    """Return JSON instead of HTML for HTTP errors."""
    response = e.get_response()
    response.data = json.dumps({
        "code": e.code,
        "name": e.name,
        "description": e.description,
    })
    response.content_type = "application/json"
    return response

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
