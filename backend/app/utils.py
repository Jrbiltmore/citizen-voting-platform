# Utility functions for the Citizen Voting Platform

import hashlib

def hash_data(data):
    return hashlib.sha256(data.encode()).hexdigest()

def format_response(data):
    return {
        'status': 'success',
        'data': data
    }
