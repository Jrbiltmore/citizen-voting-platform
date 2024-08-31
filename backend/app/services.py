# Business logic services for the Citizen Voting Platform

from .models import User, Vote, HealthData
from . import db

def register_user_service(iris_hash, ssn, heartbeat_pattern=None, respiration_pattern=None, pupil_dilation=None, vasculature=None):
    user = User(
        iris_hash=iris_hash,
        social_security_number=ssn,
        heartbeat_pattern=heartbeat_pattern,
        respiration_pattern=respiration_pattern,
        pupil_dilation_data=pupil_dilation,
        vasculature_pattern=vasculature
    )
    db.session.add(user)
    db.session.commit()
    return user

def cast_vote_service(user_id, bill_id, choice):
    vote = Vote(user_id=user_id, bill_id=bill_id, choice=choice)
    db.session.add(vote)
    db.session.commit()
    return vote

def analyze_health_data(user_id):
    health_data = HealthData.query.filter_by(user_id=user_id).first()
    # Analyze and update health data...
    health_data.macular_degeneration_risk += 0.01  # Example logic
    db.session.commit()
    return health_data
