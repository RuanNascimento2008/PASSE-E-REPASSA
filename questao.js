const questoes = [
  {
    pergunta: "O que significa CSS?",
    opcoes: ['Cascading Style Sheets', 'Computer Styled Sections', 'Creative Style System', 'Control Style Sheet'],
    correta: "Cascading Style Sheets"
  },
  {
    pergunta: "Qual linguagem é usada para interatividade em páginas web?",
    opcoes: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    correta: "JavaScript"
  },
  {
    pergunta: "Qual empresa criou o Java?",
    opcoes: ['Microsoft', 'Oracle', 'Sun Microsystems', 'IBM'],
    correta: "Sun Microsystems"
  },
  {
    pergunta: "Qual comando exclui dados de uma tabela?",
    opcoes: ['DROP', 'DELETE', 'REMOVE', 'CUT'],
    correta: "DELETE"
  },
  {
    pergunta: "Qual camada do modelo OSI é responsável pela entrega de pacotes?",
    opcoes: ['Aplicação', 'Rede', 'Transporte', 'Enlace'],
    correta: "Rede"
  },
  {
    pergunta: "Qual camada do modelo OSI é responsável pela entrega de pacotes?",
    opcoes: ['Aplicação', 'Rede', 'Transporte', 'Enlace'],
    correta: "Rede"
  },
  {
    pergunta: "Qual linguagem é usada para interatividade em páginas web?",
    opcoes: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    correta: "JavaScript"
  },
  {
    pergunta: "O que significa IP?",
    opcoes: ['Internet Protocol', 'Internal Program', 'Integrated Process', 'Interconnected Package'],
    correta: "Internet Protocol"
  },
  {
    pergunta: "Qual comando exclui dados de uma tabela?",
    opcoes: ['DROP', 'DELETE', 'REMOVE', 'CUT'],
    correta: "DELETE"
  },
  {
    pergunta: "O que significa VPN?",
    opcoes: ['Virtual Private Network', 'Virtual Process Node', 'Verified Public Network', 'Variable Protocol Network'],
    correta: "Virtual Private Network"
  },
  {
    pergunta: "Qual destes é um dispositivo de entrada?",
    opcoes: ['Monitor', 'Impressora', 'Teclado', 'Caixa de som'],
    correta: "Teclado"
  },
  {
    pergunta: "Qual linguagem é usada para interatividade em páginas web?",
    opcoes: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    correta: "JavaScript"
  },
  {
    pergunta: "Qual linguagem é usada para interatividade em páginas web?",
    opcoes: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    correta: "JavaScript"
  },
  {
    pergunta: "O que significa a sigla NoSQL?",
    opcoes: ['Not Only SQL', 'No Sequence Language', 'New Object SQL', 'Non Operational SQL'],
    correta: "Not Only SQL"
  },
  {
    pergunta: "O que é phishing?",
    opcoes: ['Ataque de engenharia social', 'Tipo de vírus', 'Firewall', 'Criptografia'],
    correta: "Ataque de engenharia social"
  },
  {
    pergunta: "Qual destes é um dispositivo de entrada?",
    opcoes: ['Monitor', 'Impressora', 'Teclado', 'Caixa de som'],
    correta: "Teclado"
  },
  {
    pergunta: "Qual componente é considerado o 'cérebro' do computador?",
    opcoes: ['Memória RAM', 'Processador', 'Disco Rígido', 'Fonte de energia'],
    correta: "Processador"
  },
  {
    pergunta: "O que é SQL?",
    opcoes: ['Structured Query Language', 'System Query List', 'Simple Question Language', 'Sequential Query Logic'],
    correta: "Structured Query Language"
  },
  {
    pergunta: "O que significa HTTPS?",
    opcoes: ['HyperText Transfer Protocol Secure', 'Hyper Transfer Text Protocol Simple', 'Hyperlink Transfer Protocol Service', 'HighText Protocol System'],
    correta: "HyperText Transfer Protocol Secure"
  },
  {
    pergunta: "O que significa DNS?",
    opcoes: ['Domain Name System', 'Data Network Service', 'Digital Number Source', 'Domain Number Sequence'],
    correta: "Domain Name System"
  },
  {
    pergunta: "Qual destas é uma linguagem de programação?",
    opcoes: ['MySQL', 'Python', 'Windows', 'HTTP'],
    correta: "Python"
  },
  {
    pergunta: "Qual destes é um dispositivo de saída?",
    opcoes: ['Mouse', 'Monitor', 'Teclado', 'Scanner'],
    correta: "Monitor"
  },
  {
    pergunta: "Qual tecnologia é usada para conectar dispositivos sem fio?",
    opcoes: ['Ethernet', 'Bluetooth', 'Fiber Channel', 'Token Ring'],
    correta: "Bluetooth"
  },
  {
    pergunta: "Qual técnica é usada para proteger dados sensíveis?",
    opcoes: ['Criptografia', 'Compactação', 'Fragmentação', 'Virtualização'],
    correta: "Criptografia"
  },
  {
    pergunta: "Qual destas é uma linguagem de programação?",
    opcoes: ['MySQL', 'Python', 'Windows', 'HTTP'],
    correta: "Python"
  },
  {
    pergunta: "O que significa SSD?",
    opcoes: ['Solid State Drive', 'System Storage Device', 'Software Secure Disk', 'Serial Storage Data'],
    correta: "Solid State Drive"
  },
  {
    pergunta: "O que significa a sigla HTML?",
    opcoes: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink Machine Language', 'HighText Markdown Language'],
    correta: "HyperText Markup Language"
  },
  {
    pergunta: "Qual comando é usado para selecionar dados?",
    opcoes: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correta: "SELECT"
  },
  {
    pergunta: "O que significa VPN?",
    opcoes: ['Virtual Private Network', 'Virtual Process Node', 'Verified Public Network', 'Variable Protocol Network'],
    correta: "Virtual Private Network"
  },
  {
    pergunta: "Qual comando é usado para selecionar dados?",
    opcoes: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correta: "SELECT"
  },
  {
    pergunta: "O que significa DNS?",
    opcoes: ['Domain Name System', 'Data Network Service', 'Digital Number Source', 'Domain Number Sequence'],
    correta: "Domain Name System"
  },
  {
    pergunta: "Qual destas é uma linguagem de programação?",
    opcoes: ['MySQL', 'Python', 'Windows', 'HTTP'],
    correta: "Python"
  },
  {
    pergunta: "O que significa VPN?",
    opcoes: ['Virtual Private Network', 'Virtual Process Node', 'Verified Public Network', 'Variable Protocol Network'],
    correta: "Virtual Private Network"
  },
  {
    pergunta: "Qual técnica é usada para proteger dados sensíveis?",
    opcoes: ['Criptografia', 'Compactação', 'Fragmentação', 'Virtualização'],
    correta: "Criptografia"
  },
  {
    pergunta: "Qual tecnologia é usada para conectar dispositivos sem fio?",
    opcoes: ['Ethernet', 'Bluetooth', 'Fiber Channel', 'Token Ring'],
    correta: "Bluetooth"
  },
  {
    pergunta: "Qual tecnologia é usada para conectar dispositivos sem fio?",
    opcoes: ['Ethernet', 'Bluetooth', 'Fiber Channel', 'Token Ring'],
    correta: "Bluetooth"
  },
  {
    pergunta: "Qual unidade mede a velocidade de um processador?",
    opcoes: ['GHz', 'MB', 'GB', 'ms'],
    correta: "GHz"
  },
  {
    pergunta: "Qual destes é um dispositivo de saída?",
    opcoes: ['Mouse', 'Monitor', 'Teclado', 'Scanner'],
    correta: "Monitor"
  },
  {
    pergunta: "O que significa a sigla NoSQL?",
    opcoes: ['Not Only SQL', 'No Sequence Language', 'New Object SQL', 'Non Operational SQL'],
    correta: "Not Only SQL"
  },
  {
    pergunta: "O que é SQL?",
    opcoes: ['Structured Query Language', 'System Query List', 'Simple Question Language', 'Sequential Query Logic'],
    correta: "Structured Query Language"
  },
  {
    pergunta: "O que significa CSS?",
    opcoes: ['Cascading Style Sheets', 'Computer Styled Sections', 'Creative Style System', 'Control Style Sheet'],
    correta: "Cascading Style Sheets"
  },
  {
    pergunta: "O que significa firewall?",
    opcoes: ['Barreira de fogo', 'Sistema de proteção de rede', 'Software de backup', 'Antivírus'],
    correta: "Sistema de proteção de rede"
  },
  {
    pergunta: "Qual linguagem é usada para interatividade em páginas web?",
    opcoes: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    correta: "JavaScript"
  },
  {
    pergunta: "O que significa DNS?",
    opcoes: ['Domain Name System', 'Data Network Service', 'Digital Number Source', 'Domain Number Sequence'],
    correta: "Domain Name System"
  },
  {
    pergunta: "O que significa HTTPS?",
    opcoes: ['HyperText Transfer Protocol Secure', 'Hyper Transfer Text Protocol Simple', 'Hyperlink Transfer Protocol Service', 'HighText Protocol System'],
    correta: "HyperText Transfer Protocol Secure"
  },
  {
    pergunta: "O que significa VPN?",
    opcoes: ['Virtual Private Network', 'Virtual Process Node', 'Verified Public Network', 'Variable Protocol Network'],
    correta: "Virtual Private Network"
  },
  {
    pergunta: "Qual componente é considerado o 'cérebro' do computador?",
    opcoes: ['Memória RAM', 'Processador', 'Disco Rígido', 'Fonte de energia'],
    correta: "Processador"
  },
  {
    pergunta: "O que significa CSS?",
    opcoes: ['Cascading Style Sheets', 'Computer Styled Sections', 'Creative Style System', 'Control Style Sheet'],
    correta: "Cascading Style Sheets"
  },
  {
    pergunta: "Qual componente é considerado o 'cérebro' do computador?",
    opcoes: ['Memória RAM', 'Processador', 'Disco Rígido', 'Fonte de energia'],
    correta: "Processador"
  },
  {
    pergunta: "O que significa firewall?",
    opcoes: ['Barreira de fogo', 'Sistema de proteção de rede', 'Software de backup', 'Antivírus'],
    correta: "Sistema de proteção de rede"
  },
  {
    pergunta: "Qual destas é uma linguagem de programação?",
    opcoes: ['MySQL', 'Python', 'Windows', 'HTTP'],
    correta: "Python"
  },
  {
    pergunta: "O que significa a sigla HTML?",
    opcoes: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink Machine Language', 'HighText Markdown Language'],
    correta: "HyperText Markup Language"
  },
  {
    pergunta: "Qual destes é um SGBD?",
    opcoes: ['Python', 'MySQL', 'HTML', 'CSS'],
    correta: "MySQL"
  },
  {
    pergunta: "Qual destes é um SGBD?",
    opcoes: ['Python', 'MySQL', 'HTML', 'CSS'],
    correta: "MySQL"
  },
  {
    pergunta: "O que significa DNS?",
    opcoes: ['Domain Name System', 'Data Network Service', 'Digital Number Source', 'Domain Number Sequence'],
    correta: "Domain Name System"
  },
  {
    pergunta: "O que é phishing?",
    opcoes: ['Ataque de engenharia social', 'Tipo de vírus', 'Firewall', 'Criptografia'],
    correta: "Ataque de engenharia social"
  },
  {
    pergunta: "O que significa IP?",
    opcoes: ['Internet Protocol', 'Internal Program', 'Integrated Process', 'Interconnected Package'],
    correta: "Internet Protocol"
  },
  {
    pergunta: "O que significa a sigla NoSQL?",
    opcoes: ['Not Only SQL', 'No Sequence Language', 'New Object SQL', 'Non Operational SQL'],
    correta: "Not Only SQL"
  },
  {
    pergunta: "Qual técnica é usada para proteger dados sensíveis?",
    opcoes: ['Criptografia', 'Compactação', 'Fragmentação', 'Virtualização'],
    correta: "Criptografia"
  },
  {
    pergunta: "Qual protocolo é usado para e-mails?",
    opcoes: ['SMTP', 'FTP', 'HTTP', 'SSH'],
    correta: "SMTP"
  },
  {
    pergunta: "O que significa firewall?",
    opcoes: ['Barreira de fogo', 'Sistema de proteção de rede', 'Software de backup', 'Antivírus'],
    correta: "Sistema de proteção de rede"
  },
  {
    pergunta: "Qual protocolo é usado para e-mails?",
    opcoes: ['SMTP', 'FTP', 'HTTP', 'SSH'],
    correta: "SMTP"
  },
  {
    pergunta: "O que significa a sigla NoSQL?",
    opcoes: ['Not Only SQL', 'No Sequence Language', 'New Object SQL', 'Non Operational SQL'],
    correta: "Not Only SQL"
  },
  {
    pergunta: "O que significa firewall?",
    opcoes: ['Barreira de fogo', 'Sistema de proteção de rede', 'Software de backup', 'Antivírus'],
    correta: "Sistema de proteção de rede"
  },
  {
    pergunta: "Qual camada do modelo OSI é responsável pela entrega de pacotes?",
    opcoes: ['Aplicação', 'Rede', 'Transporte', 'Enlace'],
    correta: "Rede"
  },
  {
    pergunta: "Qual linguagem é usada para interatividade em páginas web?",
    opcoes: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    correta: "JavaScript"
  },
  {
    pergunta: "O que significa a sigla NoSQL?",
    opcoes: ['Not Only SQL', 'No Sequence Language', 'New Object SQL', 'Non Operational SQL'],
    correta: "Not Only SQL"
  },
  {
    pergunta: "O que é SQL?",
    opcoes: ['Structured Query Language', 'System Query List', 'Simple Question Language', 'Sequential Query Logic'],
    correta: "Structured Query Language"
  },
  {
    pergunta: "Qual linguagem é usada para interatividade em páginas web?",
    opcoes: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    correta: "JavaScript"
  },
  {
    pergunta: "O que significa DNS?",
    opcoes: ['Domain Name System', 'Data Network Service', 'Digital Number Source', 'Domain Number Sequence'],
    correta: "Domain Name System"
  },
  {
    pergunta: "Qual técnica é usada para proteger dados sensíveis?",
    opcoes: ['Criptografia', 'Compactação', 'Fragmentação', 'Virtualização'],
    correta: "Criptografia"
  },
  {
    pergunta: "Qual empresa criou o Java?",
    opcoes: ['Microsoft', 'Oracle', 'Sun Microsystems', 'IBM'],
    correta: "Sun Microsystems"
  },
  {
    pergunta: "Qual protocolo é usado para e-mails?",
    opcoes: ['SMTP', 'FTP', 'HTTP', 'SSH'],
    correta: "SMTP"
  },
  {
    pergunta: "Qual destas é uma linguagem de programação?",
    opcoes: ['MySQL', 'Python', 'Windows', 'HTTP'],
    correta: "Python"
  },
  {
    pergunta: "O que significa SSD?",
    opcoes: ['Solid State Drive', 'System Storage Device', 'Software Secure Disk', 'Serial Storage Data'],
    correta: "Solid State Drive"
  },
  {
    pergunta: "O que significa IP?",
    opcoes: ['Internet Protocol', 'Internal Program', 'Integrated Process', 'Interconnected Package'],
    correta: "Internet Protocol"
  },
  {
    pergunta: "Qual destas é uma linguagem de programação?",
    opcoes: ['MySQL', 'Python', 'Windows', 'HTTP'],
    correta: "Python"
  },
  {
    pergunta: "O que significa CSS?",
    opcoes: ['Cascading Style Sheets', 'Computer Styled Sections', 'Creative Style System', 'Control Style Sheet'],
    correta: "Cascading Style Sheets"
  },
  {
    pergunta: "O que significa IP?",
    opcoes: ['Internet Protocol', 'Internal Program', 'Integrated Process', 'Interconnected Package'],
    correta: "Internet Protocol"
  },
  {
    pergunta: "Qual destes é um dispositivo de entrada?",
    opcoes: ['Monitor', 'Impressora', 'Teclado', 'Caixa de som'],
    correta: "Teclado"
  },
  {
    pergunta: "Qual unidade mede a velocidade de um processador?",
    opcoes: ['GHz', 'MB', 'GB', 'ms'],
    correta: "GHz"
  },
  {
    pergunta: "O que é phishing?",
    opcoes: ['Ataque de engenharia social', 'Tipo de vírus', 'Firewall', 'Criptografia'],
    correta: "Ataque de engenharia social"
  },
  {
    pergunta: "O que significa VPN?",
    opcoes: ['Virtual Private Network', 'Virtual Process Node', 'Verified Public Network', 'Variable Protocol Network'],
    correta: "Virtual Private Network"
  },
  {
    pergunta: "O que significa SSD?",
    opcoes: ['Solid State Drive', 'System Storage Device', 'Software Secure Disk', 'Serial Storage Data'],
    correta: "Solid State Drive"
  },
  {
    pergunta: "Qual técnica é usada para proteger dados sensíveis?",
    opcoes: ['Criptografia', 'Compactação', 'Fragmentação', 'Virtualização'],
    correta: "Criptografia"
  },
  {
    pergunta: "Qual empresa criou o Java?",
    opcoes: ['Microsoft', 'Oracle', 'Sun Microsystems', 'IBM'],
    correta: "Sun Microsystems"
  },
  {
    pergunta: "Qual camada do modelo OSI é responsável pela entrega de pacotes?",
    opcoes: ['Aplicação', 'Rede', 'Transporte', 'Enlace'],
    correta: "Rede"
  },
  {
    pergunta: "Qual destes é um dispositivo de entrada?",
    opcoes: ['Monitor', 'Impressora', 'Teclado', 'Caixa de som'],
    correta: "Teclado"
  },
  {
    pergunta: "Qual destes é um dispositivo de entrada?",
    opcoes: ['Monitor', 'Impressora', 'Teclado', 'Caixa de som'],
    correta: "Teclado"
  },
  {
    pergunta: "O que é phishing?",
    opcoes: ['Ataque de engenharia social', 'Tipo de vírus', 'Firewall', 'Criptografia'],
    correta: "Ataque de engenharia social"
  },
  {
    pergunta: "O que significa SSD?",
    opcoes: ['Solid State Drive', 'System Storage Device', 'Software Secure Disk', 'Serial Storage Data'],
    correta: "Solid State Drive"
  },
  {
    pergunta: "Qual unidade mede a velocidade de um processador?",
    opcoes: ['GHz', 'MB', 'GB', 'ms'],
    correta: "GHz"
  },
  {
    pergunta: "O que significa SSD?",
    opcoes: ['Solid State Drive', 'System Storage Device', 'Software Secure Disk', 'Serial Storage Data'],
    correta: "Solid State Drive"
  },
  {
    pergunta: "O que significa a sigla NoSQL?",
    opcoes: ['Not Only SQL', 'No Sequence Language', 'New Object SQL', 'Non Operational SQL'],
    correta: "Not Only SQL"
  },
  {
    pergunta: "Qual técnica é usada para proteger dados sensíveis?",
    opcoes: ['Criptografia', 'Compactação', 'Fragmentação', 'Virtualização'],
    correta: "Criptografia"
  },
  {
    pergunta: "O que é SQL?",
    opcoes: ['Structured Query Language', 'System Query List', 'Simple Question Language', 'Sequential Query Logic'],
    correta: "Structured Query Language"
  },
  {
    pergunta: "Qual destes é um SGBD?",
    opcoes: ['Python', 'MySQL', 'HTML', 'CSS'],
    correta: "MySQL"
  },
  {
    pergunta: "Qual comando é usado para selecionar dados?",
    opcoes: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correta: "SELECT"
  },
  {
    pergunta: "Qual destes é um SGBD?",
    opcoes: ['Python', 'MySQL', 'HTML', 'CSS'],
    correta: "MySQL"
  },
  {
    pergunta: "Qual destes é um SGBD?",
    opcoes: ['Python', 'MySQL', 'HTML', 'CSS'],
    correta: "MySQL"
  },
  {
    pergunta: "O que é SQL?",
    opcoes: ['Structured Query Language', 'System Query List', 'Simple Question Language', 'Sequential Query Logic'],
    correta: "Structured Query Language"
  },
  {
    pergunta: "Qual destas é uma linguagem de programação?",
    opcoes: ['MySQL', 'Python', 'Windows', 'HTTP'],
    correta: "Python"
  },
  {
    pergunta: "Qual protocolo é usado para e-mails?",
    opcoes: ['SMTP', 'FTP', 'HTTP', 'SSH'],
    correta: "SMTP"
  },
  {
    pergunta: "Qual destas é uma linguagem de programação?",
    opcoes: ['MySQL', 'Python', 'Windows', 'HTTP'],
    correta: "Python"
  },
  {
    pergunta: "O que é SQL?",
    opcoes: ['Structured Query Language', 'System Query List', 'Simple Question Language', 'Sequential Query Logic'],
    correta: "Structured Query Language"
  },
  {
    pergunta: "O que significa CSS?",
    opcoes: ['Cascading Style Sheets', 'Computer Styled Sections', 'Creative Style System', 'Control Style Sheet'],
    correta: "Cascading Style Sheets"
  },
  {
    pergunta: "Qual técnica é usada para proteger dados sensíveis?",
    opcoes: ['Criptografia', 'Compactação', 'Fragmentação', 'Virtualização'],
    correta: "Criptografia"
  },
  {
    pergunta: "O que significa IP?",
    opcoes: ['Internet Protocol', 'Internal Program', 'Integrated Process', 'Interconnected Package'],
    correta: "Internet Protocol"
  },
  {
    pergunta: "Qual unidade mede a velocidade de um processador?",
    opcoes: ['GHz', 'MB', 'GB', 'ms'],
    correta: "GHz"
  },
  {
    pergunta: "Qual destes é um dispositivo de saída?",
    opcoes: ['Mouse', 'Monitor', 'Teclado', 'Scanner'],
    correta: "Monitor"
  },
  {
    pergunta: "Qual unidade mede a velocidade de um processador?",
    opcoes: ['GHz', 'MB', 'GB', 'ms'],
    correta: "GHz"
  },
  {
    pergunta: "Qual empresa criou o Java?",
    opcoes: ['Microsoft', 'Oracle', 'Sun Microsystems', 'IBM'],
    correta: "Sun Microsystems"
  },
  {
    pergunta: "Qual destes é um dispositivo de saída?",
    opcoes: ['Mouse', 'Monitor', 'Teclado', 'Scanner'],
    correta: "Monitor"
  },
  {
    pergunta: "O que significa DNS?",
    opcoes: ['Domain Name System', 'Data Network Service', 'Digital Number Source', 'Domain Number Sequence'],
    correta: "Domain Name System"
  },
  {
    pergunta: "Qual destas é uma linguagem de programação?",
    opcoes: ['MySQL', 'Python', 'Windows', 'HTTP'],
    correta: "Python"
  },
  {
    pergunta: "Qual destas é uma linguagem de programação?",
    opcoes: ['MySQL', 'Python', 'Windows', 'HTTP'],
    correta: "Python"
  },
  {
    pergunta: "Qual unidade mede a velocidade de um processador?",
    opcoes: ['GHz', 'MB', 'GB', 'ms'],
    correta: "GHz"
  },
  {
    pergunta: "O que é phishing?",
    opcoes: ['Ataque de engenharia social', 'Tipo de vírus', 'Firewall', 'Criptografia'],
    correta: "Ataque de engenharia social"
  },
  {
    pergunta: "Qual destes é um dispositivo de entrada?",
    opcoes: ['Monitor', 'Impressora', 'Teclado', 'Caixa de som'],
    correta: "Teclado"
  },
  {
    pergunta: "Qual camada do modelo OSI é responsável pela entrega de pacotes?",
    opcoes: ['Aplicação', 'Rede', 'Transporte', 'Enlace'],
    correta: "Rede"
  },
  {
    pergunta: "Qual linguagem é usada para interatividade em páginas web?",
    opcoes: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    correta: "JavaScript"
  },
  {
    pergunta: "O que é phishing?",
    opcoes: ['Ataque de engenharia social', 'Tipo de vírus', 'Firewall', 'Criptografia'],
    correta: "Ataque de engenharia social"
  },
  {
    pergunta: "O que significa SSD?",
    opcoes: ['Solid State Drive', 'System Storage Device', 'Software Secure Disk', 'Serial Storage Data'],
    correta: "Solid State Drive"
  },
  {
    pergunta: "O que significa a sigla HTML?",
    opcoes: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink Machine Language', 'HighText Markdown Language'],
    correta: "HyperText Markup Language"
  },
  {
    pergunta: "O que significa firewall?",
    opcoes: ['Barreira de fogo', 'Sistema de proteção de rede', 'Software de backup', 'Antivírus'],
    correta: "Sistema de proteção de rede"
  },
  {
    pergunta: "O que significa a sigla NoSQL?",
    opcoes: ['Not Only SQL', 'No Sequence Language', 'New Object SQL', 'Non Operational SQL'],
    correta: "Not Only SQL"
  },
  {
    pergunta: "Qual destas é uma linguagem de programação?",
    opcoes: ['MySQL', 'Python', 'Windows', 'HTTP'],
    correta: "Python"
  },
  {
    pergunta: "Qual tecnologia é usada para conectar dispositivos sem fio?",
    opcoes: ['Ethernet', 'Bluetooth', 'Fiber Channel', 'Token Ring'],
    correta: "Bluetooth"
  },
  {
    pergunta: "Qual componente é considerado o 'cérebro' do computador?",
    opcoes: ['Memória RAM', 'Processador', 'Disco Rígido', 'Fonte de energia'],
    correta: "Processador"
  },
  {
    pergunta: "Qual tecnologia é usada para conectar dispositivos sem fio?",
    opcoes: ['Ethernet', 'Bluetooth', 'Fiber Channel', 'Token Ring'],
    correta: "Bluetooth"
  },
  {
    pergunta: "Qual protocolo é usado para e-mails?",
    opcoes: ['SMTP', 'FTP', 'HTTP', 'SSH'],
    correta: "SMTP"
  },
  {
    pergunta: "Qual destes é um dispositivo de saída?",
    opcoes: ['Mouse', 'Monitor', 'Teclado', 'Scanner'],
    correta: "Monitor"
  },
  {
    pergunta: "O que é SQL?",
    opcoes: ['Structured Query Language', 'System Query List', 'Simple Question Language', 'Sequential Query Logic'],
    correta: "Structured Query Language"
  },
  {
    pergunta: "O que é SQL?",
    opcoes: ['Structured Query Language', 'System Query List', 'Simple Question Language', 'Sequential Query Logic'],
    correta: "Structured Query Language"
  },
  {
    pergunta: "O que significa DNS?",
    opcoes: ['Domain Name System', 'Data Network Service', 'Digital Number Source', 'Domain Number Sequence'],
    correta: "Domain Name System"
  },
  {
    pergunta: "O que significa firewall?",
    opcoes: ['Barreira de fogo', 'Sistema de proteção de rede', 'Software de backup', 'Antivírus'],
    correta: "Sistema de proteção de rede"
  },
  {
    pergunta: "Qual destes é um dispositivo de entrada?",
    opcoes: ['Monitor', 'Impressora', 'Teclado', 'Caixa de som'],
    correta: "Teclado"
  },
  {
    pergunta: "O que é SQL?",
    opcoes: ['Structured Query Language', 'System Query List', 'Simple Question Language', 'Sequential Query Logic'],
    correta: "Structured Query Language"
  },
  {
    pergunta: "Qual componente é considerado o 'cérebro' do computador?",
    opcoes: ['Memória RAM', 'Processador', 'Disco Rígido', 'Fonte de energia'],
    correta: "Processador"
  },
  {
    pergunta: "Qual comando é usado para selecionar dados?",
    opcoes: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correta: "SELECT"
  },
  {
    pergunta: "O que significa VPN?",
    opcoes: ['Virtual Private Network', 'Virtual Process Node', 'Verified Public Network', 'Variable Protocol Network'],
    correta: "Virtual Private Network"
  },
  {
    pergunta: "O que significa firewall?",
    opcoes: ['Barreira de fogo', 'Sistema de proteção de rede', 'Software de backup', 'Antivírus'],
    correta: "Sistema de proteção de rede"
  },
  {
    pergunta: "Qual unidade mede a velocidade de um processador?",
    opcoes: ['GHz', 'MB', 'GB', 'ms'],
    correta: "GHz"
  },
  {
    pergunta: "Qual unidade mede a velocidade de um processador?",
    opcoes: ['GHz', 'MB', 'GB', 'ms'],
    correta: "GHz"
  },
  {
    pergunta: "Qual comando é usado para selecionar dados?",
    opcoes: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correta: "SELECT"
  },
  {
    pergunta: "Qual componente é considerado o 'cérebro' do computador?",
    opcoes: ['Memória RAM', 'Processador', 'Disco Rígido', 'Fonte de energia'],
    correta: "Processador"
  },
  {
    pergunta: "O que significa VPN?",
    opcoes: ['Virtual Private Network', 'Virtual Process Node', 'Verified Public Network', 'Variable Protocol Network'],
    correta: "Virtual Private Network"
  },
  {
    pergunta: "Qual destes é um dispositivo de saída?",
    opcoes: ['Mouse', 'Monitor', 'Teclado', 'Scanner'],
    correta: "Monitor"
  },
  {
    pergunta: "Qual destes é um dispositivo de saída?",
    opcoes: ['Mouse', 'Monitor', 'Teclado', 'Scanner'],
    correta: "Monitor"
  },
  {
    pergunta: "O que significa HTTPS?",
    opcoes: ['HyperText Transfer Protocol Secure', 'Hyper Transfer Text Protocol Simple', 'Hyperlink Transfer Protocol Service', 'HighText Protocol System'],
    correta: "HyperText Transfer Protocol Secure"
  },
  {
    pergunta: "O que é SQL?",
    opcoes: ['Structured Query Language', 'System Query List', 'Simple Question Language', 'Sequential Query Logic'],
    correta: "Structured Query Language"
  },
  {
    pergunta: "Qual empresa criou o Java?",
    opcoes: ['Microsoft', 'Oracle', 'Sun Microsystems', 'IBM'],
    correta: "Sun Microsystems"
  },
  {
    pergunta: "Qual destes é um dispositivo de saída?",
    opcoes: ['Mouse', 'Monitor', 'Teclado', 'Scanner'],
    correta: "Monitor"
  },
  {
    pergunta: "Qual componente é considerado o 'cérebro' do computador?",
    opcoes: ['Memória RAM', 'Processador', 'Disco Rígido', 'Fonte de energia'],
    correta: "Processador"
  },
  {
    pergunta: "O que é phishing?",
    opcoes: ['Ataque de engenharia social', 'Tipo de vírus', 'Firewall', 'Criptografia'],
    correta: "Ataque de engenharia social"
  },
  {
    pergunta: "Qual camada do modelo OSI é responsável pela entrega de pacotes?",
    opcoes: ['Aplicação', 'Rede', 'Transporte', 'Enlace'],
    correta: "Rede"
  },
  {
    pergunta: "Qual técnica é usada para proteger dados sensíveis?",
    opcoes: ['Criptografia', 'Compactação', 'Fragmentação', 'Virtualização'],
    correta: "Criptografia"
  },
  {
    pergunta: "O que significa a sigla NoSQL?",
    opcoes: ['Not Only SQL', 'No Sequence Language', 'New Object SQL', 'Non Operational SQL'],
    correta: "Not Only SQL"
  },
  {
    pergunta: "O que significa SSD?",
    opcoes: ['Solid State Drive', 'System Storage Device', 'Software Secure Disk', 'Serial Storage Data'],
    correta: "Solid State Drive"
  },
  {
    pergunta: "O que significa HTTPS?",
    opcoes: ['HyperText Transfer Protocol Secure', 'Hyper Transfer Text Protocol Simple', 'Hyperlink Transfer Protocol Service', 'HighText Protocol System'],
    correta: "HyperText Transfer Protocol Secure"
  },
  {
    pergunta: "Qual tecnologia é usada para conectar dispositivos sem fio?",
    opcoes: ['Ethernet', 'Bluetooth', 'Fiber Channel', 'Token Ring'],
    correta: "Bluetooth"
  },
  {
    pergunta: "O que significa firewall?",
    opcoes: ['Barreira de fogo', 'Sistema de proteção de rede', 'Software de backup', 'Antivírus'],
    correta: "Sistema de proteção de rede"
  },
  {
    pergunta: "Qual protocolo é usado para e-mails?",
    opcoes: ['SMTP', 'FTP', 'HTTP', 'SSH'],
    correta: "SMTP"
  },
  {
    pergunta: "O que é SQL?",
    opcoes: ['Structured Query Language', 'System Query List', 'Simple Question Language', 'Sequential Query Logic'],
    correta: "Structured Query Language"
  },
  {
    pergunta: "O que significa a sigla NoSQL?",
    opcoes: ['Not Only SQL', 'No Sequence Language', 'New Object SQL', 'Non Operational SQL'],
    correta: "Not Only SQL"
  },
  {
    pergunta: "Qual componente é considerado o 'cérebro' do computador?",
    opcoes: ['Memória RAM', 'Processador', 'Disco Rígido', 'Fonte de energia'],
    correta: "Processador"
  },
  {
    pergunta: "Qual linguagem é usada para interatividade em páginas web?",
    opcoes: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    correta: "JavaScript"
  },
  {
    pergunta: "O que significa a sigla HTML?",
    opcoes: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink Machine Language', 'HighText Markdown Language'],
    correta: "HyperText Markup Language"
  },
  {
    pergunta: "Qual linguagem é usada para interatividade em páginas web?",
    opcoes: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    correta: "JavaScript"
  },
  {
    pergunta: "O que significa a sigla NoSQL?",
    opcoes: ['Not Only SQL', 'No Sequence Language', 'New Object SQL', 'Non Operational SQL'],
    correta: "Not Only SQL"
  },
  {
    pergunta: "O que significa SSD?",
    opcoes: ['Solid State Drive', 'System Storage Device', 'Software Secure Disk', 'Serial Storage Data'],
    correta: "Solid State Drive"
  },
  {
    pergunta: "O que significa DNS?",
    opcoes: ['Domain Name System', 'Data Network Service', 'Digital Number Source', 'Domain Number Sequence'],
    correta: "Domain Name System"
  },
  {
    pergunta: "Qual comando é usado para selecionar dados?",
    opcoes: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correta: "SELECT"
  },
  {
    pergunta: "Qual destes é um SGBD?",
    opcoes: ['Python', 'MySQL', 'HTML', 'CSS'],
    correta: "MySQL"
  },
  {
    pergunta: "Qual destes é um SGBD?",
    opcoes: ['Python', 'MySQL', 'HTML', 'CSS'],
    correta: "MySQL"
  },
  {
    pergunta: "Qual comando é usado para selecionar dados?",
    opcoes: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correta: "SELECT"
  },
  {
    pergunta: "Qual destes é um dispositivo de entrada?",
    opcoes: ['Monitor', 'Impressora', 'Teclado', 'Caixa de som'],
    correta: "Teclado"
  },
  {
    pergunta: "O que significa HTTPS?",
    opcoes: ['HyperText Transfer Protocol Secure', 'Hyper Transfer Text Protocol Simple', 'Hyperlink Transfer Protocol Service', 'HighText Protocol System'],
    correta: "HyperText Transfer Protocol Secure"
  },
  {
    pergunta: "O que significa IP?",
    opcoes: ['Internet Protocol', 'Internal Program', 'Integrated Process', 'Interconnected Package'],
    correta: "Internet Protocol"
  },
  {
    pergunta: "Qual tecnologia é usada para conectar dispositivos sem fio?",
    opcoes: ['Ethernet', 'Bluetooth', 'Fiber Channel', 'Token Ring'],
    correta: "Bluetooth"
  },
  {
    pergunta: "Qual componente é considerado o 'cérebro' do computador?",
    opcoes: ['Memória RAM', 'Processador', 'Disco Rígido', 'Fonte de energia'],
    correta: "Processador"
  },
  {
    pergunta: "Qual comando exclui dados de uma tabela?",
    opcoes: ['DROP', 'DELETE', 'REMOVE', 'CUT'],
    correta: "DELETE"
  },
  {
    pergunta: "Qual unidade mede a velocidade de um processador?",
    opcoes: ['GHz', 'MB', 'GB', 'ms'],
    correta: "GHz"
  },
  {
    pergunta: "Qual destes é um dispositivo de saída?",
    opcoes: ['Mouse', 'Monitor', 'Teclado', 'Scanner'],
    correta: "Monitor"
  },
  {
    pergunta: "O que é SQL?",
    opcoes: ['Structured Query Language', 'System Query List', 'Simple Question Language', 'Sequential Query Logic'],
    correta: "Structured Query Language"
  },
  {
    pergunta: "O que significa IP?",
    opcoes: ['Internet Protocol', 'Internal Program', 'Integrated Process', 'Interconnected Package'],
    correta: "Internet Protocol"
  },
  {
    pergunta: "Qual linguagem é usada para interatividade em páginas web?",
    opcoes: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    correta: "JavaScript"
  },
  {
    pergunta: "O que significa firewall?",
    opcoes: ['Barreira de fogo', 'Sistema de proteção de rede', 'Software de backup', 'Antivírus'],
    correta: "Sistema de proteção de rede"
  },
  {
    pergunta: "O que significa SSD?",
    opcoes: ['Solid State Drive', 'System Storage Device', 'Software Secure Disk', 'Serial Storage Data'],
    correta: "Solid State Drive"
  },
  {
    pergunta: "Qual camada do modelo OSI é responsável pela entrega de pacotes?",
    opcoes: ['Aplicação', 'Rede', 'Transporte', 'Enlace'],
    correta: "Rede"
  },
  {
    pergunta: "O que significa IP?",
    opcoes: ['Internet Protocol', 'Internal Program', 'Integrated Process', 'Interconnected Package'],
    correta: "Internet Protocol"
  },
  {
    pergunta: "Qual camada do modelo OSI é responsável pela entrega de pacotes?",
    opcoes: ['Aplicação', 'Rede', 'Transporte', 'Enlace'],
    correta: "Rede"
  },
  {
    pergunta: "Qual destes é um dispositivo de entrada?",
    opcoes: ['Monitor', 'Impressora', 'Teclado', 'Caixa de som'],
    correta: "Teclado"
  },
  {
    pergunta: "O que significa SSD?",
    opcoes: ['Solid State Drive', 'System Storage Device', 'Software Secure Disk', 'Serial Storage Data'],
    correta: "Solid State Drive"
  },
  {
    pergunta: "Qual componente é considerado o 'cérebro' do computador?",
    opcoes: ['Memória RAM', 'Processador', 'Disco Rígido', 'Fonte de energia'],
    correta: "Processador"
  },
  {
    pergunta: "Qual empresa criou o Java?",
    opcoes: ['Microsoft', 'Oracle', 'Sun Microsystems', 'IBM'],
    correta: "Sun Microsystems"
  },
  {
    pergunta: "O que significa CSS?",
    opcoes: ['Cascading Style Sheets', 'Computer Styled Sections', 'Creative Style System', 'Control Style Sheet'],
    correta: "Cascading Style Sheets"
  },
  {
    pergunta: "O que é phishing?",
    opcoes: ['Ataque de engenharia social', 'Tipo de vírus', 'Firewall', 'Criptografia'],
    correta: "Ataque de engenharia social"
  },
  {
    pergunta: "Qual comando exclui dados de uma tabela?",
    opcoes: ['DROP', 'DELETE', 'REMOVE', 'CUT'],
    correta: "DELETE"
  },
  {
    pergunta: "Qual tecnologia é usada para conectar dispositivos sem fio?",
    opcoes: ['Ethernet', 'Bluetooth', 'Fiber Channel', 'Token Ring'],
    correta: "Bluetooth"
  },
  {
    pergunta: "Qual comando exclui dados de uma tabela?",
    opcoes: ['DROP', 'DELETE', 'REMOVE', 'CUT'],
    correta: "DELETE"
  },
  {
    pergunta: "O que significa a sigla NoSQL?",
    opcoes: ['Not Only SQL', 'No Sequence Language', 'New Object SQL', 'Non Operational SQL'],
    correta: "Not Only SQL"
  },
  {
    pergunta: "Qual componente é considerado o 'cérebro' do computador?",
    opcoes: ['Memória RAM', 'Processador', 'Disco Rígido', 'Fonte de energia'],
    correta: "Processador"
  },
  {
    pergunta: "O que significa HTTPS?",
    opcoes: ['HyperText Transfer Protocol Secure', 'Hyper Transfer Text Protocol Simple', 'Hyperlink Transfer Protocol Service', 'HighText Protocol System'],
    correta: "HyperText Transfer Protocol Secure"
  },
  {
    pergunta: "O que significa IP?",
    opcoes: ['Internet Protocol', 'Internal Program', 'Integrated Process', 'Interconnected Package'],
    correta: "Internet Protocol"
  },
  {
    pergunta: "Qual linguagem é usada para interatividade em páginas web?",
    opcoes: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    correta: "JavaScript"
  },
  {
    pergunta: "Qual camada do modelo OSI é responsável pela entrega de pacotes?",
    opcoes: ['Aplicação', 'Rede', 'Transporte', 'Enlace'],
    correta: "Rede"
  },
  {
    pergunta: "Qual protocolo é usado para e-mails?",
    opcoes: ['SMTP', 'FTP', 'HTTP', 'SSH'],
    correta: "SMTP"
  },
  {
    pergunta: "Qual técnica é usada para proteger dados sensíveis?",
    opcoes: ['Criptografia', 'Compactação', 'Fragmentação', 'Virtualização'],
    correta: "Criptografia"
  },
  {
    pergunta: "Qual linguagem é usada para interatividade em páginas web?",
    opcoes: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    correta: "JavaScript"
  },
  {
    pergunta: "Qual tecnologia é usada para conectar dispositivos sem fio?",
    opcoes: ['Ethernet', 'Bluetooth', 'Fiber Channel', 'Token Ring'],
    correta: "Bluetooth"
  },
  {
    pergunta: "Qual camada do modelo OSI é responsável pela entrega de pacotes?",
    opcoes: ['Aplicação', 'Rede', 'Transporte', 'Enlace'],
    correta: "Rede"
  },
  {
    pergunta: "Qual protocolo é usado para e-mails?",
    opcoes: ['SMTP', 'FTP', 'HTTP', 'SSH'],
    correta: "SMTP"
  },
  {
    pergunta: "O que significa IP?",
    opcoes: ['Internet Protocol', 'Internal Program', 'Integrated Process', 'Interconnected Package'],
    correta: "Internet Protocol"
  },
  {
    pergunta: "Qual comando é usado para selecionar dados?",
    opcoes: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correta: "SELECT"
  },
  {
    pergunta: "O que significa a sigla HTML?",
    opcoes: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink Machine Language', 'HighText Markdown Language'],
    correta: "HyperText Markup Language"
  },
  {
    pergunta: "Qual técnica é usada para proteger dados sensíveis?",
    opcoes: ['Criptografia', 'Compactação', 'Fragmentação', 'Virtualização'],
    correta: "Criptografia"
  },
  {
    pergunta: "Qual comando é usado para selecionar dados?",
    opcoes: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correta: "SELECT"
  },
  {
    pergunta: "O que significa CSS?",
    opcoes: ['Cascading Style Sheets', 'Computer Styled Sections', 'Creative Style System', 'Control Style Sheet'],
    correta: "Cascading Style Sheets"
  },
  {
    pergunta: "Qual destes é um dispositivo de saída?",
    opcoes: ['Mouse', 'Monitor', 'Teclado', 'Scanner'],
    correta: "Monitor"
  },
  {
    pergunta: "Qual empresa criou o Java?",
    opcoes: ['Microsoft', 'Oracle', 'Sun Microsystems', 'IBM'],
    correta: "Sun Microsystems"
  },
  {
    pergunta: "O que significa a sigla HTML?",
    opcoes: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink Machine Language', 'HighText Markdown Language'],
    correta: "HyperText Markup Language"
  },
  {
    pergunta: "Qual empresa criou o Java?",
    opcoes: ['Microsoft', 'Oracle', 'Sun Microsystems', 'IBM'],
    correta: "Sun Microsystems"
  },
  {
    pergunta: "Qual camada do modelo OSI é responsável pela entrega de pacotes?",
    opcoes: ['Aplicação', 'Rede', 'Transporte', 'Enlace'],
    correta: "Rede"
  },
  {
    pergunta: "Qual comando exclui dados de uma tabela?",
    opcoes: ['DROP', 'DELETE', 'REMOVE', 'CUT'],
    correta: "DELETE"
  },
  {
    pergunta: "Qual comando exclui dados de uma tabela?",
    opcoes: ['DROP', 'DELETE', 'REMOVE', 'CUT'],
    correta: "DELETE"
  },
  {
    pergunta: "Qual tecnologia é usada para conectar dispositivos sem fio?",
    opcoes: ['Ethernet', 'Bluetooth', 'Fiber Channel', 'Token Ring'],
    correta: "Bluetooth"
  },
  {
    pergunta: "Qual protocolo é usado para e-mails?",
    opcoes: ['SMTP', 'FTP', 'HTTP', 'SSH'],
    correta: "SMTP"
  },
  {
    pergunta: "O que significa IP?",
    opcoes: ['Internet Protocol', 'Internal Program', 'Integrated Process', 'Interconnected Package'],
    correta: "Internet Protocol"
  },
  {
    pergunta: "Qual protocolo é usado para e-mails?",
    opcoes: ['SMTP', 'FTP', 'HTTP', 'SSH'],
    correta: "SMTP"
  },
  {
    pergunta: "O que significa HTTPS?",
    opcoes: ['HyperText Transfer Protocol Secure', 'Hyper Transfer Text Protocol Simple', 'Hyperlink Transfer Protocol Service', 'HighText Protocol System'],
    correta: "HyperText Transfer Protocol Secure"
  },
  {
    pergunta: "O que significa a sigla HTML?",
    opcoes: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink Machine Language', 'HighText Markdown Language'],
    correta: "HyperText Markup Language"
  },
  {
    pergunta: "O que significa a sigla NoSQL?",
    opcoes: ['Not Only SQL', 'No Sequence Language', 'New Object SQL', 'Non Operational SQL'],
    correta: "Not Only SQL"
  },
  {
    pergunta: "Qual técnica é usada para proteger dados sensíveis?",
    opcoes: ['Criptografia', 'Compactação', 'Fragmentação', 'Virtualização'],
    correta: "Criptografia"
  },
  {
    pergunta: "Qual técnica é usada para proteger dados sensíveis?",
    opcoes: ['Criptografia', 'Compactação', 'Fragmentação', 'Virtualização'],
    correta: "Criptografia"
  },
  {
    pergunta: "O que é phishing?",
    opcoes: ['Ataque de engenharia social', 'Tipo de vírus', 'Firewall', 'Criptografia'],
    correta: "Ataque de engenharia social"
  },
  {
    pergunta: "Qual empresa criou o Java?",
    opcoes: ['Microsoft', 'Oracle', 'Sun Microsystems', 'IBM'],
    correta: "Sun Microsystems"
  },
  {
    pergunta: "Qual técnica é usada para proteger dados sensíveis?",
    opcoes: ['Criptografia', 'Compactação', 'Fragmentação', 'Virtualização'],
    correta: "Criptografia"
  },
  {
    pergunta: "Qual destes é um SGBD?",
    opcoes: ['Python', 'MySQL', 'HTML', 'CSS'],
    correta: "MySQL"
  },
  {
    pergunta: "O que significa DNS?",
    opcoes: ['Domain Name System', 'Data Network Service', 'Digital Number Source', 'Domain Number Sequence'],
    correta: "Domain Name System"
  },
  {
    pergunta: "Qual empresa criou o Java?",
    opcoes: ['Microsoft', 'Oracle', 'Sun Microsystems', 'IBM'],
    correta: "Sun Microsystems"
  },
  {
    pergunta: "O que significa a sigla HTML?",
    opcoes: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink Machine Language', 'HighText Markdown Language'],
    correta: "HyperText Markup Language"
  },
  {
    pergunta: "O que significa CSS?",
    opcoes: ['Cascading Style Sheets', 'Computer Styled Sections', 'Creative Style System', 'Control Style Sheet'],
    correta: "Cascading Style Sheets"
  },
  {
    pergunta: "O que significa SSD?",
    opcoes: ['Solid State Drive', 'System Storage Device', 'Software Secure Disk', 'Serial Storage Data'],
    correta: "Solid State Drive"
  },
  {
    pergunta: "Qual destes é um dispositivo de saída?",
    opcoes: ['Mouse', 'Monitor', 'Teclado', 'Scanner'],
    correta: "Monitor"
  },
  {
    pergunta: "Qual comando exclui dados de uma tabela?",
    opcoes: ['DROP', 'DELETE', 'REMOVE', 'CUT'],
    correta: "DELETE"
  },
  {
    pergunta: "O que significa HTTPS?",
    opcoes: ['HyperText Transfer Protocol Secure', 'Hyper Transfer Text Protocol Simple', 'Hyperlink Transfer Protocol Service', 'HighText Protocol System'],
    correta: "HyperText Transfer Protocol Secure"
  },
  {
    pergunta: "Qual comando exclui dados de uma tabela?",
    opcoes: ['DROP', 'DELETE', 'REMOVE', 'CUT'],
    correta: "DELETE"
  },
  {
    pergunta: "Qual camada do modelo OSI é responsável pela entrega de pacotes?",
    opcoes: ['Aplicação', 'Rede', 'Transporte', 'Enlace'],
    correta: "Rede"
  },
  {
    pergunta: "Qual comando exclui dados de uma tabela?",
    opcoes: ['DROP', 'DELETE', 'REMOVE', 'CUT'],
    correta: "DELETE"
  },
  {
    pergunta: "Qual comando é usado para selecionar dados?",
    opcoes: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correta: "SELECT"
  },
  {
    pergunta: "O que significa DNS?",
    opcoes: ['Domain Name System', 'Data Network Service', 'Digital Number Source', 'Domain Number Sequence'],
    correta: "Domain Name System"
  },
  {
    pergunta: "Qual camada do modelo OSI é responsável pela entrega de pacotes?",
    opcoes: ['Aplicação', 'Rede', 'Transporte', 'Enlace'],
    correta: "Rede"
  },
  {
    pergunta: "Qual destes é um dispositivo de saída?",
    opcoes: ['Mouse', 'Monitor', 'Teclado', 'Scanner'],
    correta: "Monitor"
  },
  {
    pergunta: "Qual protocolo é usado para e-mails?",
    opcoes: ['SMTP', 'FTP', 'HTTP', 'SSH'],
    correta: "SMTP"
  },
  {
    pergunta: "O que significa IP?",
    opcoes: ['Internet Protocol', 'Internal Program', 'Integrated Process', 'Interconnected Package'],
    correta: "Internet Protocol"
  },
  {
    pergunta: "Qual comando exclui dados de uma tabela?",
    opcoes: ['DROP', 'DELETE', 'REMOVE', 'CUT'],
    correta: "DELETE"
  },
  {
    pergunta: "Qual unidade mede a velocidade de um processador?",
    opcoes: ['GHz', 'MB', 'GB', 'ms'],
    correta: "GHz"
  },
  {
    pergunta: "O que significa CSS?",
    opcoes: ['Cascading Style Sheets', 'Computer Styled Sections', 'Creative Style System', 'Control Style Sheet'],
    correta: "Cascading Style Sheets"
  },
  {
    pergunta: "Qual destes é um dispositivo de saída?",
    opcoes: ['Mouse', 'Monitor', 'Teclado', 'Scanner'],
    correta: "Monitor"
  },
  {
    pergunta: "Qual destes é um dispositivo de entrada?",
    opcoes: ['Monitor', 'Impressora', 'Teclado', 'Caixa de som'],
    correta: "Teclado"
  },
  {
    pergunta: "Qual protocolo é usado para e-mails?",
    opcoes: ['SMTP', 'FTP', 'HTTP', 'SSH'],
    correta: "SMTP"
  },
  {
    pergunta: "O que significa a sigla NoSQL?",
    opcoes: ['Not Only SQL', 'No Sequence Language', 'New Object SQL', 'Non Operational SQL'],
    correta: "Not Only SQL"
  },
  {
    pergunta: "Qual destas é uma linguagem de programação?",
    opcoes: ['MySQL', 'Python', 'Windows', 'HTTP'],
    correta: "Python"
  },
  {
    pergunta: "Qual camada do modelo OSI é responsável pela entrega de pacotes?",
    opcoes: ['Aplicação', 'Rede', 'Transporte', 'Enlace'],
    correta: "Rede"
  },
  {
    pergunta: "O que significa DNS?",
    opcoes: ['Domain Name System', 'Data Network Service', 'Digital Number Source', 'Domain Number Sequence'],
    correta: "Domain Name System"
  },
  {
    pergunta: "Qual comando exclui dados de uma tabela?",
    opcoes: ['DROP', 'DELETE', 'REMOVE', 'CUT'],
    correta: "DELETE"
  },
  {
    pergunta: "O que é SQL?",
    opcoes: ['Structured Query Language', 'System Query List', 'Simple Question Language', 'Sequential Query Logic'],
    correta: "Structured Query Language"
  },
  {
    pergunta: "Qual componente é considerado o 'cérebro' do computador?",
    opcoes: ['Memória RAM', 'Processador', 'Disco Rígido', 'Fonte de energia'],
    correta: "Processador"
  },
  {
    pergunta: "O que significa CSS?",
    opcoes: ['Cascading Style Sheets', 'Computer Styled Sections', 'Creative Style System', 'Control Style Sheet'],
    correta: "Cascading Style Sheets"
  },
  {
    pergunta: "Qual comando exclui dados de uma tabela?",
    opcoes: ['DROP', 'DELETE', 'REMOVE', 'CUT'],
    correta: "DELETE"
  },
  {
    pergunta: "O que significa CSS?",
    opcoes: ['Cascading Style Sheets', 'Computer Styled Sections', 'Creative Style System', 'Control Style Sheet'],
    correta: "Cascading Style Sheets"
  },
  {
    pergunta: "Qual unidade mede a velocidade de um processador?",
    opcoes: ['GHz', 'MB', 'GB', 'ms'],
    correta: "GHz"
  },
  {
    pergunta: "Qual empresa criou o Java?",
    opcoes: ['Microsoft', 'Oracle', 'Sun Microsystems', 'IBM'],
    correta: "Sun Microsystems"
  },
  {
    pergunta: "O que significa VPN?",
    opcoes: ['Virtual Private Network', 'Virtual Process Node', 'Verified Public Network', 'Variable Protocol Network'],
    correta: "Virtual Private Network"
  },
  {
    pergunta: "O que é phishing?",
    opcoes: ['Ataque de engenharia social', 'Tipo de vírus', 'Firewall', 'Criptografia'],
    correta: "Ataque de engenharia social"
  },
  {
    pergunta: "O que significa a sigla HTML?",
    opcoes: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink Machine Language', 'HighText Markdown Language'],
    correta: "HyperText Markup Language"
  },
  {
    pergunta: "O que é phishing?",
    opcoes: ['Ataque de engenharia social', 'Tipo de vírus', 'Firewall', 'Criptografia'],
    correta: "Ataque de engenharia social"
  },
  {
    pergunta: "O que significa a sigla NoSQL?",
    opcoes: ['Not Only SQL', 'No Sequence Language', 'New Object SQL', 'Non Operational SQL'],
    correta: "Not Only SQL"
  },
  {
    pergunta: "O que significa a sigla HTML?",
    opcoes: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink Machine Language', 'HighText Markdown Language'],
    correta: "HyperText Markup Language"
  },
  {
    pergunta: "Qual componente é considerado o 'cérebro' do computador?",
    opcoes: ['Memória RAM', 'Processador', 'Disco Rígido', 'Fonte de energia'],
    correta: "Processador"
  },
  {
    pergunta: "O que significa HTTPS?",
    opcoes: ['HyperText Transfer Protocol Secure', 'Hyper Transfer Text Protocol Simple', 'Hyperlink Transfer Protocol Service', 'HighText Protocol System'],
    correta: "HyperText Transfer Protocol Secure"
  },
  {
    pergunta: "Qual destas é uma linguagem de programação?",
    opcoes: ['MySQL', 'Python', 'Windows', 'HTTP'],
    correta: "Python"
  },
  {
    pergunta: "Qual tecnologia é usada para conectar dispositivos sem fio?",
    opcoes: ['Ethernet', 'Bluetooth', 'Fiber Channel', 'Token Ring'],
    correta: "Bluetooth"
  },
  {
    pergunta: "Qual destas é uma linguagem de programação?",
    opcoes: ['MySQL', 'Python', 'Windows', 'HTTP'],
    correta: "Python"
  },
  {
    pergunta: "O que significa IP?",
    opcoes: ['Internet Protocol', 'Internal Program', 'Integrated Process', 'Interconnected Package'],
    correta: "Internet Protocol"
  },
  {
    pergunta: "Qual empresa criou o Java?",
    opcoes: ['Microsoft', 'Oracle', 'Sun Microsystems', 'IBM'],
    correta: "Sun Microsystems"
  },
  {
    pergunta: "Qual componente é considerado o 'cérebro' do computador?",
    opcoes: ['Memória RAM', 'Processador', 'Disco Rígido', 'Fonte de energia'],
    correta: "Processador"
  },
  {
    pergunta: "Qual tecnologia é usada para conectar dispositivos sem fio?",
    opcoes: ['Ethernet', 'Bluetooth', 'Fiber Channel', 'Token Ring'],
    correta: "Bluetooth"
  },
  {
    pergunta: "O que significa firewall?",
    opcoes: ['Barreira de fogo', 'Sistema de proteção de rede', 'Software de backup', 'Antivírus'],
    correta: "Sistema de proteção de rede"
  },
  {
    pergunta: "Qual empresa criou o Java?",
    opcoes: ['Microsoft', 'Oracle', 'Sun Microsystems', 'IBM'],
    correta: "Sun Microsystems"
  },
  {
    pergunta: "Qual comando exclui dados de uma tabela?",
    opcoes: ['DROP', 'DELETE', 'REMOVE', 'CUT'],
    correta: "DELETE"
  },
  {
    pergunta: "O que significa SSD?",
    opcoes: ['Solid State Drive', 'System Storage Device', 'Software Secure Disk', 'Serial Storage Data'],
    correta: "Solid State Drive"
  },
  {
    pergunta: "Qual destes é um dispositivo de saída?",
    opcoes: ['Mouse', 'Monitor', 'Teclado', 'Scanner'],
    correta: "Monitor"
  },
  {
    pergunta: "Qual técnica é usada para proteger dados sensíveis?",
    opcoes: ['Criptografia', 'Compactação', 'Fragmentação', 'Virtualização'],
    correta: "Criptografia"
  },
  {
    pergunta: "O que significa VPN?",
    opcoes: ['Virtual Private Network', 'Virtual Process Node', 'Verified Public Network', 'Variable Protocol Network'],
    correta: "Virtual Private Network"
  },
  {
    pergunta: "Qual comando exclui dados de uma tabela?",
    opcoes: ['DROP', 'DELETE', 'REMOVE', 'CUT'],
    correta: "DELETE"
  },
  {
    pergunta: "Qual destes é um dispositivo de entrada?",
    opcoes: ['Monitor', 'Impressora', 'Teclado', 'Caixa de som'],
    correta: "Teclado"
  },
  {
    pergunta: "Qual comando é usado para selecionar dados?",
    opcoes: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correta: "SELECT"
  },
  {
    pergunta: "O que significa SSD?",
    opcoes: ['Solid State Drive', 'System Storage Device', 'Software Secure Disk', 'Serial Storage Data'],
    correta: "Solid State Drive"
  },
  {
    pergunta: "O que é phishing?",
    opcoes: ['Ataque de engenharia social', 'Tipo de vírus', 'Firewall', 'Criptografia'],
    correta: "Ataque de engenharia social"
  },
  {
    pergunta: "Qual protocolo é usado para e-mails?",
    opcoes: ['SMTP', 'FTP', 'HTTP', 'SSH'],
    correta: "SMTP"
  },
  {
    pergunta: "Qual linguagem é usada para interatividade em páginas web?",
    opcoes: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    correta: "JavaScript"
  },
  {
    pergunta: "Qual linguagem é usada para interatividade em páginas web?",
    opcoes: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    correta: "JavaScript"
  },
  {
    pergunta: "Qual destas é uma linguagem de programação?",
    opcoes: ['MySQL', 'Python', 'Windows', 'HTTP'],
    correta: "Python"
  },
  {
    pergunta: "Qual comando exclui dados de uma tabela?",
    opcoes: ['DROP', 'DELETE', 'REMOVE', 'CUT'],
    correta: "DELETE"
  },
  {
    pergunta: "Qual tecnologia é usada para conectar dispositivos sem fio?",
    opcoes: ['Ethernet', 'Bluetooth', 'Fiber Channel', 'Token Ring'],
    correta: "Bluetooth"
  },
  {
    pergunta: "O que significa DNS?",
    opcoes: ['Domain Name System', 'Data Network Service', 'Digital Number Source', 'Domain Number Sequence'],
    correta: "Domain Name System"
  },
  {
    pergunta: "O que significa a sigla HTML?",
    opcoes: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink Machine Language', 'HighText Markdown Language'],
    correta: "HyperText Markup Language"
  },
  {
    pergunta: "Qual empresa criou o Java?",
    opcoes: ['Microsoft', 'Oracle', 'Sun Microsystems', 'IBM'],
    correta: "Sun Microsystems"
  },
  {
    pergunta: "Qual destes é um dispositivo de saída?",
    opcoes: ['Mouse', 'Monitor', 'Teclado', 'Scanner'],
    correta: "Monitor"
  },
  {
    pergunta: "Qual unidade mede a velocidade de um processador?",
    opcoes: ['GHz', 'MB', 'GB', 'ms'],
    correta: "GHz"
  },
  {
    pergunta: "O que significa CSS?",
    opcoes: ['Cascading Style Sheets', 'Computer Styled Sections', 'Creative Style System', 'Control Style Sheet'],
    correta: "Cascading Style Sheets"
  },
  {
    pergunta: "Qual técnica é usada para proteger dados sensíveis?",
    opcoes: ['Criptografia', 'Compactação', 'Fragmentação', 'Virtualização'],
    correta: "Criptografia"
  },
  {
    pergunta: "O que é SQL?",
    opcoes: ['Structured Query Language', 'System Query List', 'Simple Question Language', 'Sequential Query Logic'],
    correta: "Structured Query Language"
  },
  {
    pergunta: "Qual destes é um SGBD?",
    opcoes: ['Python', 'MySQL', 'HTML', 'CSS'],
    correta: "MySQL"
  },
  {
    pergunta: "O que significa VPN?",
    opcoes: ['Virtual Private Network', 'Virtual Process Node', 'Verified Public Network', 'Variable Protocol Network'],
    correta: "Virtual Private Network"
  },
  {
    pergunta: "O que significa HTTPS?",
    opcoes: ['HyperText Transfer Protocol Secure', 'Hyper Transfer Text Protocol Simple', 'Hyperlink Transfer Protocol Service', 'HighText Protocol System'],
    correta: "HyperText Transfer Protocol Secure"
  },
  {
    pergunta: "Qual camada do modelo OSI é responsável pela entrega de pacotes?",
    opcoes: ['Aplicação', 'Rede', 'Transporte', 'Enlace'],
    correta: "Rede"
  },
  {
    pergunta: "O que significa SSD?",
    opcoes: ['Solid State Drive', 'System Storage Device', 'Software Secure Disk', 'Serial Storage Data'],
    correta: "Solid State Drive"
  },
  {
    pergunta: "O que significa firewall?",
    opcoes: ['Barreira de fogo', 'Sistema de proteção de rede', 'Software de backup', 'Antivírus'],
    correta: "Sistema de proteção de rede"
  },
  {
    pergunta: "Qual destes é um SGBD?",
    opcoes: ['Python', 'MySQL', 'HTML', 'CSS'],
    correta: "MySQL"
  },
  {
    pergunta: "O que significa VPN?",
    opcoes: ['Virtual Private Network', 'Virtual Process Node', 'Verified Public Network', 'Variable Protocol Network'],
    correta: "Virtual Private Network"
  },
  {
    pergunta: "O que significa VPN?",
    opcoes: ['Virtual Private Network', 'Virtual Process Node', 'Verified Public Network', 'Variable Protocol Network'],
    correta: "Virtual Private Network"
  },
  {
    pergunta: "Qual tecnologia é usada para conectar dispositivos sem fio?",
    opcoes: ['Ethernet', 'Bluetooth', 'Fiber Channel', 'Token Ring'],
    correta: "Bluetooth"
  },
  {
    pergunta: "O que significa DNS?",
    opcoes: ['Domain Name System', 'Data Network Service', 'Digital Number Source', 'Domain Number Sequence'],
    correta: "Domain Name System"
  },
  {
    pergunta: "O que significa IP?",
    opcoes: ['Internet Protocol', 'Internal Program', 'Integrated Process', 'Interconnected Package'],
    correta: "Internet Protocol"
  },
  {
    pergunta: "Qual linguagem é usada para interatividade em páginas web?",
    opcoes: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    correta: "JavaScript"
  },
  {
    pergunta: "O que significa DNS?",
    opcoes: ['Domain Name System', 'Data Network Service', 'Digital Number Source', 'Domain Number Sequence'],
    correta: "Domain Name System"
  },
  {
    pergunta: "Qual destes é um SGBD?",
    opcoes: ['Python', 'MySQL', 'HTML', 'CSS'],
    correta: "MySQL"
  },
  {
    pergunta: "Qual componente é considerado o 'cérebro' do computador?",
    opcoes: ['Memória RAM', 'Processador', 'Disco Rígido', 'Fonte de energia'],
    correta: "Processador"
  },
  {
    pergunta: "Qual camada do modelo OSI é responsável pela entrega de pacotes?",
    opcoes: ['Aplicação', 'Rede', 'Transporte', 'Enlace'],
    correta: "Rede"
  },
  {
    pergunta: "Qual destes é um dispositivo de saída?",
    opcoes: ['Mouse', 'Monitor', 'Teclado', 'Scanner'],
    correta: "Monitor"
  },
  {
    pergunta: "O que significa IP?",
    opcoes: ['Internet Protocol', 'Internal Program', 'Integrated Process', 'Interconnected Package'],
    correta: "Internet Protocol"
  },
  {
    pergunta: "O que significa CSS?",
    opcoes: ['Cascading Style Sheets', 'Computer Styled Sections', 'Creative Style System', 'Control Style Sheet'],
    correta: "Cascading Style Sheets"
  },
  {
    pergunta: "Qual comando exclui dados de uma tabela?",
    opcoes: ['DROP', 'DELETE', 'REMOVE', 'CUT'],
    correta: "DELETE"
  },
  {
    pergunta: "Qual destes é um SGBD?",
    opcoes: ['Python', 'MySQL', 'HTML', 'CSS'],
    correta: "MySQL"
  },
  {
    pergunta: "Qual protocolo é usado para e-mails?",
    opcoes: ['SMTP', 'FTP', 'HTTP', 'SSH'],
    correta: "SMTP"
  },
  {
    pergunta: "O que significa CSS?",
    opcoes: ['Cascading Style Sheets', 'Computer Styled Sections', 'Creative Style System', 'Control Style Sheet'],
    correta: "Cascading Style Sheets"
  },
  {
    pergunta: "O que significa IP?",
    opcoes: ['Internet Protocol', 'Internal Program', 'Integrated Process', 'Interconnected Package'],
    correta: "Internet Protocol"
  },
  {
    pergunta: "O que significa CSS?",
    opcoes: ['Cascading Style Sheets', 'Computer Styled Sections', 'Creative Style System', 'Control Style Sheet'],
    correta: "Cascading Style Sheets"
  },
  {
    pergunta: "Qual unidade mede a velocidade de um processador?",
    opcoes: ['GHz', 'MB', 'GB', 'ms'],
    correta: "GHz"
  },
  {
    pergunta: "O que significa VPN?",
    opcoes: ['Virtual Private Network', 'Virtual Process Node', 'Verified Public Network', 'Variable Protocol Network'],
    correta: "Virtual Private Network"
  },
  {
    pergunta: "O que significa HTTPS?",
    opcoes: ['HyperText Transfer Protocol Secure', 'Hyper Transfer Text Protocol Simple', 'Hyperlink Transfer Protocol Service', 'HighText Protocol System'],
    correta: "HyperText Transfer Protocol Secure"
  },
  {
    pergunta: "O que significa VPN?",
    opcoes: ['Virtual Private Network', 'Virtual Process Node', 'Verified Public Network', 'Variable Protocol Network'],
    correta: "Virtual Private Network"
  },
  {
    pergunta: "Qual protocolo é usado para e-mails?",
    opcoes: ['SMTP', 'FTP', 'HTTP', 'SSH'],
    correta: "SMTP"
  },
  {
    pergunta: "O que significa HTTPS?",
    opcoes: ['HyperText Transfer Protocol Secure', 'Hyper Transfer Text Protocol Simple', 'Hyperlink Transfer Protocol Service', 'HighText Protocol System'],
    correta: "HyperText Transfer Protocol Secure"
  },
  {
    pergunta: "Qual protocolo é usado para e-mails?",
    opcoes: ['SMTP', 'FTP', 'HTTP', 'SSH'],
    correta: "SMTP"
  },
  {
    pergunta: "Qual componente é considerado o 'cérebro' do computador?",
    opcoes: ['Memória RAM', 'Processador', 'Disco Rígido', 'Fonte de energia'],
    correta: "Processador"
  },
  {
    pergunta: "Qual destes é um dispositivo de entrada?",
    opcoes: ['Monitor', 'Impressora', 'Teclado', 'Caixa de som'],
    correta: "Teclado"
  },
  {
    pergunta: "Qual tecnologia é usada para conectar dispositivos sem fio?",
    opcoes: ['Ethernet', 'Bluetooth', 'Fiber Channel', 'Token Ring'],
    correta: "Bluetooth"
  },
  {
    pergunta: "Qual destes é um dispositivo de saída?",
    opcoes: ['Mouse', 'Monitor', 'Teclado', 'Scanner'],
    correta: "Monitor"
  },
  {
    pergunta: "O que significa HTTPS?",
    opcoes: ['HyperText Transfer Protocol Secure', 'Hyper Transfer Text Protocol Simple', 'Hyperlink Transfer Protocol Service', 'HighText Protocol System'],
    correta: "HyperText Transfer Protocol Secure"
  },
  {
    pergunta: "O que significa HTTPS?",
    opcoes: ['HyperText Transfer Protocol Secure', 'Hyper Transfer Text Protocol Simple', 'Hyperlink Transfer Protocol Service', 'HighText Protocol System'],
    correta: "HyperText Transfer Protocol Secure"
  },
  {
    pergunta: "O que significa a sigla HTML?",
    opcoes: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink Machine Language', 'HighText Markdown Language'],
    correta: "HyperText Markup Language"
  },
  {
    pergunta: "Qual comando é usado para selecionar dados?",
    opcoes: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correta: "SELECT"
  },
  {
    pergunta: "Qual unidade mede a velocidade de um processador?",
    opcoes: ['GHz', 'MB', 'GB', 'ms'],
    correta: "GHz"
  },
  {
    pergunta: "O que é SQL?",
    opcoes: ['Structured Query Language', 'System Query List', 'Simple Question Language', 'Sequential Query Logic'],
    correta: "Structured Query Language"
  },
  {
    pergunta: "O que é SQL?",
    opcoes: ['Structured Query Language', 'System Query List', 'Simple Question Language', 'Sequential Query Logic'],
    correta: "Structured Query Language"
  },
  {
    pergunta: "Qual componente é considerado o 'cérebro' do computador?",
    opcoes: ['Memória RAM', 'Processador', 'Disco Rígido', 'Fonte de energia'],
    correta: "Processador"
  },
  {
    pergunta: "O que significa a sigla NoSQL?",
    opcoes: ['Not Only SQL', 'No Sequence Language', 'New Object SQL', 'Non Operational SQL'],
    correta: "Not Only SQL"
  },
  {
    pergunta: "O que significa firewall?",
    opcoes: ['Barreira de fogo', 'Sistema de proteção de rede', 'Software de backup', 'Antivírus'],
    correta: "Sistema de proteção de rede"
  },
  {
    pergunta: "Qual destes é um SGBD?",
    opcoes: ['Python', 'MySQL', 'HTML', 'CSS'],
    correta: "MySQL"
  },
  {
    pergunta: "Qual técnica é usada para proteger dados sensíveis?",
    opcoes: ['Criptografia', 'Compactação', 'Fragmentação', 'Virtualização'],
    correta: "Criptografia"
  },
  {
    pergunta: "O que significa VPN?",
    opcoes: ['Virtual Private Network', 'Virtual Process Node', 'Verified Public Network', 'Variable Protocol Network'],
    correta: "Virtual Private Network"
  },
  {
    pergunta: "O que significa DNS?",
    opcoes: ['Domain Name System', 'Data Network Service', 'Digital Number Source', 'Domain Number Sequence'],
    correta: "Domain Name System"
  },
  {
    pergunta: "O que significa DNS?",
    opcoes: ['Domain Name System', 'Data Network Service', 'Digital Number Source', 'Domain Number Sequence'],
    correta: "Domain Name System"
  },
  {
    pergunta: "Qual unidade mede a velocidade de um processador?",
    opcoes: ['GHz', 'MB', 'GB', 'ms'],
    correta: "GHz"
  },
  {
    pergunta: "Qual destes é um dispositivo de entrada?",
    opcoes: ['Monitor', 'Impressora', 'Teclado', 'Caixa de som'],
    correta: "Teclado"
  },
  {
    pergunta: "O que significa firewall?",
    opcoes: ['Barreira de fogo', 'Sistema de proteção de rede', 'Software de backup', 'Antivírus'],
    correta: "Sistema de proteção de rede"
  },
  {
    pergunta: "O que significa IP?",
    opcoes: ['Internet Protocol', 'Internal Program', 'Integrated Process', 'Interconnected Package'],
    correta: "Internet Protocol"
  },
  {
    pergunta: "Qual destas é uma linguagem de programação?",
    opcoes: ['MySQL', 'Python', 'Windows', 'HTTP'],
    correta: "Python"
  },
  {
    pergunta: "Qual tecnologia é usada para conectar dispositivos sem fio?",
    opcoes: ['Ethernet', 'Bluetooth', 'Fiber Channel', 'Token Ring'],
    correta: "Bluetooth"
  },
  {
    pergunta: "Qual comando é usado para selecionar dados?",
    opcoes: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correta: "SELECT"
  },
  {
    pergunta: "O que é phishing?",
    opcoes: ['Ataque de engenharia social', 'Tipo de vírus', 'Firewall', 'Criptografia'],
    correta: "Ataque de engenharia social"
  },
  {
    pergunta: "Qual camada do modelo OSI é responsável pela entrega de pacotes?",
    opcoes: ['Aplicação', 'Rede', 'Transporte', 'Enlace'],
    correta: "Rede"
  },
  {
    pergunta: "O que é SQL?",
    opcoes: ['Structured Query Language', 'System Query List', 'Simple Question Language', 'Sequential Query Logic'],
    correta: "Structured Query Language"
  },
  {
    pergunta: "Qual linguagem é usada para interatividade em páginas web?",
    opcoes: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    correta: "JavaScript"
  },
  {
    pergunta: "O que significa IP?",
    opcoes: ['Internet Protocol', 'Internal Program', 'Integrated Process', 'Interconnected Package'],
    correta: "Internet Protocol"
  },
  {
    pergunta: "Qual comando é usado para selecionar dados?",
    opcoes: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correta: "SELECT"
  },
  {
    pergunta: "Qual destes é um SGBD?",
    opcoes: ['Python', 'MySQL', 'HTML', 'CSS'],
    correta: "MySQL"
  },
  {
    pergunta: "Qual técnica é usada para proteger dados sensíveis?",
    opcoes: ['Criptografia', 'Compactação', 'Fragmentação', 'Virtualização'],
    correta: "Criptografia"
  },
  {
    pergunta: "O que significa DNS?",
    opcoes: ['Domain Name System', 'Data Network Service', 'Digital Number Source', 'Domain Number Sequence'],
    correta: "Domain Name System"
  },
  {
    pergunta: "Qual comando exclui dados de uma tabela?",
    opcoes: ['DROP', 'DELETE', 'REMOVE', 'CUT'],
    correta: "DELETE"
  },
  {
    pergunta: "Qual destes é um dispositivo de saída?",
    opcoes: ['Mouse', 'Monitor', 'Teclado', 'Scanner'],
    correta: "Monitor"
  },
  {
    pergunta: "Qual comando exclui dados de uma tabela?",
    opcoes: ['DROP', 'DELETE', 'REMOVE', 'CUT'],
    correta: "DELETE"
  },
  {
    pergunta: "Qual componente é considerado o 'cérebro' do computador?",
    opcoes: ['Memória RAM', 'Processador', 'Disco Rígido', 'Fonte de energia'],
    correta: "Processador"
  },
  {
    pergunta: "O que significa SSD?",
    opcoes: ['Solid State Drive', 'System Storage Device', 'Software Secure Disk', 'Serial Storage Data'],
    correta: "Solid State Drive"
  },
  {
    pergunta: "Qual comando é usado para selecionar dados?",
    opcoes: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correta: "SELECT"
  },
  {
    pergunta: "O que significa a sigla NoSQL?",
    opcoes: ['Not Only SQL', 'No Sequence Language', 'New Object SQL', 'Non Operational SQL'],
    correta: "Not Only SQL"
  },
  {
    pergunta: "Qual comando é usado para selecionar dados?",
    opcoes: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correta: "SELECT"
  },
  {
    pergunta: "O que significa a sigla HTML?",
    opcoes: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink Machine Language', 'HighText Markdown Language'],
    correta: "HyperText Markup Language"
  },
  {
    pergunta: "Qual destes é um SGBD?",
    opcoes: ['Python', 'MySQL', 'HTML', 'CSS'],
    correta: "MySQL"
  },
  {
    pergunta: "O que significa firewall?",
    opcoes: ['Barreira de fogo', 'Sistema de proteção de rede', 'Software de backup', 'Antivírus'],
    correta: "Sistema de proteção de rede"
  },
  {
    pergunta: "O que significa IP?",
    opcoes: ['Internet Protocol', 'Internal Program', 'Integrated Process', 'Interconnected Package'],
    correta: "Internet Protocol"
  },
  {
    pergunta: "O que significa CSS?",
    opcoes: ['Cascading Style Sheets', 'Computer Styled Sections', 'Creative Style System', 'Control Style Sheet'],
    correta: "Cascading Style Sheets"
  },
  {
    pergunta: "Qual camada do modelo OSI é responsável pela entrega de pacotes?",
    opcoes: ['Aplicação', 'Rede', 'Transporte', 'Enlace'],
    correta: "Rede"
  },
  {
    pergunta: "O que significa HTTPS?",
    opcoes: ['HyperText Transfer Protocol Secure', 'Hyper Transfer Text Protocol Simple', 'Hyperlink Transfer Protocol Service', 'HighText Protocol System'],
    correta: "HyperText Transfer Protocol Secure"
  },
  {
    pergunta: "Qual destes é um dispositivo de entrada?",
    opcoes: ['Monitor', 'Impressora', 'Teclado', 'Caixa de som'],
    correta: "Teclado"
  },
  {
    pergunta: "O que é SQL?",
    opcoes: ['Structured Query Language', 'System Query List', 'Simple Question Language', 'Sequential Query Logic'],
    correta: "Structured Query Language"
  },
  {
    pergunta: "Qual empresa criou o Java?",
    opcoes: ['Microsoft', 'Oracle', 'Sun Microsystems', 'IBM'],
    correta: "Sun Microsystems"
  },
  {
    pergunta: "O que significa VPN?",
    opcoes: ['Virtual Private Network', 'Virtual Process Node', 'Verified Public Network', 'Variable Protocol Network'],
    correta: "Virtual Private Network"
  },
  {
    pergunta: "Qual destas é uma linguagem de programação?",
    opcoes: ['MySQL', 'Python', 'Windows', 'HTTP'],
    correta: "Python"
  },
  {
    pergunta: "Qual destes é um SGBD?",
    opcoes: ['Python', 'MySQL', 'HTML', 'CSS'],
    correta: "MySQL"
  },
  {
    pergunta: "Qual comando é usado para selecionar dados?",
    opcoes: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correta: "SELECT"
  },
  {
    pergunta: "O que significa firewall?",
    opcoes: ['Barreira de fogo', 'Sistema de proteção de rede', 'Software de backup', 'Antivírus'],
    correta: "Sistema de proteção de rede"
  },
  {
    pergunta: "O que significa CSS?",
    opcoes: ['Cascading Style Sheets', 'Computer Styled Sections', 'Creative Style System', 'Control Style Sheet'],
    correta: "Cascading Style Sheets"
  },
  {
    pergunta: "Qual técnica é usada para proteger dados sensíveis?",
    opcoes: ['Criptografia', 'Compactação', 'Fragmentação', 'Virtualização'],
    correta: "Criptografia"
  },
  {
    pergunta: "Qual destes é um SGBD?",
    opcoes: ['Python', 'MySQL', 'HTML', 'CSS'],
    correta: "MySQL"
  },
  {
    pergunta: "Qual empresa criou o Java?",
    opcoes: ['Microsoft', 'Oracle', 'Sun Microsystems', 'IBM'],
    correta: "Sun Microsystems"
  },
  {
    pergunta: "O que significa VPN?",
    opcoes: ['Virtual Private Network', 'Virtual Process Node', 'Verified Public Network', 'Variable Protocol Network'],
    correta: "Virtual Private Network"
  },
  {
    pergunta: "Qual destes é um dispositivo de entrada?",
    opcoes: ['Monitor', 'Impressora', 'Teclado', 'Caixa de som'],
    correta: "Teclado"
  },
  {
    pergunta: "O que significa IP?",
    opcoes: ['Internet Protocol', 'Internal Program', 'Integrated Process', 'Interconnected Package'],
    correta: "Internet Protocol"
  },
  {
    pergunta: "Qual unidade mede a velocidade de um processador?",
    opcoes: ['GHz', 'MB', 'GB', 'ms'],
    correta: "GHz"
  },
  {
    pergunta: "O que significa SSD?",
    opcoes: ['Solid State Drive', 'System Storage Device', 'Software Secure Disk', 'Serial Storage Data'],
    correta: "Solid State Drive"
  },
  {
    pergunta: "Qual destes é um dispositivo de saída?",
    opcoes: ['Mouse', 'Monitor', 'Teclado', 'Scanner'],
    correta: "Monitor"
  },
  {
    pergunta: "Qual protocolo é usado para e-mails?",
    opcoes: ['SMTP', 'FTP', 'HTTP', 'SSH'],
    correta: "SMTP"
  },
  {
    pergunta: "Qual linguagem é usada para interatividade em páginas web?",
    opcoes: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    correta: "JavaScript"
  },
  {
    pergunta: "O que significa DNS?",
    opcoes: ['Domain Name System', 'Data Network Service', 'Digital Number Source', 'Domain Number Sequence'],
    correta: "Domain Name System"
  },
  {
    pergunta: "O que significa VPN?",
    opcoes: ['Virtual Private Network', 'Virtual Process Node', 'Verified Public Network', 'Variable Protocol Network'],
    correta: "Virtual Private Network"
  },
  {
    pergunta: "O que significa a sigla NoSQL?",
    opcoes: ['Not Only SQL', 'No Sequence Language', 'New Object SQL', 'Non Operational SQL'],
    correta: "Not Only SQL"
  },
  {
    pergunta: "Qual destas é uma linguagem de programação?",
    opcoes: ['MySQL', 'Python', 'Windows', 'HTTP'],
    correta: "Python"
  },
  {
    pergunta: "O que significa VPN?",
    opcoes: ['Virtual Private Network', 'Virtual Process Node', 'Verified Public Network', 'Variable Protocol Network'],
    correta: "Virtual Private Network"
  },
  {
    pergunta: "Qual linguagem é usada para interatividade em páginas web?",
    opcoes: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    correta: "JavaScript"
  },
  {
    pergunta: "Qual destes é um dispositivo de entrada?",
    opcoes: ['Monitor', 'Impressora', 'Teclado', 'Caixa de som'],
    correta: "Teclado"
  },
  {
    pergunta: "O que significa firewall?",
    opcoes: ['Barreira de fogo', 'Sistema de proteção de rede', 'Software de backup', 'Antivírus'],
    correta: "Sistema de proteção de rede"
  },
  {
    pergunta: "Qual técnica é usada para proteger dados sensíveis?",
    opcoes: ['Criptografia', 'Compactação', 'Fragmentação', 'Virtualização'],
    correta: "Criptografia"
  },
  {
    pergunta: "O que significa HTTPS?",
    opcoes: ['HyperText Transfer Protocol Secure', 'Hyper Transfer Text Protocol Simple', 'Hyperlink Transfer Protocol Service', 'HighText Protocol System'],
    correta: "HyperText Transfer Protocol Secure"
  },
  {
    pergunta: "Qual tecnologia é usada para conectar dispositivos sem fio?",
    opcoes: ['Ethernet', 'Bluetooth', 'Fiber Channel', 'Token Ring'],
    correta: "Bluetooth"
  },
  {
    pergunta: "Qual tecnologia é usada para conectar dispositivos sem fio?",
    opcoes: ['Ethernet', 'Bluetooth', 'Fiber Channel', 'Token Ring'],
    correta: "Bluetooth"
  },
  {
    pergunta: "Qual empresa criou o Java?",
    opcoes: ['Microsoft', 'Oracle', 'Sun Microsystems', 'IBM'],
    correta: "Sun Microsystems"
  },
  {
    pergunta: "O que significa a sigla HTML?",
    opcoes: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink Machine Language', 'HighText Markdown Language'],
    correta: "HyperText Markup Language"
  },
  {
    pergunta: "O que é SQL?",
    opcoes: ['Structured Query Language', 'System Query List', 'Simple Question Language', 'Sequential Query Logic'],
    correta: "Structured Query Language"
  },
  {
    pergunta: "O que significa SSD?",
    opcoes: ['Solid State Drive', 'System Storage Device', 'Software Secure Disk', 'Serial Storage Data'],
    correta: "Solid State Drive"
  },
  {
    pergunta: "O que é phishing?",
    opcoes: ['Ataque de engenharia social', 'Tipo de vírus', 'Firewall', 'Criptografia'],
    correta: "Ataque de engenharia social"
  },
  {
    pergunta: "Qual empresa criou o Java?",
    opcoes: ['Microsoft', 'Oracle', 'Sun Microsystems', 'IBM'],
    correta: "Sun Microsystems"
  },
  {
    pergunta: "Qual destes é um dispositivo de entrada?",
    opcoes: ['Monitor', 'Impressora', 'Teclado', 'Caixa de som'],
    correta: "Teclado"
  },
  {
    pergunta: "O que significa firewall?",
    opcoes: ['Barreira de fogo', 'Sistema de proteção de rede', 'Software de backup', 'Antivírus'],
    correta: "Sistema de proteção de rede"
  },
  {
    pergunta: "Qual destes é um SGBD?",
    opcoes: ['Python', 'MySQL', 'HTML', 'CSS'],
    correta: "MySQL"
  },
  {
    pergunta: "O que significa firewall?",
    opcoes: ['Barreira de fogo', 'Sistema de proteção de rede', 'Software de backup', 'Antivírus'],
    correta: "Sistema de proteção de rede"
  },
  {
    pergunta: "O que significa DNS?",
    opcoes: ['Domain Name System', 'Data Network Service', 'Digital Number Source', 'Domain Number Sequence'],
    correta: "Domain Name System"
  },
  {
    pergunta: "O que é phishing?",
    opcoes: ['Ataque de engenharia social', 'Tipo de vírus', 'Firewall', 'Criptografia'],
    correta: "Ataque de engenharia social"
  },
  {
    pergunta: "O que é phishing?",
    opcoes: ['Ataque de engenharia social', 'Tipo de vírus', 'Firewall', 'Criptografia'],
    correta: "Ataque de engenharia social"
  },
  {
    pergunta: "O que é phishing?",
    opcoes: ['Ataque de engenharia social', 'Tipo de vírus', 'Firewall', 'Criptografia'],
    correta: "Ataque de engenharia social"
  },
  {
    pergunta: "Qual destes é um dispositivo de entrada?",
    opcoes: ['Monitor', 'Impressora', 'Teclado', 'Caixa de som'],
    correta: "Teclado"
  },
  {
    pergunta: "O que significa CSS?",
    opcoes: ['Cascading Style Sheets', 'Computer Styled Sections', 'Creative Style System', 'Control Style Sheet'],
    correta: "Cascading Style Sheets"
  },
  {
    pergunta: "Qual camada do modelo OSI é responsável pela entrega de pacotes?",
    opcoes: ['Aplicação', 'Rede', 'Transporte', 'Enlace'],
    correta: "Rede"
  },
  {
    pergunta: "O que significa CSS?",
    opcoes: ['Cascading Style Sheets', 'Computer Styled Sections', 'Creative Style System', 'Control Style Sheet'],
    correta: "Cascading Style Sheets"
  },
  {
    pergunta: "Qual destes é um dispositivo de entrada?",
    opcoes: ['Monitor', 'Impressora', 'Teclado', 'Caixa de som'],
    correta: "Teclado"
  },
  {
    pergunta: "Qual técnica é usada para proteger dados sensíveis?",
    opcoes: ['Criptografia', 'Compactação', 'Fragmentação', 'Virtualização'],
    correta: "Criptografia"
  },
  {
    pergunta: "O que significa SSD?",
    opcoes: ['Solid State Drive', 'System Storage Device', 'Software Secure Disk', 'Serial Storage Data'],
    correta: "Solid State Drive"
  },
  {
    pergunta: "O que significa HTTPS?",
    opcoes: ['HyperText Transfer Protocol Secure', 'Hyper Transfer Text Protocol Simple', 'Hyperlink Transfer Protocol Service', 'HighText Protocol System'],
    correta: "HyperText Transfer Protocol Secure"
  },
  {
    pergunta: "Qual protocolo é usado para e-mails?",
    opcoes: ['SMTP', 'FTP', 'HTTP', 'SSH'],
    correta: "SMTP"
  },
  {
    pergunta: "O que significa a sigla HTML?",
    opcoes: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink Machine Language', 'HighText Markdown Language'],
    correta: "HyperText Markup Language"
  },
  {
    pergunta: "O que significa a sigla NoSQL?",
    opcoes: ['Not Only SQL', 'No Sequence Language', 'New Object SQL', 'Non Operational SQL'],
    correta: "Not Only SQL"
  },
  {
    pergunta: "Qual protocolo é usado para e-mails?",
    opcoes: ['SMTP', 'FTP', 'HTTP', 'SSH'],
    correta: "SMTP"
  },
  {
    pergunta: "O que significa CSS?",
    opcoes: ['Cascading Style Sheets', 'Computer Styled Sections', 'Creative Style System', 'Control Style Sheet'],
    correta: "Cascading Style Sheets"
  },
  {
    pergunta: "Qual destas é uma linguagem de programação?",
    opcoes: ['MySQL', 'Python', 'Windows', 'HTTP'],
    correta: "Python"
  },
  {
    pergunta: "Qual unidade mede a velocidade de um processador?",
    opcoes: ['GHz', 'MB', 'GB', 'ms'],
    correta: "GHz"
  },
  {
    pergunta: "Qual unidade mede a velocidade de um processador?",
    opcoes: ['GHz', 'MB', 'GB', 'ms'],
    correta: "GHz"
  },
  {
    pergunta: "O que é phishing?",
    opcoes: ['Ataque de engenharia social', 'Tipo de vírus', 'Firewall', 'Criptografia'],
    correta: "Ataque de engenharia social"
  },
  {
    pergunta: "O que significa VPN?",
    opcoes: ['Virtual Private Network', 'Virtual Process Node', 'Verified Public Network', 'Variable Protocol Network'],
    correta: "Virtual Private Network"
  },
  {
    pergunta: "Qual destes é um SGBD?",
    opcoes: ['Python', 'MySQL', 'HTML', 'CSS'],
    correta: "MySQL"
  },
  {
    pergunta: "Qual comando é usado para selecionar dados?",
    opcoes: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correta: "SELECT"
  },
  {
    pergunta: "O que significa a sigla NoSQL?",
    opcoes: ['Not Only SQL', 'No Sequence Language', 'New Object SQL', 'Non Operational SQL'],
    correta: "Not Only SQL"
  },
  {
    pergunta: "Qual destes é um dispositivo de entrada?",
    opcoes: ['Monitor', 'Impressora', 'Teclado', 'Caixa de som'],
    correta: "Teclado"
  },
  {
    pergunta: "O que é SQL?",
    opcoes: ['Structured Query Language', 'System Query List', 'Simple Question Language', 'Sequential Query Logic'],
    correta: "Structured Query Language"
  },
  {
    pergunta: "O que significa HTTPS?",
    opcoes: ['HyperText Transfer Protocol Secure', 'Hyper Transfer Text Protocol Simple', 'Hyperlink Transfer Protocol Service', 'HighText Protocol System'],
    correta: "HyperText Transfer Protocol Secure"
  },
  {
    pergunta: "O que significa a sigla HTML?",
    opcoes: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink Machine Language', 'HighText Markdown Language'],
    correta: "HyperText Markup Language"
  },
  {
    pergunta: "O que significa a sigla HTML?",
    opcoes: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink Machine Language', 'HighText Markdown Language'],
    correta: "HyperText Markup Language"
  },
  {
    pergunta: "Qual componente é considerado o 'cérebro' do computador?",
    opcoes: ['Memória RAM', 'Processador', 'Disco Rígido', 'Fonte de energia'],
    correta: "Processador"
  },
  {
    pergunta: "O que é phishing?",
    opcoes: ['Ataque de engenharia social', 'Tipo de vírus', 'Firewall', 'Criptografia'],
    correta: "Ataque de engenharia social"
  },
  {
    pergunta: "O que significa a sigla HTML?",
    opcoes: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink Machine Language', 'HighText Markdown Language'],
    correta: "HyperText Markup Language"
  },
  {
    pergunta: "O que significa a sigla HTML?",
    opcoes: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink Machine Language', 'HighText Markdown Language'],
    correta: "HyperText Markup Language"
  },
  {
    pergunta: "Qual empresa criou o Java?",
    opcoes: ['Microsoft', 'Oracle', 'Sun Microsystems', 'IBM'],
    correta: "Sun Microsystems"
  },
  {
    pergunta: "O que significa HTTPS?",
    opcoes: ['HyperText Transfer Protocol Secure', 'Hyper Transfer Text Protocol Simple', 'Hyperlink Transfer Protocol Service', 'HighText Protocol System'],
    correta: "HyperText Transfer Protocol Secure"
  },
  {
    pergunta: "Qual camada do modelo OSI é responsável pela entrega de pacotes?",
    opcoes: ['Aplicação', 'Rede', 'Transporte', 'Enlace'],
    correta: "Rede"
  },
  {
    pergunta: "Qual comando é usado para selecionar dados?",
    opcoes: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correta: "SELECT"
  },
  {
    pergunta: "Qual unidade mede a velocidade de um processador?",
    opcoes: ['GHz', 'MB', 'GB', 'ms'],
    correta: "GHz"
  },
  {
    pergunta: "O que significa firewall?",
    opcoes: ['Barreira de fogo', 'Sistema de proteção de rede', 'Software de backup', 'Antivírus'],
    correta: "Sistema de proteção de rede"
  },
  {
    pergunta: "O que significa DNS?",
    opcoes: ['Domain Name System', 'Data Network Service', 'Digital Number Source', 'Domain Number Sequence'],
    correta: "Domain Name System"
  },
  {
    pergunta: "Qual destas é uma linguagem de programação?",
    opcoes: ['MySQL', 'Python', 'Windows', 'HTTP'],
    correta: "Python"
  },
  {
    pergunta: "O que significa HTTPS?",
    opcoes: ['HyperText Transfer Protocol Secure', 'Hyper Transfer Text Protocol Simple', 'Hyperlink Transfer Protocol Service', 'HighText Protocol System'],
    correta: "HyperText Transfer Protocol Secure"
  },
  {
    pergunta: "Qual empresa criou o Java?",
    opcoes: ['Microsoft', 'Oracle', 'Sun Microsystems', 'IBM'],
    correta: "Sun Microsystems"
  },
  {
    pergunta: "Qual tecnologia é usada para conectar dispositivos sem fio?",
    opcoes: ['Ethernet', 'Bluetooth', 'Fiber Channel', 'Token Ring'],
    correta: "Bluetooth"
  },
  {
    pergunta: "Qual destes é um SGBD?",
    opcoes: ['Python', 'MySQL', 'HTML', 'CSS'],
    correta: "MySQL"
  },
  {
    pergunta: "Qual tecnologia é usada para conectar dispositivos sem fio?",
    opcoes: ['Ethernet', 'Bluetooth', 'Fiber Channel', 'Token Ring'],
    correta: "Bluetooth"
  },
  {
    pergunta: "O que é phishing?",
    opcoes: ['Ataque de engenharia social', 'Tipo de vírus', 'Firewall', 'Criptografia'],
    correta: "Ataque de engenharia social"
  },
  {
    pergunta: "Qual unidade mede a velocidade de um processador?",
    opcoes: ['GHz', 'MB', 'GB', 'ms'],
    correta: "GHz"
  },
  {
    pergunta: "Qual comando exclui dados de uma tabela?",
    opcoes: ['DROP', 'DELETE', 'REMOVE', 'CUT'],
    correta: "DELETE"
  },
  {
    pergunta: "Qual protocolo é usado para e-mails?",
    opcoes: ['SMTP', 'FTP', 'HTTP', 'SSH'],
    correta: "SMTP"
  },
  {
    pergunta: "Qual linguagem é usada para interatividade em páginas web?",
    opcoes: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    correta: "JavaScript"
  },
  {
    pergunta: "O que significa SSD?",
    opcoes: ['Solid State Drive', 'System Storage Device', 'Software Secure Disk', 'Serial Storage Data'],
    correta: "Solid State Drive"
  },
  {
    pergunta: "Qual comando é usado para selecionar dados?",
    opcoes: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correta: "SELECT"
  },
  {
    pergunta: "O que significa a sigla HTML?",
    opcoes: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink Machine Language', 'HighText Markdown Language'],
    correta: "HyperText Markup Language"
  },
  {
    pergunta: "Qual destes é um dispositivo de saída?",
    opcoes: ['Mouse', 'Monitor', 'Teclado', 'Scanner'],
    correta: "Monitor"
  },
  {
    pergunta: "Qual componente é considerado o 'cérebro' do computador?",
    opcoes: ['Memória RAM', 'Processador', 'Disco Rígido', 'Fonte de energia'],
    correta: "Processador"
  },
  {
    pergunta: "O que significa SSD?",
    opcoes: ['Solid State Drive', 'System Storage Device', 'Software Secure Disk', 'Serial Storage Data'],
    correta: "Solid State Drive"
  },
  {
    pergunta: "O que significa a sigla NoSQL?",
    opcoes: ['Not Only SQL', 'No Sequence Language', 'New Object SQL', 'Non Operational SQL'],
    correta: "Not Only SQL"
  },
  {
    pergunta: "O que significa firewall?",
    opcoes: ['Barreira de fogo', 'Sistema de proteção de rede', 'Software de backup', 'Antivírus'],
    correta: "Sistema de proteção de rede"
  },
];