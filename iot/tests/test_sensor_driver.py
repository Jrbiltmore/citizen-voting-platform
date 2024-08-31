# Test cases for the sensor driver in the Citizen Voting Platform

import unittest
from sensor_driver import readSensorData

class TestSensorDriver(unittest.TestCase):

    def test_readSensorData_valid(self):
        data = readSensorData()
        self.assertNotEqual(data, -1000)
        self.assertTrue(isinstance(data, float))

    def test_readSensorData_error(self):
        # Simulate error condition
        data = readSensorData()
        self.assertEqual(data, -1000)

if __name__ == '__main__':
    unittest.main()
