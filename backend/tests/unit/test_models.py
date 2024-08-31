# Unit tests for models in the Citizen Voting Platform

import unittest
from app import db
from app.models import User, Vote, HealthData

class TestModels(unittest.TestCase):

    def setUp(self):
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()

    def test_user_creation(self):
        user = User(iris_hash='test_hash', social_security_number='123-45-6789')
        db.session.add(user)
        db.session.commit()
        self.assertIsNotNone(user.id)

    def test_vote_creation(self):
        vote = Vote(user_id=1, bill_id='HR1234', choice='yes')
        db.session.add(vote)
        db.session.commit()
        self.assertIsNotNone(vote.id)

    def test_health_data_creation(self):
        health_data = HealthData(user_id=1, macular_degeneration_risk=0.05)
        db.session.add(health_data)
        db.session.commit()
        self.assertIsNotNone(health_data.id)

if __name__ == '__main__':
    unittest.main()
