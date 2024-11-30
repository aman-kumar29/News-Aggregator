# News Aggregator App

Welcome to the News Aggregator App – a responsive and intuitive React application that lets users stay informed about the latest news headlines. Powered by the News API, this project showcases my front-end development and real-time data integration skills.
## Amazon S3 bucket deployment link 
Steps to deploy it on the S3 bucket
- run `npm run build`
- go to the AWS account and create an S3 bucket.
- change permissions to allow public access and static hosting enabled
- go and create a bucket policy and save it
- next upload the build folder contents there and then go visit the static hosting section in the properties tab
- click on the link and hurray!!!! your static website has been deployed
    
    - http://new-aggregator-app-amankr29.s3-website.ap-south-1.amazonaws.com/
## Features

- **Real-time Updates:** Fetches and displays the latest news headlines from News API.
- **Category Filtering:** Allows users to filter news by categories such as technology, business, health, etc.
- **Responsive Design:** Ensures a seamless user experience across various devices.

## Technologies Used

- React
- News API
- HTML5 & CSS3

## How to Use

1. Clone the repository: `git clone https://github.com/your-username/news-aggregator-app.git`
2. Navigate to the project directory: `cd news-aggregator-app`
3. Install dependencies: `npm install`
4. Start the application: `npm start`
5. Open your browser and visit: `http://localhost:3000`

or 
1. run this `docker compose up` in your terminal if you have docker installed

## Acknowledgments

- Thanks to [Newsdata.io API](https://newsdata.io/) for providing the news data.
