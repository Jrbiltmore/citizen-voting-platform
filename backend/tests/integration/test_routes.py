# Integration tests for routes in the Citizen Voting Platform

import unittest
from app import app, db
from app.models import User, Vote, HealthData

class TestRoutes(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()

    def test_register_user(self):
        response = self.app.post('/register', json={
            'iris_hash': 'test_hash',
            'social_security_number': '123-45-6789'
        })
        self.assertEqual(response.status_code, 201)
        self.assertIn('User registered successfully', response.data.decode())

    def test_cast_vote(self):
        user = User(iris_hash='test_hash', social_security_number='123-45-6789')
        db.session.add(user)
        db.session.commit()
        response = self.app.post('/vote', json={
            'user_id': user.id,
            'bill_id': 'HR1234',
            'choice': 'yes'
        })
        self.assertEqual(response.status_code, 201)
        self.assertIn('Vote cast successfully', response.data.decode())

if __name__ == '__main__':
    unittest.main()
