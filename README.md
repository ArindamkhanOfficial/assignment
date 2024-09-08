# Stock Manager

## Overview
A simple full-stack web application for managing a list of stocks. Built with Django for the backend and basic HTML, CSS, and JavaScript for the frontend.

## Setup

### Backend
1. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
2. Configure PostgreSQL database in `stock_manager/settings.py`.
3. Run migrations:
    ```bash
    python manage.py migrate
    ```
4. Start the server:
    ```bash
    python manage.py runserver
    ```

### Frontend
1. Open `index.html` in your browser to interact with the frontend.

## Features
- Add, view, edit, and delete stocks
- Basic styling with Bootstrap

## Optional Features
- Pagination for the list of stocks
- Basic CSS styling
