import unittest

def test_fact(n):
    if n == 0:
        return 1
    else:
        return n * test_fact(n-1)
    
class IsFact(unittest.TestCase):
    def test_fact(self):
        self.assertEqual(test_fact(0), 1)
        self.assertEqual(test_fact(1), 1)
        self.assertEqual(test_fact(2), 2)
        self.assertEqual(test_fact(3), 6)
        self.assertEqual(test_fact(4), 24)
        self.assertEqual(test_fact(5), 12)
        
if __name__ == '__main__':
    unittest.main()