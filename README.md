## React Interactive Utility Project

This React project is a collection of interactive utility components, showcasing multiple mini-apps including a **birthday wish card generator**, **OTP login system**, **GitHub profile fetcher**, **paragraph generator**, and a **profile UI with background color changer**. It uses **Recoil** for state management and **Tailwind CSS** for styling.

---

## Table of Contents

* [Features](#features)
* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Usage](#usage)
* [Components Overview](#components-overview)
* [Credits](#credits)

---

## Features

1. **Birthday Wish Card**

   * Enter your name and display a beautiful multi-step birthday card with personalized messages.
   * Messages are displayed sentence by sentence for better readability.

2. **OTP Login**

   * Simulates login via phone number using a 4-digit OTP.
   * OTP is generated randomly and validated in real-time.

3. **GitHub Profile Fetcher**

   * Enter a GitHub username to fetch user profile details such as avatar, name, bio, followers, following, and public repositories.
   * Links to email and portfolio (if available).

4. **Paragraph Generator**

   * Generate a random paragraph of a specified number of words.
   * Useful for testing UI, dummy text, or practicing content generation.

5. **Profile Card with Background Color Changer**

   * Displays a profile card with social stats (Followers, Likes, Posts).
   * Allows the user to change the page background color dynamically.

---

## Technologies Used

* **React** – JavaScript library for building user interfaces.
* **Recoil** – For state management.
* **Tailwind CSS** – Utility-first CSS framework for styling.
* **JavaScript ES6+** – Modern JavaScript features for functional components.
* **HTML & CSS** – Core web technologies.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Tilak-csd/Assignment-week-7.git
   ```
2. Navigate to the project directory:

   ```bash
   cd Assignment-week-7
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
4. Run the development server:

   ```bash
   npm run dev
   ```
5. Open your browser at `http://localhost:3000` to view the project.

---

## Usage

* **Birthday Wish Card**

  1. Navigate to the Birthday Wish section.
  2. Enter your name and click **Done**.
  3. Click **Next** to go through multiple birthday messages.
  4. Click **Home** to restart.

* **OTP Login**

  1. Enter your phone number and click **Send OTP**.
  2. Enter the 4-digit OTP displayed in the alert.
  3. Click **Submit** to log in successfully.

* **GitHub Profile**

  1. Enter a GitHub username in the input box.
  2. Click **Fetch User** to display their profile information.

* **Paragraph Generator**

  1. Enter the number of words you want.
  2. Click **Generate** to display a random paragraph.

* **Profile Card**

  1. View the profile card with user image and stats.
  2. Use color buttons to dynamically change the background color.

---

## Components Overview

| Component                | Description                                                       |
| ------------------------ | ----------------------------------------------------------------- |
| `BgColorChanged.jsx`     | Changes the page background color dynamically using buttons.      |
| `BirthdayWish.jsx`       | Multi-step birthday card with Recoil-managed state.               |
| `Card.jsx`               | Fetches and displays GitHub user profile.                         |
| `OTPLogin.jsx`           | Simulates phone OTP login with validation and navigation.         |
| `ParagraphGenerator.jsx` | Generates random paragraph based on user input.                   |
| `Profile.jsx`            | Displays a profile card with image, social stats, and background. |
| `store/atoms/main.jsx`   | Recoil state atoms for managing app-wide states.                  |

---

## Credits

* Developed using **React** and **Tailwind CSS**.
* State management handled by **Recoil**.
* Author: Tilak Man Gubhaju

---

This project is a **fun interactive React playground** demonstrating various UI patterns, state management, and user interactions.

---

