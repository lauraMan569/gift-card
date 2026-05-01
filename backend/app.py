from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import json
import uuid
import os

import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash


app = Flask(__name__)
CORS(app)


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CARDS_FILE = os.path.join(BASE_DIR, "cards.json")
FRONTEND_DIR = os.path.join(BASE_DIR, "..", "frontend")


def load_cards():
    if not os.path.exists(CARDS_FILE):
        return {}

    with open(CARDS_FILE, "r", encoding="utf-8") as file:
        return json.load(file)


def save_cards(cards):
    with open(CARDS_FILE, "w", encoding="utf-8") as file:
        json.dump(cards, file, ensure_ascii=False, indent=4)


@app.route("/api/cards", methods=["POST"])
def create_card():
    card_data = request.json

    card_id = str(uuid.uuid4())[:8]

    cards = load_cards()
    cards[card_id] = card_data
    save_cards(cards)

    return jsonify({
        "id": card_id,
        "link": f"http://172.20.10.3:5000/card/{card_id}"
    })



@app.route("/api/cards/<card_id>", methods=["GET"])
def get_card_data(card_id):
    cards = load_cards()

    if card_id not in cards:
        return jsonify({"error": "Карта не найдена"}), 404

    return jsonify(cards[card_id])



@app.route("/style.css")
def style():
    return send_from_directory(FRONTEND_DIR, "style.css")


@app.route("/view.js")
def view_script():
    return send_from_directory(FRONTEND_DIR, "view.js")



@app.route("/card/<card_id>", methods=["GET"])
def get_card(card_id):
    cards = load_cards()

    if card_id not in cards:
        return "Карта не найдена", 404

    print("FRONTEND_DIR:", FRONTEND_DIR)
    print("view exists:", os.path.exists(os.path.join(FRONTEND_DIR, "view.html")))

    return send_from_directory(FRONTEND_DIR, "view.html")







#вход и регистрация

def init_db():
    conn = sqlite3.connect("users.db")
    cur = conn.cursor()

    cur.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL
        )
    """)

    conn.commit()
    conn.close()

init_db()   



@app.route("/api/register", methods=["POST"])
def register():
    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return {"error": "Введите email и пароль"}, 400

    password_hash = generate_password_hash(password)

    try:
        conn = sqlite3.connect("users.db")
        cur = conn.cursor()

        cur.execute(
            "INSERT INTO users (email, password_hash) VALUES (?, ?)",
            (email, password_hash)
        )

        conn.commit()
        conn.close()

        return {"message": "Регистрация успешна"}, 201

    except sqlite3.IntegrityError:
        return {"error": "Пользователь уже существует"}, 409
    


@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return {"error": "Введите email и пароль"}, 400

    conn = sqlite3.connect("users.db")
    cur = conn.cursor()

    cur.execute(
        "SELECT password_hash FROM users WHERE email = ?",
        (email,)
    )

    user = cur.fetchone()
    conn.close()

    if not user:
        return {"error": "Пользователь не найден"}, 404

    password_hash = user[0]

    if check_password_hash(password_hash, password):
        return {"message": "Вход выполнен"}, 200
    else:
        return {"error": "Неверный пароль"}, 401
    

#запуск

if __name__ == "__main__":
    print(app.url_map)
    app.run(host="0.0.0.0", port=5000, debug=True, use_reloader=False)
