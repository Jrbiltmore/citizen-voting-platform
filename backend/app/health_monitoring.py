# Health monitoring functions for the Citizen Voting Platform

from .models import HealthData
from . import db

def update_health_risk(user_id, risk_factor):
    health_data = HealthData.query.filter_by(user_id=user_id).first()
    if not health_data:
        health_data = HealthData(user_id=user_id)
        db.session.add(health_data)
    
    health_data.macular_degeneration_risk = risk_factor
    db.session.commit()
    return health_data
