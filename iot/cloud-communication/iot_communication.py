# IoT device communication module for the Citizen Voting Platform

import requests

def send_health_data(device_id, data):
    url = 'http://yourserver.com/api/health'
    payload = {'device_id': device_id, 'data': data}
    headers = {'Content-Type': 'application/json'}

    response = requests.post(url, json=payload, headers=headers)

    if response.status_code == 200:
        print('Data sent successfully.')
    else:
        print('Failed to send data:', response.status_code)
