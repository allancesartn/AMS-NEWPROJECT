from flask import Flask, request,jsonify
import sqlite3

app = Flask(__name__)

# Conexão com o banco de dados SQLite
def conectar_bd():
    return sqlite3.connect('agronegocio.db')

# Rota de homepage
@app.route('/')
def homepage():
    return "Bem-vindo ao sistema de agronegócio!"

# Rota de cadastro de cliente
@app.route('/cadastro-cliente', methods=['POST'])
def cadastro_cliente():
    dados = request.json
    conn = conectar_bd()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)", 
                   (dados['nome'], dados['email'], dados['telefone']))
    conn.commit()
    conn.close()
    return jsonify({"mensagem": "Cliente cadastrado com sucesso!"})

# Rota de cadastro de prestador de serviço
@app.route('/cadastro-prestador', methods=['POST'])
def cadastro_prestador():
    dados = request.json
    conn = conectar_bd()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO prestadores (nome, especialidade, telefone) VALUES (?, ?, ?)", 
                   (dados['nome'], dados['especialidade'], dados['telefone']))
    conn.commit()
    conn.close()
    return jsonify({"mensagem": "Prestador cadastrado com sucesso!"})

# Sistema de avaliações
@app.route('/avaliacoes', methods=['POST'])
def avaliacoes():
    dados = request.json
    conn = conectar_bd()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO avaliacoes (cliente_id, prestador_id, nota, comentario) VALUES (?, ?, ?, ?)",
                   (dados['cliente_id'], dados['prestador_id'], dados['nota'], dados['comentario']))
    conn.commit()
    conn.close()
    return jsonify({"mensagem": "Avaliação registrada com sucesso!"})

if __name__ == '__main__':
    app.run(debug=True)