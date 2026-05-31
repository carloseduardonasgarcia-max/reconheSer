import os
import random
from flask import Flask, render_template, jsonify, request, session

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'reconheser-secret-2025')

@app.route('/')
def onboarding():
    return render_template('onboarding.html')

@app.route('/adaptacao')
def adaptacao():
    return render_template('adaptacao.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/autorreflexao')
def autorreflexao():
    return render_template('autorreflexao.html')

@app.route('/organizacao')
def organizacao():
    return render_template('organizacao.html')

@app.route('/conteudos')
def conteudos():
    return render_template('conteudos.html')

@app.route('/api/save-preferences', methods=['POST'])
def save_preferences():
    data = request.get_json()
    session['preferences'] = data
    return jsonify({'status': 'ok'})

@app.route('/api/get-phrase')
def get_phrase():
    phrases = [
        "Você é único, e isso é sua força.",
        "Cada passo, no seu próprio ritmo.",
        "Aqui, o sistema se adapta a você.",
        "Seu jeito de ser é válido e precioso.",
        "Você pertence a este espaço."
    ]
    return jsonify({'phrase': random.choice(phrases)})

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
