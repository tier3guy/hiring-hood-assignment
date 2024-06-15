### Weather Application README

#### Overview

This Weather Application is a project developed using modern web technologies as an assignment for Hiring Hood Company. It utilizes geolocation services and the OpenWeather API to fetch real-time weather data. The frontend is built using Next.js, Shadcn, Tailwind CSS, and TypeScript. External packages like Recharts and react-geolocated are integrated to enhance functionality and user experience.

#### Features

-   **Real-time Weather Data:** Fetches current weather information based on the user's location using the OpenWeather API.
-   **Geolocation Services:** Utilizes react-geolocated for precise location detection of the user.
-   **Interactive Charts:** Displays weather trends using Recharts to visualize data such as temperature, humidity, and wind speed over time.
-   **Responsive Design:** Implemented with Tailwind CSS for a mobile-first approach, ensuring the application is accessible on various devices.

#### Technologies Used

-   **Frontend Framework:** Next.js
-   **CSS Framework:** Tailwind CSS
-   **Styling:** Shadcn for enhanced design capabilities
-   **Type Checking:** TypeScript
-   **Charting:** Recharts for data visualization
-   **Geolocation:** react-geolocated for location services

#### Installation and Setup

1. Clone the repository from GitHub:
    ```
    git clone https://github.com/your/repository.git
    ```
2. Navigate into the project directory:
    ```
    cd weather-application
    ```
3. Install dependencies:
    ```
    npm install
    ```
4. Obtain an API key from OpenWeather and configure it in your environment variables.

5. Start the development server:
    ```
    npm run dev
    ```
6. Open your browser and navigate to `http://localhost:3000` to use the application.

#### Usage

1. **Allow Location Access:** Upon loading, the application will request permission to access your current location.

2. **View Weather Information:** Once location access is granted, the application fetches and displays real-time weather data for your current location.

#### Project Structure

-   **app/**: Contains Next.js pages (e.g., page.tsx for the main application).
-   **components/**: Reusable React components used throughout the application.
-   **public/**: Static assets and favicon.

#### API Usage

-   **OpenWeather API:** The application makes HTTP requests to the OpenWeather API to retrieve weather data. Ensure you have an API key and configure it securely.

#### Credits

-   **Developed By:** Avinash Gupta

#### License

This project is licensed under the MIT License - see the LICENSE file for details.

#### Contact

For any inquiries or feedback regarding this Weather Application, please contact avinashgupta.works@gmail.com
