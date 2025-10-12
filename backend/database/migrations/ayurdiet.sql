-- USERS (dietitians, admins, possibly clients as direct users)
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    password_hash VARCHAR(200) NOT NULL,
    role VARCHAR(40) NOT NULL DEFAULT 'dietitian',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CLIENTS (patients, linked to a user/dietitian)
CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    dob DATE,
    sex VARCHAR(20),
    contact VARCHAR(100),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- DIET PLANS (one per client, or templates)
CREATE TABLE diet_plans (
    id SERIAL PRIMARY KEY,
    client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
    title VARCHAR(150),
    goal TEXT,
    start_date DATE,
    end_date DATE,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- PLANNED MEALS in a Diet Plan
CREATE TABLE plan_meals (
    id SERIAL PRIMARY KEY,
    diet_plan_id INTEGER REFERENCES diet_plans(id) ON DELETE CASCADE,
    meal_time VARCHAR(50) NOT NULL, -- breakfast, lunch, etc
    date DATE,
    notes TEXT
);

-- FOODS/INGREDIENTS master
CREATE TABLE foods (
    id SERIAL PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    kcals DECIMAL(6,2),
    protein DECIMAL(6,2),
    carbs DECIMAL(6,2),
    fat DECIMAL(6,2),
    fiber DECIMAL(6,2),
    ayurveda_tag VARCHAR(60), -- vata/pitta/kapha, guna, etc
    allergens TEXT,
    description TEXT
);

-- MEAL ITEMS inside a planned meal
CREATE TABLE meal_items (
    id SERIAL PRIMARY KEY,
    plan_meal_id INTEGER REFERENCES plan_meals(id) ON DELETE CASCADE,
    food_id INTEGER REFERENCES foods(id),
    quantity DECIMAL(7,2),
    unit VARCHAR(30)
);

-- RECIPES
CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    name VARCHAR(120) NOT NULL,
    description TEXT,
    steps TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- MEAL LOGS (what the client actually ate)
CREATE TABLE meal_logs (
    id SERIAL PRIMARY KEY,
    client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
    plan_meal_id INTEGER REFERENCES plan_meals(id) ON DELETE SET NULL,
    food_id INTEGER REFERENCES foods(id),
    quantity DECIMAL(7,2),
    unit VARCHAR(30),
    date_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    notes TEXT
);

-- METRICS (client's weight, measurements, mood etc over time)
CREATE TABLE metrics (
    id SERIAL PRIMARY KEY,
    client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
    entry_date DATE NOT NULL,
    weight DECIMAL(6,2),
    bmi DECIMAL(5,2),
    blood_pressure VARCHAR(15),
    energy_level VARCHAR(40),
    notes TEXT
);

-- ALLERGENS
CREATE TABLE allergens (
    id SERIAL PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    description TEXT
);

-- CLIENT<>ALLERGENS mapping (many:many)
CREATE TABLE client_allergens (
    client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
    allergen_id INTEGER REFERENCES allergens(id) ON DELETE CASCADE,
    PRIMARY KEY (client_id, allergen_id)
);

-- FILE UPLOADS (lab results, prescriptions, etc)
CREATE TABLE uploads (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    client_id INTEGER REFERENCES clients(id),
    filename VARCHAR(180),
    type VARCHAR(40),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CHAT/CONSULT SESSIONS (text messages between user/client)
CREATE TABLE chat_sessions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    client_id INTEGER REFERENCES clients(id),
    message TEXT,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- REMINDERS (meals, med checkins, etc)
CREATE TABLE reminders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    client_id INTEGER REFERENCES clients(id),
    content TEXT,
    reminder_type VARCHAR(30),
    scheduled_time TIMESTAMP,
    sent BOOLEAN DEFAULT FALSE
);

-- NUTRIENT TARGETS (per user/client, plan-specific targets)
CREATE TABLE nutrient_targets (
    id SERIAL PRIMARY KEY,
    client_id INTEGER REFERENCES clients(id),
    diet_plan_id INTEGER REFERENCES diet_plans(id),
    kcals INT,
    protein DECIMAL(7,2),
    carbs DECIMAL(7,2),
    fat DECIMAL(7,2),
    fiber DECIMAL(7,2),
    vitamin_a DECIMAL(7,2),
    vitamin_c DECIMAL(7,2),
    iron DECIMAL(7,2),
    calcium DECIMAL(7,2),
    notes TEXT
);

-- SETTINGS (key-value per user)
CREATE TABLE settings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    key VARCHAR(90),
    value TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- PLAN HISTORY (track previous versions of plans)
CREATE TABLE plan_history (
    id SERIAL PRIMARY KEY,
    diet_plan_id INTEGER REFERENCES diet_plans(id) ON DELETE CASCADE,
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    short_summary TEXT,
    editor_user_id INTEGER REFERENCES users(id),
    plan_snapshot JSONB
);
    