---

layout: pagina-projeto
title: Análise de RH
thumbnail: 02-thumbnail.jpg
subtitle: Veja o estudo de caso
alt: Imagem ilustrativa do projeto
category: python powerbi 
hero_image: "02-fundo.jpg"
summary: "Transformando dados de recursos humanos em insights estratégicos. Este projeto utiliza Python e Power BI para construir uma ferramenta de Business Intelligence que permite prever e mitigar a rotatividade de funcionários, otimizando a retenção de talentos."
tools: "Pyhton, Figma, Power BI"
source_code_url: "https://github.com/Pedro-Gutierre18/Analise-de-RH"

sections:
  - title: "O Problema"
    icon: "fa-solid fa-triangle-exclamation"
    content: |
      Em um cenário de múltiplas transações diárias, o controle financeiro por meio de planilhas estáticas ou anotações manuais se mostra ineficiente e propenso a erros. A dificuldade em consolidar dados de diferentes fontes e a ausência de visualizações claras impedem uma análise aprofundada dos hábitos de consumo.

    image: "02-perguntas.svg"
    
  - title: "O Processo"
    icon: "fa-solid fa-gears"
    content: |
      Para responder a estas questões, foi desenvolvido um projeto completo de análise de dados e Machine Learning, seguindo um pipeline robusto desde a coleta e tratamento dos dados até a implementação de um modelo preditivo.


    subtitle2: "EXTRAÇÃO E PRÉ-PROCESSAMENTO DE DADOS (PYTHON)"

    content2: |
      A base de dados 'IBM HR Analytics Employee Attrition & Performance' foi obtida no Kaggle, contendo informações detalhadas sobre 1470 funcionários. O pré-processamento foi crucial para preparar os dados para a análise e modelagem. As principais etapas incluíram:

      <b>Limpeza de Dados:</b> Remoção de colunas redundantes e sem valor analítico (EmployeeCount, StandardHours, Over18, EmployeeNumber).

      <b>Transformação de Tipos de Dados:</b> Conversão da variável alvo Attrition para formato numérico (0 ou 1) e aplicação de One-Hot Encoding (pd.get_dummies) para transformar variáveis categóricas em numéricas, tornando-as compreensíveis para o modelo de ML.

      <b>Engenharia de Features:</b> Embora não tenhamos criado novas features explícitas neste projeto, essa etapa envolveu garantir que todas as variáveis importantes estivessem no formato correto para o modelo.

      Este script garante que a maior parte do trabalho de preparação de dados seja automatizada, tornando o processo rápido e menos suscetível a erros manuais no futuro.

    image2: "02-codigo.png"

    subtitle3: "ANÁLISE EXPLORATÓRIA DE DADOS (EDA) E MODELAGEM PREDITIVA"

    content3: |
      <b>EDA Detalhada:</b> Foram exploradas relações entre rotatividade e fatores como departamento, cargo, idade, salário, tempo de empresa, horas extras e satisfação no trabalho, utilizando visualizações em Matplotlib e Seaborn.

      <b>Desenvolvimento do Modelo de Machine Learning:</b> Um modelo RandomForestClassifier foi treinado em Python (scikit-learn) para prever a probabilidade de um funcionário sair. O modelo foi configurado com <b>class_weight='balanced'</b> e <b>stratify=y</b> para lidar com o desbalanceamento das classes.

      <b>Avaliação do Modelo:</b> Métricas como Acurácia, Matriz de Confusão e Relatório de Classificação (Precision, Recall, F1-Score) foram usadas para validar a performance do modelo, focando na capacidade de identificar corretamente os casos de saída.

      <b>Identificação da Importância das Features:</b> O modelo Random Forest forneceu uma lista dos fatores mais importantes para prever a rotatividade, permitindo focar nas causas de maior impacto.

    image3: "02-grafico.png"

    subtitle4: "VISUALIZAÇÃO DE INSIGHTS E DASHBOARD NO POWER BI"

    content4: |
      Para democratizar os insights e transformá-los em ferramentas acionáveis para o RH e a liderança, foi construído um dashboard interativo em Power BI.

      <b>Criação de Medidas DAX:</b> Métricas-chave como Total Funcionários, Total Saídas e % Turnover foram calculadas e formatadas usando DAX.

      <b>Design do Dashboard:</b> Utilizando o Figma para prototipagem e o Power BI para a implementação, um dashboard de duas páginas foi desenvolvido com um design limpo e intuitivo, focado na experiência do usuário.

      <b>Telas do Dashboard:</b>
      - <b>Visão Geral:</b> Apresenta os KPIs principais, a rotatividade por departamento, o impacto das horas extras e a relação com o salário médio.

      - <b>Análise Preditiva e Plano de Ação:</b> Destaca os fatores preditivos mais importantes identificados pelo modelo de ML e propõe um plano de ação estratégico com recomendações específicas.


  - title: "RESULTADOS"
    icon: "fa-solid fa-chart-line"
    content: |
      O dashboard interativo em Power BI oferece uma visão profunda sobre a rotatividade de funcionários, transformando dados complexos em insights acionáveis para a tomada de decisão estratégica do RH.

      <b>Taxa de Rotatividade:</b> Identificação de uma taxa geral de 16.12%, com concentração significativa nos departamentos de Vendas (20.63%) e Recursos Humanos (19.05%).

      <b>Impacto de Horas Extras e Salário:</b> Mais de 53% das saídas vieram de funcionários que faziam horas extras. Além disso, o salário mensal médio dos que saíram era visivelmente menor.

      <b>Fatores Preditivos:</b> O modelo de ML destacou MonthlyIncome (salário), OverTime_Yes (horas extras), Age (idade) e TotalWorkingYears (total de anos trabalhados) como os principais influenciadores da rotatividade.
    
    image: "02_dashboard.gif"
    button-dashboard: "Veja o dashboard"
    button-dashboard-link: "https://app.powerbi.com/view?r=eyJrIjoiN2QzZjg5ODAtMjYzOS00ODZjLWE0YWYtYzFhYWViNDM2YzE3IiwidCI6Ijc1YjY4N2ZhLTZhYmItNDczZi04Y2QwLTc1MjUxZmJhMGE3MSJ9"

    subtitle2: "Plano de Ação Estratégico e Valor Gerado:"
    content2: |
      Com base nesses insights, foram elaboradas recomendações diretas para o RH:

      <b>Revisão Salarial:</b> Foco em garantir a competitividade de salários para cargos de entrada e em departamentos de alto risco.

      <b>Gestão da Carga de Trabalho:</b> Investigação e implementação de ações para mitigar as horas extras e promover o equilíbrio.

      <b>Retenção de Jovens Talentos:</b> Desenvolvimento de programas de mentoria e planos de carreira claros para funcionários em início de jornada.

      Este projeto permite que a empresa adote uma postura proativa, identificando funcionários em risco antes que saiam, otimizando investimentos em RH e criando um ambiente de trabalho mais sustentável.

    subtitle3: "DESAFIOS E APRENDIZADOS"

    content3: |
      Este projeto solidificou meu entendimento prático do ciclo de vida completo de um projeto de dados: desde o tratamento de um dataset desbalanceado (Python), passando pela engenharia de features e construção de um modelo preditivo com avaliação rigorosa, até a criação de um produto final de Business Intelligence com Power BI que gera valor e insights reais. O desafio de traduzir métricas de ML em recomendações claras foi superado, reforçando a importância da comunicação eficaz dos dados.

---
