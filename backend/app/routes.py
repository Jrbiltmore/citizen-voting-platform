# Define API routes for the Citizen Voting Platform

from flask import request, jsonify
from . import app, db
from .models import User, Vote, HealthData

@app.route('/register', methods=['POST'])
def register_user():
    data = request.json
    new_user = User(
        iris_hash=data['iris_hash'],
        social_security_number=data['social_security_number'],
        heartbeat_pattern=data.get('heartbeat_pattern', ''),
        respiration_pattern=data.get('respiration_pattern', ''),
        pupil_dilation_data=data.get('pupil_dilation_data', ''),
        vasculature_pattern=data.get('vasculature_pattern', '')
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/vote', methods=['POST'])
def cast_vote():
    data = request.json
    vote = Vote(
        user_id=data['user_id'],
        bill_id=data['bill_id'],
        choice=data['choice']
    )
    db.session.add(vote)
    db.session.commit()
    return jsonify({'message': 'Vote cast successfully'}), 201

@app.route('/health', methods=['GET'])
def get_health_data():
    user_id = request.args.get('user_id')
    health_data = HealthData.query.filter_by(user_id=user_id).first()
    return jsonify({
        'macular_degeneration_risk': health_data.macular_degeneration_risk,
        'last_update': health_data.last_update.isoformat()
    }) if health_data else jsonify({'message': 'No health data found'}), 404
