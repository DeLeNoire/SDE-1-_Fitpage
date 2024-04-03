# Event Review System

## Overview

The Event Review System is a web application that allows users to submit reviews for events they have attended. This system encompasses various criteria for rating events, provides functionalities for summarizing reviews, accessing ratings for specific criteria, and handling pagination. Additionally, users can like or report reviews, with reviews being flagged if reported more than five times. Organizers can also respond to reviews.

## Features

- **Review Submission:** Authorized users can submit reviews for events they have attended, rating different criteria such as registration experience, event experience, and breakfast experience.
- **Authentication:** Implements authentication mechanisms to ensure that only authorized users can submit reviews.
- **Review Interaction:** Users can like or report reviews. Reviews are automatically flagged if reported more than five times.
- **Organizer Response:** Organizers can respond to reviews.
- **Summary and Ratings:** Provides functionalities to generate a summary of reviews for a specific event and retrieve ratings for each criteria.
- **Pagination:** Implements pagination for browsing through ratings/reviews, ensuring efficient handling of large datasets.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- React.js
- HTML/CSS

## Screenshots

### Auth Page
[Register - API]

<img width="1440" alt="Screenshot 2024-04-04 at 2 49 35 AM" src="https://github.com/DeLeNoire/SDE-1-_Fitpage/assets/134807467/d494ec97-85f9-480a-a863-6eff573d66e9">


### Event Details Page
[Create - Event - API]

<img width="1440" alt="Screenshot 2024-04-04 at 2 50 04 AM" src="https://github.com/DeLeNoire/SDE-1-_Fitpage/assets/134807467/5f029ebe-a376-46f8-9b97-862102c181b7">

[Event Details by id - API]

<img width="1440" alt="Screenshot 2024-04-04 at 2 50 23 AM" src="https://github.com/DeLeNoire/SDE-1-_Fitpage/assets/134807467/323c26ea-d257-4f8a-8055-c7a6056bb523">


### Submit Review Page
![New - Review - API]

<img width="1440" alt="Screenshot 2024-04-04 at 2 50 30 AM" src="https://github.com/DeLeNoire/SDE-1-_Fitpage/assets/134807467/095b55f2-61fe-4d48-916d-3bfa4a831fa9">

### MogoDB Connection Sucess
[User - Retrival - API]

<img width="1260" alt="Screenshot 2024-04-04 at 2 53 36 AM" src="https://github.com/DeLeNoire/SDE-1-_Fitpage/assets/134807467/aed5cd04-e81a-4b0b-bf26-18dbe478419a">


## Installation

1. Clone the repository:
2. Navigate to the project directory:
3. Install dependencies:
4. Create a `.env` file and add your environment variables:

   PORT=3000
   JWT_SECRET=your_jwt_secret_here
   MONGO_URI=your_mongodb_connection_uri
   
6. Start the development server:
7. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

