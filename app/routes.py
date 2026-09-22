from flask import Blueprint, jsonify, render_template


main = Blueprint("main", __name__)


@main.get("/")
def home():
    return render_template("index.html")


@main.get("/api/status")
def status():
    return jsonify({
        "project": "FocusFlow",
        "status": "online",
        "message": "Your focus workspace is ready."
    })
