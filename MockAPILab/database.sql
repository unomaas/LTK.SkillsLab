-- Create the table
CREATE TABLE loan (
  loan_id SERIAL PRIMARY KEY,
  borrowers JSONB
);

-- Insert the data
INSERT INTO loan (borrowers)
VALUES
  ('[
    {
      "paidId": 1,
      "firstName": "John",
      "lastName": "Smith",
      "phone": "555-555-5555"
    },
    {
      "paidId": 2,
      "firstName": "Jane",
      "lastName": "Smith",
      "phone": "555-555-5555"
    }
  ]'),
  ('[
    {
      "paidId": 3,
      "firstName": "John",
      "lastName": "Doe",
      "phone": "555-555-5555"
    },
    {
      "paidId": 4,
      "firstName": "Jane",
      "lastName": "Doe",
      "phone": "555-555-5555"
    }
  ]');