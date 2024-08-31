# Validators for API request data

def validate_registration_data(data):
    required_fields = ['iris_hash', 'social_security_number']
    for field in required_fields:
        if field not in data or not data[field]:
            return False, f'Missing field: {field}'
    return True, ''

def validate_vote_data(data):
    required_fields = ['user_id', 'bill_id', 'choice']
    for field in required_fields:
        if field not in data or not data[field]:
            return False, f'Missing field: {field}'
    return True, ''
