# Database models for the Citizen Voting Platform

from . import db

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    iris_hash = db.Column(db.String(128), unique=True, nullable=False)
    social_security_number = db.Column(db.String(11), unique=True, nullable=False)
    heartbeat_pattern = db.Column(db.String(64))
    respiration_pattern = db.Column(db.String(64))
    pupil_dilation_data = db.Column(db.Text)
    vasculature_pattern = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

class Vote(db.Model):
    __tablename__ = 'votes'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    bill_id = db.Column(db.String(32), nullable=False)
    choice = db.Column(db.String(8), nullable=False)
    timestamp = db.Column(db.DateTime, default=db.func.current_timestamp())

class HealthData(db.Model):
    __tablename__ = 'health_data'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    macular_degeneration_risk = db.Column(db.Float, default=0.0)
    last_update = db.Column(db.DateTime, default=db.func.current_timestamp())
