# Production configuration settings

from .default import Config

class ProductionConfig(Config):
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = 'postgresql://user:password@localhost/citizen_voting'
    SECRET_KEY = 'your_production_secret_key'
