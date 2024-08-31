# Default configuration settings for the Citizen Voting Platform

import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'default_secret_key'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///citizen_voting.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    BLOCKCHAIN_PROVIDER = os.environ.get('BLOCKCHAIN_PROVIDER') or 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'
