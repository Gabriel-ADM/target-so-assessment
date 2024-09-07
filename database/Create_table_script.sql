use tso_assessment;

CREATE TABLE usuarios(
	id INT AUTO_INCREMENT PRIMARY KEY,
    email  VARCHAR(255) NOT NULL UNIQUE,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tarefas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    usuario_resp VARCHAR(255),
    FOREIGN KEY (usuario_resp) REFERENCES usuarios(email)
        ON DELETE SET NULL
        ON UPDATE CASCADE,
    descricao VARCHAR(1000) NOT NULL,
    status ENUM('pendente', 'concluida') DEFAULT 'pendente',
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM tarefas;
SELECT * FROM usuarios;