export type Language = 'pt' | 'en';

export type Project = {
  name: string;
  description: string;
  impact: string;
  status?: string;
  stack: string[];
  url: string;
};

export type AboutParagraph = string | Array<{ text: string; href?: string }>;

export type Content = {
  nav: {
    about: string;
    impact: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    title: string;
    roles: string[];
    summary: string;
    location: string;
    primaryCta: string;
    secondaryCta: string;
    githubCta: string;
    scrollHint: string;
  };
  about: {
    title: string;
    eyebrow: string;
    paragraphs: AboutParagraph[];
  };
  impact: {
    title: string;
    subtitle: string;
    items: Array<{ value: string; label: string }>;
  };
  skills: {
    title: string;
    subtitle: string;
    subtitleByGroup?: Record<string, string>;
    groups: Array<{ title: string; items: string[] }>;
  };
  experience: {
    title: string;
    subtitle: string;
    detailsHint: string;
    roles: Array<{
      company: string;
      role: string;
      period: string;
      bullets: string[];
    }>;
  };
  projects: {
    title: string;
    subtitle: string;
    repositoryAriaLabel: string;
    items: Project[];
  };
  education: {
    title: string;
    subtitle?: string;
    items: Array<{ degree: string; institution: string; period: string; note?: string; highlight?: string }>;
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
  };
};

const links = {
  email: 'mailto:wagner.inacio.dev@gmail.com',
  github: 'https://github.com/wagner-inacio',
  linkedin: 'https://www.linkedin.com/in/wagner-inacio-de-oliveira/',
};

export const profileLinks = links;

export const content: Record<Language, Content> = {
  pt: {
    nav: {
      about: 'Sobre',
      impact: 'Resultados',
      skills: 'Habilidades',
      experience: 'Experiência',
      projects: 'Projetos',
      education: 'Formação',
      contact: 'Contato',
    },
    hero: {
      eyebrow: 'Engenharia de Dados • Analytics & ML • Arquitetura & DataOps',
      name: 'Wagner Oliveira',
      title: 'Engenheiro de Dados & Analytics',
      roles: ['Engenheiro de Dados & Analytics'],
      summary:
        'Construo pipelines, aplicações e produtos analíticos de dados que conectam engenharia, negócio e tomada de decisão.',
      location: 'São Paulo, Brasil',
      primaryCta: 'LinkedIn',
      secondaryCta: 'Email',
      githubCta: 'GitHub',
      scrollHint: 'Role para conhecer a trajetória',
    },
    about: {
      eyebrow: 'Sobre mim',
      title: 'Quem sou eu?',
      paragraphs: [
        [
          {
            text: 'Minha relação com tecnologia começou ainda na infância, antes mesmo de eu entender exatamente o que ela significava. Cresci na zona rural de ',
          },
          {
            text: 'Espigão d’Oeste',
            href: 'https://pt.wikipedia.org/wiki/Espig%C3%A3o_d%27Oeste',
          },
          {
            text: ', no interior de Rondônia, em uma realidade onde o acesso à tecnologia era limitado, mas a curiosidade sempre esteve presente. Antes de ter um computador de verdade, eu tentava imaginar e construir os meus com pedaços de cerâmica que sobravam das construções do meu pai. Na época, era brincadeira e imaginação; hoje, vejo que já existia ali uma vontade de entender como as coisas funcionavam e criar algo a partir do que eu tinha disponível.',
          },
        ],
        'Com o tempo, essa curiosidade se tornou caminho. Foi por meio da tecnologia que ampliei possibilidades, saí de um contexto distante dos grandes centros e oportunidades, estudei Engenharia de Software na Universidade Federal do Pampa e construí minha trajetória profissional na área de dados e tecnologia. Nesse percurso, entendi o impacto da tecnologia não apenas como ferramenta técnica, mas como meio para abrir caminhos, resolver problemas e transformar realidades.',
        'Meu interesse por dados nasceu em uma aula de introdução à análise de dados, ao trabalhar com datasets e ferramentas para transformar informação bruta em algo estruturado, visual e compreensível. Na época, analisei indicadores de violência doméstica no Rio Grande do Sul e foi ali que percebi como dados bem trabalhados podem revelar padrões e dar clareza sobre diferentes contextos.',
        'Hoje, atuo como Engenheiro de Dados & Analytics, combinando base em engenharia de software com experiência em ciência de dados, analytics e produtos de dados. Este portfólio reúne um pouco da minha trajetória e projetos que refletem minha evolução técnica, minha curiosidade e minha forma de enxergar tecnologia e dados como instrumentos para estruturar problemas, gerar informação confiável e construir soluções com impacto.',
      ],
    },
    impact: {
      title: 'Resultados práticos',
      subtitle:
        'Exemplos de atuação prática em automação, sustentação de pipelines, produtos analíticos e soluções de dados em ambientes corporativos.',
      items: [
        {
          value: '12h → 40min',
          label: 'Automação de rotina preditiva semanal em Databricks.',
        },
        {
          value: 'Pipelines críticos',
          label: 'Sustentação de esteiras e indicadores usados em ciclos executivos na maior empresa de alimentos do mundo.',
        },
        {
          value: 'Produtos de dados',
          label: 'Bases analíticas, Data Marts e contratos de dados para áreas de negócio.',
        },
        {
          value: 'Software + Dados',
          label: 'Base em engenharia de software aplicada à construção de soluções de dados.',
        },
      ],
    },
    skills: {
      title: 'Tecnologias e ferramentas',
      subtitle:
        'Principais tecnologias e ferramentas que utilizo para construir, operar e evoluir pipelines, plataformas e produtos de dados.',
      subtitleByGroup: {
        LINGUAGENS: 'Linguagens de uso diário em engenharia e análise',
        'PROCESSAMENTO DE DADOS': 'Pipelines, transformação e processamento distribuído',
        'ARQUITETURA DE DADOS': 'Modelagem e organização de plataformas analíticas',
        'AZURE & PLATAFORMAS': 'Serviços de dados e analytics em ecossistema Azure',
        'CLOUD AWS': 'Serviços para ingestão, processamento e operação em cloud',
        'DEVOPS & DATAOPS': 'Versionamento, automação, APIs e entrega contínua',
      },
      groups: [
        {
          title: 'LINGUAGENS',
          items: ['Python', 'SQL', 'PySpark', 'JavaScript', 'Java', 'C#'],
        },
        {
          title: 'PROCESSAMENTO DE DADOS',
          items: ['Apache Spark', 'Databricks', 'ETL/ELT', 'Pipelines batch e streaming', 'Apache Kafka', 'Delta Lake', 'DBT'],
        },
        {
          title: 'ARQUITETURA DE DADOS',
          items: ['Data Lake', 'Data Warehouse', 'Data Lakehouse', 'Data Marts', 'Data Mesh', 'Contratos de Dados'],
        },
        {
          title: 'AZURE & PLATAFORMAS',
          items: ['Azure Data Factory', 'Azure Synapse', 'Azure Data Lake Storage', 'Unity Catalog', 'Power BI'],
        },
        {
          title: 'CLOUD AWS',
          items: ['S3', 'Glue', 'Athena', 'Lambda', 'Step Functions', 'Kinesis', 'Lake Formation', 'RDS', 'EC2', 'EventBridge', 'SNS'],
        },
        {
          title: 'DEVOPS & DATAOPS',
          items: ['Git', 'GitHub', 'Azure DevOps', 'Docker', 'Docker Compose', 'CI/CD', 'APIs REST', 'Postman'],
        },
      ],
    },
    experience: {
      title: 'Experiência profissional',
      subtitle: 'Da engenharia de software ao desenho e sustentação de plataformas analíticas modernas.',
      detailsHint: 'ver detalhes',
      roles: [
        {
          company: 'Nestlé',
          role: 'Engenheiro de Dados & Analytics',
          period: 'Jan/2025 - Atual',
          bullets: [
            'Responsável técnico por esteiras de dados que sustentam produtos analíticos, indicadores executivos e modelos de machine learning.',
            'Construção e evolução de pipelines batch em Databricks e Azure, da ingestão à disponibilização em catálogos de dados.',
            'Arquitetura de Data Lake e Data Lakehouse com foco em governança, rastreabilidade, performance e qualidade.',
            'Implementação de data marts, contratos de dados, validações e releases alinhando engenharia, ciência de dados e negócio.',
          ],
        },
        {
          company: 'Nestlé',
          role: 'Cientista de Dados',
          period: 'Jan/2023 - Dez/2024',
          bullets: [
            'Automatização do processo preditivo semanal de vendas Sell Out em Databricks, reduzindo processamento de cerca de 12 horas para 40 minutos.',
            'Desenvolvimento de modelos preditivos, classificação de mix de produtos, análises estatísticas e testes de hipótese.',
            'Produtização e sustentação de modelos com práticas de MLOps, MLflow, versionamento de experimentos e monitoramento.',
          ],
        },
        {
          company: 'Lydians',
          role: 'Engenheiro de Software',
          period: 'Fev/2022 - Dez/2022',
          bullets: [
            'Desenvolvimento de soluções para backoffice bancário, atuando em front-end, back-end, APIs e camada de dados.',
            'Manutenção e evolução de aplicações com C#, ASP.NET, .NET, JavaScript, SQL Server e Entity Framework.',
            'Modernização de produtos financeiros, refatoração, correção de bugs, testes de APIs e code reviews.',
          ],
        },
      ],
    },
    projects: {
      title: 'Projetos',
      subtitle:
        'Alguns projetos que venho desenvolvendo para aprofundar minha prática em Engenharia de Dados, Analytics Engineering, Cloud, streaming e arquitetura de dados.',
      repositoryAriaLabel: 'Abrir repositório no GitHub',
      items: [
        {
          name: 'Cloud ETL Pipeline com Spark e AWS',
          description:
            'Pipeline de integração entre Amazon S3, Apache Spark e AWS RDS PostgreSQL, com leitura em camada Bronze, processamento distribuído e persistência via JDBC.',
          impact: 'Integra cloud storage, Spark e banco relacional em uma arquitetura de dados aplicada.',
          status: 'Projeto aplicado',
          stack: ['AWS S3', 'RDS', 'PySpark', 'Spark JDBC', 'boto3', 'Parquet'],
          url: 'https://github.com/wagner-inacio/s3-spark-rds-etl-pipeline',
        },
        {
          name: 'Medallion Pipeline para Indicadores Econômicos',
          description:
            'Pipeline em arquitetura medalhão para ingestão, padronização, validação e organização de indicadores públicos do BACEN e IBGE.',
          impact: 'Demonstra organização Bronze/Silver/Gold, validação de dados e catálogo técnico.',
          status: 'Case técnico',
          stack: ['Python', 'Pandas', 'Pandera', 'Requests', 'YAML', 'Loguru'],
          url: 'https://github.com/wagner-inacio/pipeline-indicadores-economicos',
        },
        {
          name: 'Spotify Analytics Engineering com DBT',
          description:
            'Projeto de Analytics Engineering com dados da Spotify API, estruturando modelos analíticos e transformações para consumo em Data Warehouse.',
          impact: 'Explora modelagem analítica, organização de camadas e boas práticas com DBT.',
          status: 'Analytics Engineering',
          stack: ['Python', 'dbt', 'Analytics Engineering', 'Spotify API', 'Data Warehouse'],
          url: 'https://github.com/wagner-inacio/dbt-spotify-analytics',
        },
        {
          name: 'Weather Data Pipeline na AWS',
          description:
            'Pipeline para ingestão, transformação e organização de dados meteorológicos em ambiente AWS, com processamento batch e evolução para streaming.',
          impact: 'Trabalha arquitetura cloud, camadas de dados e transformação governada.',
          status: 'Cloud Data Engineering',
          stack: ['AWS Glue', 'Silver Layer', 'Python', 'ETL', 'Data Lake'],
          url: 'https://github.com/wagner-inacio/weather-data-glue-transformations',
        },
        {
          name: 'Event-Driven Data Pipeline com Kafka',
          description:
            'Projeto em evolução para demonstrar pipelines orientados a eventos com Apache Kafka, Python, Docker e Spark Structured Streaming.',
          impact: 'Explora mensageria, streaming e processamento contínuo de dados.',
          status: 'Em evolução',
          stack: ['Apache Kafka', 'Python', 'Streaming', 'Event-Driven Architecture'],
          url: 'https://github.com/wagner-inacio/apache-kafka',
        },
      ],
    },
    education: {
      title: 'Formação',
      subtitle: 'Base acadêmica e formações que sustentam minha trajetória em tecnologia, dados e negócio.',
      items: [
        {
          degree: 'MBA em Ciência de Dados & Analytics',
          institution: 'USP/ESALQ',
          period: 'Mai/2024 - Dez/2026',
        },
        {
          degree: 'Bacharelado em Engenharia de Software',
          institution: 'Universidade Federal do Pampa - UNIPAMPA',
          period: 'Mar/2018 - Dez/2022',
          note:
            'Reconhecimento como Estudante Destaque pela Sociedade Brasileira de Computação (SBC) durante a graduação em Engenharia de Software, concedido ao aluno com melhor desempenho acadêmico da turma e participação ativa em projetos acadêmicos, pesquisa e extensão.',
          highlight: 'Estudante Destaque SBC',
        },
        {
          degree: 'Curso Profissionalizante em Serviços de Vendas',
          institution: 'Senac RS',
          period: 'Fev/2018 - Jan/2020',
        },
      ],
    },
    contact: {
      title: 'Vamos conversar?',
      subtitle:
        'Aberto a oportunidades e conversas sobre Engenharia de Dados, Analytics Engineering, plataformas de dados e soluções que conectam tecnologia, dados e negócio.',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
  },
  en: {
    nav: {
      about: 'About',
      impact: 'Results',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Data Engineering • Analytics & ML • Data Architecture & DataOps',
      name: 'Wagner Oliveira',
      title: 'Data & Analytics Engineer',
      roles: ['Data & Analytics Engineer', 'Data Engineer', 'Analytics Engineer'],
      summary:
        'I build pipelines, applications and analytical data products that connect engineering, business and decision-making.',
      location: 'Sao Paulo, Brazil',
      primaryCta: 'LinkedIn',
      secondaryCta: 'Email',
      githubCta: 'GitHub',
      scrollHint: 'Scroll to explore the trajectory',
    },
    about: {
      eyebrow: 'About',
      title: 'Who am I?',
      paragraphs: [
        'My relationship with technology started long before I fully understood what it was. I grew up in Espigão d’Oeste, Rondônia, in a reality closely connected to rural life, where access to technology was limited but always meaningful. Even before I had access to a real computer, I tried to build my own using leftover materials from my father’s construction work. At the time it was imagination and curiosity; today I see there was already a desire to understand how things worked, connect pieces and create something from what I had available.',
        'Over time, that curiosity became more than fascination; it became a path. Technology helped me expand possibilities, move from a context far from large technology centers, study Software Engineering at the Federal University of Pampa and build a professional career in the field. That was when I understood, in a very concrete way, the impact technology can have: not only as a technical tool, but as something capable of opening paths, changing realities and taking people, ideas and organizations to places that once felt distant.',
        'Today, I work as a Data & Analytics Engineer, combining a software engineering foundation with experience in data science, analytics, data products and business-oriented solutions. I am especially drawn to data because it connects technology with context, decision-making and impact. This portfolio brings together projects, studies and experiments that reflect my evolution, curiosity and way of seeing technology as a bridge between reality, opportunity and transformation.',
      ],
    },
    impact: {
      title: 'Practical results',
      subtitle:
        'Examples of practical work in automation, pipeline operation, analytics products and data solutions in enterprise environments.',
      items: [
        {
          value: '12h → 40min',
          label: 'Weekly predictive routine automation in Databricks.',
        },
        {
          value: 'Critical pipelines',
          label: 'Operation of data pipelines and indicators used in executive business cycles at the world’s largest food company.',
        },
        {
          value: 'Data products',
          label: 'Analytical datasets, Data Marts and data contracts for business areas.',
        },
        {
          value: 'Software + Data',
          label: 'Software engineering foundation applied to data solution development.',
        },
      ],
    },
    skills: {
      title: 'Technologies & tools',
      subtitle:
        'Core technologies and tools I use to build, operate and evolve data pipelines, platforms and products.',
      subtitleByGroup: {
        LANGUAGES: 'Daily languages for engineering and analysis',
        'DATA PROCESSING': 'Pipelines, transformation and distributed processing',
        'DATA ARCHITECTURE': 'Modeling and organization of analytical platforms',
        'AZURE & PLATFORMS': 'Data and analytics services in the Azure ecosystem',
        'CLOUD AWS': 'Services for ingestion, processing and cloud operations',
        'DEVOPS & DATAOPS': 'Versioning, automation, APIs and continuous delivery',
      },
      groups: [
        {
          title: 'LANGUAGES',
          items: ['Python', 'SQL', 'PySpark', 'JavaScript', 'Java', 'C#'],
        },
        {
          title: 'DATA PROCESSING',
          items: ['Apache Spark', 'Databricks', 'ETL/ELT', 'Batch and streaming pipelines', 'Apache Kafka', 'Delta Lake', 'DBT'],
        },
        {
          title: 'DATA ARCHITECTURE',
          items: ['Data Lake', 'Data Warehouse', 'Data Lakehouse', 'Data Marts', 'Data Mesh', 'Data Contracts'],
        },
        {
          title: 'AZURE & PLATFORMS',
          items: ['Azure Data Factory', 'Azure Synapse', 'Azure Data Lake Storage', 'Unity Catalog', 'Power BI'],
        },
        {
          title: 'CLOUD AWS',
          items: ['S3', 'Glue', 'Athena', 'Lambda', 'Step Functions', 'Kinesis', 'Lake Formation', 'RDS', 'EC2', 'EventBridge', 'SNS'],
        },
        {
          title: 'DEVOPS & DATAOPS',
          items: ['Git', 'GitHub', 'Azure DevOps', 'Docker', 'Docker Compose', 'CI/CD', 'REST APIs', 'Postman'],
        },
      ],
    },
    experience: {
      title: 'Professional experience',
      subtitle: 'From software engineering to the design and operation of modern analytics platforms.',
      detailsHint: 'view details',
      roles: [
        {
          company: 'Nestle',
          role: 'Data & Analytics Engineer',
          period: 'Jan/2025 - Present',
          bullets: [
            'Technical owner of data workflows supporting analytics products, executive indicators and machine learning models.',
            'Built and evolved batch pipelines in Databricks and Azure, from ingestion to data catalog delivery.',
            'Designed Data Lake and Data Lakehouse models focused on governance, traceability, performance and quality.',
            'Implemented data marts, data contracts, validations and releases across engineering, data science and business teams.',
          ],
        },
        {
          company: 'Nestle',
          role: 'Data Scientist',
          period: 'Jan/2023 - Dec/2024',
          bullets: [
            'Automated the weekly Sell Out sales predictive process in Databricks, reducing processing time from around 12 hours to 40 minutes.',
            'Developed predictive models, product mix classification, statistical analyses and hypothesis testing.',
            'Productionized and maintained models with MLOps practices, MLflow, experiment versioning and monitoring.',
          ],
        },
        {
          company: 'Lydians',
          role: 'Software Engineer',
          period: 'Feb/2022 - Dec/2022',
          bullets: [
            'Built solutions for banking backoffice products across front-end, back-end, APIs and data layers.',
            'Maintained and evolved applications with C#, ASP.NET, .NET, JavaScript, SQL Server and Entity Framework.',
            'Modernized financial products through refactoring, bug fixing, API testing and code reviews.',
          ],
        },
      ],
    },
    projects: {
      title: 'Projects',
      subtitle:
        'Some projects I have been developing to deepen my practice in Data Engineering, Analytics Engineering, Cloud, streaming and data architecture.',
      repositoryAriaLabel: 'Open repository on GitHub',
      items: [
        {
          name: 'Cloud ETL Pipeline with Spark and AWS',
          description:
            'Integration pipeline connecting Amazon S3, Apache Spark and AWS RDS PostgreSQL, with Bronze layer ingestion, distributed processing and JDBC persistence.',
          impact: 'Integrates cloud storage, Spark and relational databases in an applied data architecture.',
          status: 'Applied project',
          stack: ['AWS S3', 'RDS', 'PySpark', 'Spark JDBC', 'boto3', 'Parquet'],
          url: 'https://github.com/wagner-inacio/s3-spark-rds-etl-pipeline',
        },
        {
          name: 'Medallion Pipeline for Economic Indicators',
          description:
            'Medallion architecture pipeline for ingesting, standardizing, validating and organizing public indicators from BACEN and IBGE.',
          impact: 'Demonstrates Bronze/Silver/Gold organization, data validation and technical cataloging.',
          status: 'Technical case',
          stack: ['Python', 'Pandas', 'Pandera', 'Requests', 'YAML', 'Loguru'],
          url: 'https://github.com/wagner-inacio/pipeline-indicadores-economicos',
        },
        {
          name: 'Spotify Analytics Engineering with DBT',
          description:
            'Analytics Engineering project using Spotify API data, structuring analytical models and transformations for Data Warehouse consumption.',
          impact: 'Explores analytical modeling, layered organization and DBT best practices.',
          status: 'Analytics Engineering',
          stack: ['Python', 'dbt', 'Analytics Engineering', 'Spotify API', 'Data Warehouse'],
          url: 'https://github.com/wagner-inacio/dbt-spotify-analytics',
        },
        {
          name: 'Weather Data Pipeline on AWS',
          description:
            'Pipeline for ingesting, transforming and organizing weather data in AWS, with batch processing and evolution toward streaming.',
          impact: 'Works with cloud architecture, data layers and governed transformations.',
          status: 'Cloud Data Engineering',
          stack: ['AWS Glue', 'Silver Layer', 'Python', 'ETL', 'Data Lake'],
          url: 'https://github.com/wagner-inacio/weather-data-glue-transformations',
        },
        {
          name: 'Event-Driven Data Pipeline with Kafka',
          description:
            'Project in evolution to demonstrate event-driven pipelines with Apache Kafka, Python, Docker and Spark Structured Streaming.',
          impact: 'Explores messaging, streaming and continuous data processing.',
          status: 'In progress',
          stack: ['Apache Kafka', 'Python', 'Streaming', 'Event-Driven Architecture'],
          url: 'https://github.com/wagner-inacio/apache-kafka',
        },
      ],
    },
    education: {
      title: 'Education',
      subtitle: 'Academic background and programs supporting my journey across technology, data and business.',

      items: [
        {
          degree: 'MBA in Data Science & Analytics',
          institution: 'USP/ESALQ',
          period: 'May/2024 - Dec/2026',
        },
        {
          degree: 'Bachelor in Software Engineering',
          institution: 'Federal University of Pampa - UNIPAMPA',
          period: 'Mar/2018 - Dec/2022',
          note:
            'Recognized as a Distinguished Student by the Brazilian Computer Society (SBC) during the Software Engineering degree, awarded to the student with the best academic performance in the class and active participation in academic projects, research and extension activities.',
          highlight: 'Distinguished Student SBC',
        },
        {
          degree: 'Professional Course in Sales Services',
          institution: 'Senac RS',
          period: 'Feb/2018 - Jan/2020',
        },
      ],
    },
    contact: {
      title: 'Let’s connect?',
      subtitle:
        'Open to opportunities and conversations about Data Engineering, Analytics Engineering, data platforms and solutions that connect technology, data and business.',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
  },
};
