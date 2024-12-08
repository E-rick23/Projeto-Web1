from flask import Flask, request, jsonify

app = Flask(__name__)

# Armazenamento dos dados
dados = {"luminosidade": None, "temperatura": None, "umidade": None}

@app.route('/dados', methods=['POST'])
def receber_dados():
    global dados
    novo_dado = request.json
    dados.update(novo_dado)
    return jsonify({"message": "Dados recebidos com sucesso"}), 200

@app.route('/')
def index():
    return f"""
    <h1>Status dos Sensores</h1>
    <p>Luminosidade: {dados['luminosidade']}</p>
    <p>Temperatura: {dados['temperatura']} °C</p>
    <p>Umidade: {dados['umidade']} %</p>
    """

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
