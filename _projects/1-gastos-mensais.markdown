---

layout: pagina-projeto
title: Gastos Mensais
thumbnail: "01-thumbnail.png"
subtitle: Veja o estudo de caso
alt: Imagem ilustrativa do projeto
category: excel python powerbi pandas
hero_image: "01-fundo.jpg"
summary: "Transformando extratos bancários em insights acionáveis. Este projeto utiliza Python e Power BI para construir uma ferramenta de Business Intelligence que permite a visualização clara de padrões de gastos e a tomada de decisões financeiras mais inteligentes."
tools: "Pyhton, Pandas, Excel, Figma, Power BI"
source_code_url: "https://github.com/Pedro-Gutierre18/Controle-de-Gastos-Mensais"

sections:
  - title: "O Problema"
    icon: "fa-solid fa-triangle-exclamation"
    content: |
      Em um cenário de múltiplas transações diárias, o controle financeiro por meio de planilhas estáticas ou anotações manuais se mostra ineficiente e propenso a erros. A dificuldade em consolidar dados de diferentes fontes e a ausência de visualizações claras impedem uma análise aprofundada dos hábitos de consumo.

    image: "01-perguntas"
    
  - title: "O Processo"
    icon: "fa-solid fa-gears"
    content: |
      Para este projeto, foi adotado um fluxo de trabalho que combina a automação e a escalabilidade do Python com a flexibilidade do Excel para validação, refletindo um cenário de análise de dados do mundo real.


    subtitle2: "Extração e Processamento Automatizado com Python (ETL)"

    content2: |
      O ponto de partida foram dois arquivos CSV brutos, simulando extratos não tratados de transações e uma tabela de categorias. Para realizar a limpeza e o enriquecimento inicial desses dados de forma eficiente e replicável, foi desenvolvido um script em Python utilizando a biblioteca Pandas. As principais etapas automatizadas foram:

      <b>Limpeza de Dados:</b> Tratamento de inconsistências, como a remoção de IDs de categoria duplicados para garantir a integridade dos dados.

      <b>Transformação de Tipos de Dados:</b> Conversão da coluna de data, originalmente em formato de texto, para o tipo datetime, um passo crucial para permitir análises temporais e filtros cronológicos.

      <b>Enriquecimento de Dados com Merge:</b> A etapa mais crítica do processo de ETL, onde os dados de categorias (nome da categoria, subcategoria e tipo) foram unidos a cada transação correspondente através de um merge. Isso enriqueceu a base de dados transacional com o contexto necessário para a análise.

      Este script garante que a maior parte do trabalho de preparação de dados seja automatizada, tornando o processo rápido e menos suscetível a erros manuais no futuro.

    image2: "01-codigo.svg"

    subtitle3: "Validação e Enriquecimento Final no Excel"

    content3: |
      O arquivo pré-processado pelo Python foi então carregado no Excel para uma etapa final de controle de qualidade e enriquecimento manual. Nesta fase, realizei:

      Uma revisão detalhada para garantir a integridade e a coerência dos dados.

      A adição de um volume maior de dados fictícios para aumentar a robustez da base, criando um cenário mais realista e permitindo que insights mais significativos fossem extraídos no dashboard.

      O resultado desta etapa foi o arquivo dados_tratados.csv, uma base de dados final, limpa, enriquecida e validada, pronta para ser o alicerce da visualização.

    subtitle4: "Visualização e Análise no Power BI"

    content4: |
      Com a base de dados finalizada, a etapa seguinte foi a criação do dashboard no Power BI:

      <b>Carga e Modelagem:</b> O arquivo dados_tratados.csv foi importado para o Power BI.

      <b>Criação de Medidas com DAX:</b> Foram desenvolvidas medidas em DAX para calcular os principais indicadores de negócio (KPIs), como Renda Total, Despesa Total e Saldo Final. O uso de DAX permite que esses cálculos sejam dinâmicos e respondam interativamente aos filtros aplicados pelo usuário.

      <b>Desenvolvimento do Dashboard:</b> Foram criados diversos visuais para responder às perguntas de negócio definidas no início do projeto, incluindo KPIs, gráficos de barras, gráficos de linhas e tabelas detalhadas, todos interligados para permitir uma análise investigativa e multifacetada.


  - title: "Resultados"
    icon: "fa-solid fa-chart-line"
    content: |
      O dashboard interativo permitiu a extração de insights valiosos que não seriam facilmente visíveis em uma planilha estática:

      <b>Identificação dos Maiores Centros de Custo:</b> A análise por categoria revelou que "Moradia" é a despesa com maior gasto, representando 25% da renda total, que leve em consideração procurar um lugar com aluguel mais barato.

      <b>Análise de Tendências e Sazonalidade:</b> O gráfico de evolução temporal expôs um padrão claro de aumento nas despesas com "Lazer" durante os meses de férias (Julho e Dezembro), permitindo um planejamento financeiro proativo para esses períodos.

      <b>Padrões de Pagamento:</b> Foi observado que mais de 33% das despesas são realizadas com "Cartão de Crédito", o que, embora prático, destaca a necessidade de um acompanhamento rigoroso da fatura para evitar o endividamento e aproveitar programas de benefícios.
    
    image: "01-dashboard.gif"
    button-dashboard: "Veja o dashboard"
    button-dashboard-link: "https://app.powerbi.com/view?r=eyJrIjoiMTUxNDg2ZGYtYzRmOS00YTNjLThmYTQtMjY2NGVkYzllMTYyIiwidCI6Ijc1YjY4N2ZhLTZhYmItNDczZi04Y2QwLTc1MjUxZmJhMGE3MSJ9"

    subtitle2: "Desafios e Aprendizados"
    content2: |
      Este projeto solidificou meu entendimento prático do ciclo de vida completo de um projeto de dados: desde a extração e limpeza com Python (ETL), passando pela validação e enriquecimento, até a criação de um produto final de Business Intelligence com Power BI que gera valor e insights reais


---
