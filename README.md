# Voting Application

This is a backend application for a voting system where users can vote for candidates. It provides functionalities for user authentication, candidate management, and voting.

## Features
- **User Authentication:** Sign up and login with Aadhar Card Number and password.
- **View Candidates:** Users can view the list of candidates.
- **Vote Management:** Users can vote for a candidate (only once).
- **Admin Management:** Admins can manage candidates (add, update, delete).
- **Admin Restrictions:** Admins cannot vote.

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB**
- **JSON Web Tokens (JWT)** for authentication

## Installation
1. **Clone the repository**:
 git clone https://github.com/shaktikadam1630/votesmart
2. **Navigate to the project directory**:
3. **Install dependencies**:
4. **Start the application**:
     npm start

## API Endpoints

### Authentication
- **Sign Up**
- `POST /signup`: Sign up a new user.
- **Login**
- `POST /login`: Login an existing user.

### Candidates
- **Get Candidates**
- `GET /candidates`: Retrieve the list of all candidates.
- **Add Candidate** (Admin only)
- `POST /candidates`: Add a new candidate.
- **Update Candidate** (Admin only)
- `PUT /candidates/:id`: Update a candidate by their ID.
- **Delete Candidate** (Admin only)
- `DELETE /candidates/:id`: Delete a candidate by their ID.

### Voting
- **Get Vote Count**
- `GET /candidates/vote/count`: Retrieve the count of votes for each candidate.
- **Vote for Candidate** (User only)
- `POST /candidates/vote/:id`: Vote for a candidate.

### User Profile
- **Get Profile**
- `GET /users/profile`: Get user profile information.
- **Change Password**
- `PUT /users/profile/password`: Change the user's password.

## Usage
1. **Sign up** with your Aadhar Card number and password.
2. **Login** to receive a JWT token for accessing protected routes.
3. **View candidates** and vote for a candidate.
4. **Admins** can manage the list of candidates using the respective API endpoints.

## Contributing
Contributions are welcome! If you find any issues or want to enhance the functionality, feel free to submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For any inquiries or feedback, please reach out to [your-email@example.com].

 
