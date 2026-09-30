import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region app/content.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var services = [
	{
		code: "01",
		title: "Projetos de crédito rural",
		text: "Estruturação técnica e financeira para custeio, investimento, modernização e expansão da atividade."
	},
	{
		code: "02",
		title: "Assessoria técnica rural",
		text: "Orientação aplicada à pecuária, agricultura, pastagens, infraestrutura e melhorias produtivas."
	},
	{
		code: "03",
		title: "Análise e enquadramento",
		text: "Leitura do perfil do produtor para identificar linhas compatíveis com a finalidade e a capacidade de pagamento."
	},
	{
		code: "04",
		title: "Organização documental",
		text: "Conferência de cadastros, documentos, garantias, orçamentos e informações da propriedade."
	},
	{
		code: "05",
		title: "Laudos e pareceres",
		text: "Peças técnicas claras e consistentes para fundamentar a proposta e responder às exigências da operação."
	},
	{
		code: "06",
		title: "Acompanhamento bancário",
		text: "Suporte durante a análise e atendimento às solicitações da instituição financeira até a conclusão do processo."
	}
];
var process = [
	[
		"01",
		"Diagnóstico",
		"Entendemos sua atividade, seu objetivo e o investimento que precisa realizar."
	],
	[
		"02",
		"Estratégia",
		"Avaliamos o enquadramento e organizamos a estrutura técnica e financeira."
	],
	[
		"03",
		"Projeto",
		"Preparamos a proposta, conferimos documentos e reunimos os orçamentos."
	],
	[
		"04",
		"Acompanhamento",
		"Apoiamos você durante a análise e nas eventuais solicitações do agente financeiro."
	]
];
var faqs = [
	["Preciso saber qual linha de crédito escolher?", "Não. O atendimento começa pelo seu objetivo. A partir do diagnóstico, avaliamos as alternativas compatíveis com seu perfil e sua atividade."],
	["Quais documentos são necessários para começar?", "Normalmente iniciamos com documentos pessoais, informações da atividade e da propriedade e uma descrição do investimento. A lista completa varia conforme a linha e a instituição."],
	["A contratação do crédito é garantida?", "Não. A aprovação é decisão da instituição financeira e depende da análise cadastral, técnica, financeira, das garantias e das regras vigentes. Nosso trabalho é construir uma proposta consistente e acompanhar o processo."],
	["A AC acompanha o projeto no banco?", "Sim. A assessoria inclui suporte durante a análise e na organização das respostas e complementações solicitadas pelo agente financeiro."],
	["Qual é a área de atendimento?", "A AC Consultoria atende produtores rurais em Novo Progresso/PA."]
];
//#endregion
//#region app/credit-catalog.ts
var bndes = "https://www.bndes.gov.br/wps/portal/site/home/financiamento/produto/";
var basa = "https://www.bancoamazonia.com.br";
var bb = "https://www.bb.com.br/site/agronegocios/";
var caixa = "https://www.caixa.gov.br/agro/";
var sicoob = "https://www.sicoob.com.br/web/sicoobcredisul/grande-produtor";
var sicredi = "https://www.sicredi.com.br/site/safra/";
var santander = "https://www.santander.com.br/empresas/agronegocio";
var row = (purpose, rate, note, term, grace) => ({
	purpose,
	rate,
	note,
	term,
	grace
});
var program = (id, label, category, description, rate, term, grace, eligibility, source, rows, notice) => ({
	id,
	label,
	category,
	description,
	rate,
	term,
	grace,
	eligibility,
	source,
	rows,
	notice
});
var consult = (id, label, category, description, source, purposes, eligibility = "Sujeito à finalidade, ao perfil do produtor e à disponibilidade na instituição.") => program(id, label, category, description, "Sob consulta", "Conforme operação", "Conforme operação", eligibility, source, purposes.map((p) => row(p, "Sob consulta", "Taxa e calendário definidos na análise da proposta.")));
var creditPrograms = [
	program("pronaf-custeio", "PRONAF Custeio", "Custeio", "Despesas da lavoura e da criação durante o ciclo produtivo.", "1% a 7,5% a.a.", "Conforme atividade", "Conforme ciclo", "Agricultura familiar com CAF e enquadramento no Pronaf.", bndes + "pronaf-custeio", [
		row("Bezerras e bezerros para recria / engorda", "Até 7,5% a.a.", "Bovinocultura de corte; animais para reprodução são investimento.", "Recria extensiva: até 12 meses"),
		row("Soja e algodão", "Até 7,5% a.a.", "Custeio das culturas previstas na regra."),
		row("Produtos da biodiversidade", "Até 1% a.a.", "Cultivos enquadrados na finalidade específica."),
		row("Demais cultivos até R$ 28 mil e custeio pecuário elegível", "Até 2% a.a.", "Respeitadas as exceções, incluindo bovinocultura de corte."),
		row("Milho acima de R$ 28 mil e demais atividades", "Até 5,5% a.a.", "Quando não enquadrados nas outras faixas.")
	]),
	program("pronaf-mais", "PRONAF Mais Alimentos", "Investimento", "Estrutura, equipamentos e expansão da unidade familiar.", "1,5% a 7,5% a.a.", "Até 10 anos", "Até 3 anos", "CAF ativo, projeto e enquadramento por renda e finalidade.", bndes + "PRONAF-mais-alimentos", [
		row("Aquisição de matrizes e reprodutores", "Até 7,5% a.a.", "Regra geral para aquisição isolada; comprovar estrutura e alimentação.", "Até 8 anos", "Até 3 anos"),
		row("Tratores, colheitadeiras e máquinas autopropelidas", "Até 5% a.a.", "Observar os itens elegíveis.", "Até 7 anos", "Até 1 ano"),
		row("Máquinas e equipamentos — faixa especial", "Até 1,5% a.a.", "Renda familiar inferior a R$ 150 mil; crédito até R$ 120 mil."),
		row("Ordenhadeiras, resfriadores, aquicultura e cultivo protegido", "Até 2% a.a.", "Itens específicos relacionados na norma.", "Até 10 anos", "Até 3 anos"),
		row("Silos, câmaras frias e conectividade", "Até 2% a.a.", "Finalidades elegíveis na linha."),
		row("Outras estruturas e finalidades", "Até 7,5% a.a.", "Recuperação de pastagens pode ser avaliada no Pronaf Bioeconomia.")
	]),
	program("pronaf-bio", "PRONAF Bioeconomia", "Investimento", "Investimentos ambientais e produção rural sustentável.", "2% ou 7,5% a.a.", "Até 10 a 20 anos", "Até 3 a 8 anos", "Agricultura familiar; a finalidade e o projeto determinam o prazo.", bndes + "pronaf-bioeconomia", [
		row("Recuperação / formação de pastagens", "Até 2% a.a.", "Pastagens, capineiras e outras forrageiras enquadradas.", "Até 10 anos", "Até 3 anos"),
		row("Energia solar, água e irrigação", "Até 2% a.a.", "Sistemas e equipamentos elegíveis para a propriedade."),
		row("Solo, adequação ambiental e sistemas agroflorestais", "Até 2% a.a.", "Conservação e recuperação previstas no projeto."),
		row("Silvicultura", "Até 7,5% a.a.", "Formação ou manutenção de povoamentos florestais.")
	]),
	program("pronaf-mulher", "PRONAF Mulher", "Investimento", "Projetos produtivos conduzidos por agricultoras familiares.", "Conforme renda e item", "Até 10 anos", "Até 3 anos", "Mulher integrante da unidade familiar enquadrada no Pronaf. Grupos A, A/C e B têm regras próprias.", bndes + "pronaf-mulher", [
		row("Máquinas — faixa especial de renda", "Até 1,5% a.a.", "Renda inferior a R$ 150 mil e superior ao Grupo B; limite de R$ 120 mil."),
		row("Pastagens, água e outras finalidades específicas", "Até 2% a.a.", "Observar a relação de finalidades e as condições de renda."),
		row("Tratores e máquinas autopropelidas", "Até 5% a.a.", "Conforme enquadramento na finalidade."),
		row("Demais projetos", "Até 7,5% a.a.", "Pode haver faixa de 2% por renda e condições especiais.")
	]),
	program("pronaf-agroecologia", "PRONAF Agroecologia", "Investimento", "Implantação e ampliação de sistemas orgânicos ou agroecológicos.", "Até 2% a.a.", "Até 10 anos", "Até 3 anos", "CAF e projeto compatível com produção orgânica ou agroecológica.", bndes + "pronaf-agroecologia", [row("Sistemas orgânicos e agroecológicos", "Até 2% a.a.", "Estrutura produtiva, equipamentos e implantação; prazo varia por item.")]),
	program("pronaf-jovem", "PRONAF Jovem", "Investimento", "Estrutura e modernização de empreendimentos de jovens agricultores.", "Até 2% a.a.", "Até 10 anos", "Até 3 anos; exceções até 5", "Jovem de 16 a 29 anos, CAF e requisitos de formação ou orientação técnica.", bndes + "pronaf-jovem", [row("Projeto produtivo do jovem rural", "Até 2% a.a.", "Até R$ 50 mil, com demais condições da norma.")]),
	program("pronaf-agroindustria", "PRONAF Agroindústria", "Investimento", "Beneficiamento e processamento da produção familiar.", "Até 7,5% a.a.", "Até 10 anos", "Até 3 anos", "Empreendimentos familiares e cooperativas enquadrados na linha.", bndes + "pronaf-agroindustria", [row("Beneficiamento, armazenagem e agroindústria", "Até 7,5% a.a.", "Equipamentos, obras e modernização; caminhonetes possuem prazo específico."), row("Giro associado ao investimento", "Até 7,5% a.a.", "Limitado a 35% do financiamento de investimento.")]),
	program("pronamp-custeio", "PRONAMP Custeio", "Custeio", "Despesas do ciclo produtivo do médio produtor.", "Até 9% a.a.", "Conforme ciclo", "Conforme ciclo", "Renda bruta anual até R$ 3,5 milhões e, no mínimo, 80% de origem agropecuária.", bndes + "pronamp-investimento", [row("Lavouras, insumos e manejo", "Até 9% a.a.", "Limite de custeio até R$ 1,5 milhão por ano agrícola."), row("Recria, engorda e custeio pecuário", "Até 9% a.a.", "Recria extensiva: até 12 meses; recria e engorda na mesma operação: até 20 meses.")]),
	program("pronamp-investimento", "PRONAMP Investimento", "Investimento", "Instalações, pastagens e modernização do médio produtor.", "Até 9% a.a.", "Até 8 anos", "Até 2 anos", "Enquadramento no Pronamp e investimento relacionado à atividade produtiva.", bndes + "pronamp-investimento", [row("Pastagens, instalações e lavouras permanentes", "Até 9% a.a.", "Limite individual de R$ 600 mil por ano agrícola."), row("Irrigação e equipamentos elegíveis", "Até 9% a.a.", "Máquinas isoladas elegíveis no Moderfrota não entram nesta linha.")]),
	program("moderfrota", "Moderfrota", "Investimento", "Aquisição de máquinas agrícolas novas ou usadas elegíveis.", "11,5% ou 12,5% a.a.", "Novos: 7 anos; usados: 4", "Primeira parcela até 14 meses", "Bens elegíveis e comprovação dos requisitos para máquinas usadas.", bndes + "moderfrota/", [row("Máquinas para produtor enquadrado no Pronamp", "Até 11,5% a.a.", "Participação de até 100%."), row("Demais produtores e cooperativas elegíveis", "Até 12,5% a.a.", "Receita anual até R$ 45 milhões; participação de até 85%.")]),
	program("renovagro", "RenovAgro", "Investimento", "Recuperação produtiva e redução do impacto ambiental da atividade.", "8,5% ou 9,5% a.a.", "Até 10 ou 12 anos", "Até 5 ou 8 anos", "Projeto técnico e finalidade enquadrada no programa.", bndes + "renovagro/", [
		row("Recuperação de pastagens degradadas", "Até 8,5% a.a.", "Subprograma Recuperação e Conversão.", "Até 10 anos", "Até 5 anos"),
		row("Adequação ambiental, APP e reserva legal", "Até 8,5% a.a.", "Projetos do RenovAgro Ambiental."),
		row("Integração, energia renovável e demais finalidades", "Até 9,5% a.a.", "Respeitar os limites para itens associados.")
	]),
	program("pca", "PCA — Armazéns", "Investimento", "Construção, ampliação e modernização da armazenagem.", "8% ou 9,5% a.a.", "Até 10 anos", "Até 2 anos", "Produtores e cooperativas; a capacidade da unidade determina a taxa.", bndes + "pca", [row("Armazenagem de grãos até 12 mil toneladas", "Até 8% a.a.", "Capacidade da unidade armazenadora."), row("Demais empreendimentos de armazenagem", "Até 9,5% a.a.", "Conforme enquadramento do projeto.")]),
	program("inovagro", "Inovagro", "Investimento", "Tecnologia, modernização e melhoria da produção agropecuária.", "Até 11,5% a.a.", "Até 10 anos", "Até 2 anos", "Produtor ou cooperativa com projeto elegível e documentação técnica.", bndes + "inovagro", [row("Modernização, equipamentos e estruturas elegíveis", "Até 11,5% a.a.", "Até 10 anos, conforme projeto."), row("Matrizes e reprodutores nas atividades elegíveis", "Até 11,5% a.a.", "Bovinos/bubalinos leiteiros, ovinos e caprinos; regras específicas.", "Até 5 anos")]),
	program("proirriga", "Proirriga", "Investimento", "Irrigação, cultivo protegido e monitoramento climático.", "Até 11,5% a.a.", "Até 8 anos", "Até 1 ano", "Produtores e cooperativas com equipamentos e projeto elegíveis.", bndes + "proirriga", [row("Sistemas de irrigação e infraestrutura associada", "Até 11,5% a.a.", "Água, elétrica, equipamentos e monitoramento."), row("Cultivo protegido e proteção de culturas", "Até 11,5% a.a.", "Instalações enquadradas no programa.")]),
	program("prodecoop", "Prodecoop", "Cooperativas", "Modernização industrial e produtiva de cooperativas.", "Até 12% a.a.", "Até 10 anos", "Até 2 anos", "Cooperativas de produção; participação de até 90% do projeto.", bndes + "prodecoop", [row("Agroindústria, armazenagem e processamento", "Até 12% a.a.", "Obras, equipamentos e modernização produtiva."), row("Capital de giro associado", "Até 12% a.a.", "Até 30% do valor financiado.")]),
	program("procap", "Procap-Agro Giro", "Cooperativas", "Capital de giro para a operação de cooperativas agropecuárias.", "Até 12% a.a.", "Até 18 meses", "Até 6 meses", "Cooperativas e demais entidades enquadradas no programa.", bndes + "procap-agro", [row("Giro operacional da cooperativa", "Até 12% a.a.", "Limites conforme tipo da cooperativa.")]),
	program("fno-rural", "FNO Amazônia Rural", "Regional", "Custeio e investimento para atividades rurais na Região Norte.", "Conforme porte e finalidade", "Até 12 anos; exceções 15", "Até 6 anos", "Empreendimento na área de atuação do FNO. Taxa depende de setor, porte e finalidade.", basa + "/linhas-de-fomento/fno/amazonia-rural", [
		row("Matrizes e investimento semifixo", "Consultar TRFC", "Cronograma conforme o projeto.", "Até 10 anos", "Até 6 anos"),
		row("Investimento fixo, estruturas e armazenagem", "Consultar TRFC", "Até 15 anos em armazenagem e infraestrutura hídrica elegíveis.", "Até 12 anos", "Até 6 anos"),
		row("Recria, engorda e retenção de matrizes", "Consultar TRFC", "Custeio pecuário isolado, conforme finalidade.", "12 a 24 meses"),
		row("Custeio agrícola e comercialização", "Consultar TRFC", "Operações não associadas a investimento.", "Até 2 anos")
	]),
	program("fno-biodiversidade", "FNO Biodiversidade / Rural Verde", "Regional", "Conservação, recuperação ambiental e uso sustentável dos recursos amazônicos.", "Sob consulta", "Até 20 anos", "Até 12 anos", "Produtores e comunidades elegíveis da Região Norte; condições variam por projeto.", basa + "/linhas-de-fomento/fno/fno-biodiversidade", [
		row("Manejo florestal, áreas degradadas e sistemas sustentáveis", "Consultar TRFC", "Investimento fixo.", "Até 20 anos", "Até 12 anos"),
		row("Equipamentos e investimentos semifixos", "Consultar TRFC", "Conforme o item e a capacidade de pagamento.", "Até 10 anos", "Até 6 anos"),
		row("Custeio isolado", "Consultar TRFC", "Despesas vinculadas à atividade elegível.", "Até 2 anos")
	]),
	program("fno-energia", "FNO Energia Verde", "Regional", "Geração e uso de fontes renováveis nas atividades rurais.", "Conforme TRFC", "Até 12 anos", "Até 6 anos", "Atividade rural na Região Norte e enquadramento por porte/finalidade.", basa + "/linhas-de-fomento/fno/energia-verde", [row("Energia solar, biomassa e outras renováveis", "Consultar TRFC", "Para consumo próprio na atividade rural."), row("Veículos verdes e infraestrutura de abastecimento", "Consultar TRFC", "Itens elegíveis segundo a linha e o projeto.")]),
	consult("pronaf-a", "PRONAF A — Investimento", "Investimento", "Estruturação produtiva de beneficiários do Grupo A.", basa + "/pronaf/pronaf-a", ["Implantação e estrutura do projeto produtivo"], "Exclusivo para beneficiários enquadrados no Grupo A; conferir regras e bônus aplicáveis."),
	consult("pronaf-ac", "PRONAF A/C — Custeio", "Custeio", "Custeio para beneficiários enquadrados no Grupo A/C.", basa + "/pronaf/pronaf-a-c-custeio", ["Custeio agrícola", "Custeio pecuário"], "Requisitos próprios do Grupo A/C. Não se aplica automaticamente a todos os beneficiários do Pronaf."),
	consult("pronaf-b", "PRONAF B — Microcrédito", "Investimento", "Pequenos projetos produtivos com orientação específica.", basa + "/pronaf/pronaf-b", ["Pequenos investimentos produtivos"], "Grupo B; confirmar renda, metodologia, taxa, limite e bônus de adimplência."),
	consult("pronaf-floresta", "PRONAF Floresta", "Investimento", "Sistemas agroflorestais e exploração extrativista sustentável.", basa + "/linhas-de-fomento/pronaf", ["Sistemas agroflorestais", "Manejo e extrativismo sustentável"], "Agricultura familiar com projeto elegível; prazo depende do ciclo da atividade."),
	consult("pronaf-cotas", "PRONAF Cotas-partes", "Cooperativas", "Integralização de capital em cooperativas de produção rural.", "https://www.sicoob.com.br/web/sicoob/agricultor-familiar", ["Integralização de cotas-partes"], "Associados e cooperativas enquadrados; verificar a regulamentação específica."),
	consult("pronaf-industrializacao", "PRONAF Industrialização", "Cooperativas", "Beneficiamento e processamento da produção familiar.", caixa + "industrializacao/industrializacao-pronaf/Paginas/default.aspx", ["Insumos e custos de industrialização"]),
	program("custeio-empresarial", "Custeio agropecuário", "Custeio", "Insumos e despesas da safra ou da criação.", "Até 12,5% a.a. / livres", "Conforme ciclo", "Conforme ciclo", "Agricultura empresarial; recursos livres têm taxa negociada.", sicredi, [
		row("Lavouras e insumos — recursos controlados", "Até 12,5% a.a.", "Confirmar fonte do recurso e enquadramento."),
		row("Recria, engorda e manejo — recursos controlados", "Até 12,5% a.a.", "O prazo acompanha a atividade."),
		row("Custeio com recursos livres", "Negociada", "Não há taxa pública única para todos os clientes.")
	]),
	consult("investimento-livre", "Investimento rural / recursos livres", "Recursos livres", "Projetos de produção com condições negociadas.", sicredi, ["Máquinas e equipamentos", "Benfeitorias e expansão produtiva"]),
	consult("comercializacao", "Comercialização rural", "Comercialização", "Recursos para organizar a venda da produção.", sicredi, ["Estocagem e venda da produção"]),
	consult("industrializacao", "Industrialização rural", "Cooperativas", "Custos do beneficiamento e processamento agropecuário.", caixa + "industrializacao/Paginas/default.aspx", ["Processamento, embalagem e conservação"]),
	consult("cpr", "CPR — Cédula de Produto Rural", "Recursos livres", "Captação de recursos vinculada à produção agropecuária.", sicredi, ["Antecipação de recursos com CPR"], "Taxa, vencimento, garantias e liquidação definidos na contratação."),
	consult("cdca", "CDCA", "Recursos livres", "Financiamento da cadeia do agronegócio por títulos.", "https://www.santander.com.br/agronegocio/titulos-do-agronegocio/cdca", ["Financiamento da cadeia agropecuária"]),
	consult("fee", "FEE — Estocagem", "Comercialização", "Apoio à estocagem de produtos agropecuários.", "https://blog.bb.com.br/calendario-agro-organize-suas-financas-pelo-ciclo-da-safra/", ["Armazenamento e conservação para venda"]),
	consult("fgpp", "FGPP — Garantia de Preços", "Comercialização", "Aquisição da produção agropecuária respeitando preços de referência.", "https://blog.bb.com.br/calendario-agro-organize-suas-financas-pelo-ciclo-da-safra/", ["Compra de produtos de produtores rurais"]),
	consult("cpp", "CPP — Produção Própria", "Comercialização", "Crédito para comercialização da produção própria.", "https://blog.bb.com.br/calendario-agro-organize-suas-financas-pelo-ciclo-da-safra/", ["Comercialização de produção própria"]),
	consult("funcafe-custeio", "Funcafé Custeio", "Custeio", "Despesas produtivas da cafeicultura.", "https://www.bb.com.br/pbb/pagina-inicial/agronegocios/agronegocio---produtos-e-servicos/grande-produtor/custear-sua-producao/funcafe-custeio", ["Insumos, manejo e colheita do café"]),
	consult("funcafe-estocagem", "Funcafé Estocagem", "Comercialização", "Recursos para armazenar a produção de café.", sicoob, ["Estocagem da produção cafeeira"]),
	consult("funcafe-fac", "Funcafé — Aquisição de Café", "Comercialização", "Compra de café por cooperativas e indústrias elegíveis.", sicoob, ["Aquisição de café"]),
	consult("funcafe-giro", "Funcafé Capital de Giro", "Cooperativas", "Giro para cooperativas e indústrias de café.", bb + "comercializacao/funcafe-capital-de-giro", ["Giro de indústrias e cooperativas cafeeiras"]),
	consult("fco", "FCO Rural / Verde", "Regional", "Desenvolvimento rural e sistemas sustentáveis no Centro-Oeste.", sicoob, ["Investimento rural", "Investimento sustentável"], "Somente empreendimentos no DF, GO, MT e MS. Não atende propriedades no Pará."),
	consult("investe-agro", "BB Investe Agro", "Investimento", "Financiamento de investimento rural com condições por finalidade.", bb + "investimentos/investe-agro/", ["Matrizes, máquinas e infraestrutura", "Irrigação, armazenagem e outras melhorias"]),
	consult("move-agricola", "Move Agrícola", "Investimento", "Máquinas e tecnologias agrícolas nacionais com conteúdo inovador.", bb + "investimentos/move-agricola/", ["Aquisição inovadora de máquinas e equipamentos"]),
	consult("moderagro", "Moderagro", "Investimento", "Modernização produtiva e defesa animal, conforme oferta do banco.", "https://www.santander.com.br/agronegocio/financiamentos-do-bndes/moderagro", ["Benfeitorias e modernização produtiva", "Animais e equipamentos elegíveis"], "Linha ainda citada em catálogos bancários. Confirmar abertura, enquadramento e condições atuais; não aplicar taxa de outra linha."),
	consult("multiagro", "Santander Multiagro", "Investimento", "Investimentos produtivos com condições negociadas.", santander, ["Máquinas, equipamentos e investimentos agropecuários"]),
	consult("basa-giro", "Giro Produtor Rural", "Recursos livres", "Recursos para necessidades produtivas do negócio rural.", basa + "/rural/credito-e-financiamento-agro", ["Insumos e matérias-primas do agronegócio"]),
	consult("basa-veiculos", "Veículos do Produtor Rural", "Investimento", "Financiamento de veículos utilitários para o produtor.", basa + "/rural/credito-e-financiamento-agro", ["Veículos utilitários elegíveis"]),
	consult("finame", "BNDES Finame", "Investimento", "Financiamento de máquinas e equipamentos elegíveis.", basa + "/rural", ["Máquinas e equipamentos credenciados"]),
	consult("bndes-automatico", "BNDES Automático Rural", "Investimento", "Projetos de investimento produtivo no meio rural.", basa + "/rural", ["Implantação, expansão e modernização"]),
	consult("caixa-infra-agricola", "CAIXA Infraestrutura Agrícola", "Investimento", "Investimentos fixos e semifixos da produção agrícola.", caixa + "investimento/infra-agricola/Paginas/default.aspx", ["Lavouras e infraestrutura agrícola", "Máquinas e equipamentos elegíveis"]),
	consult("caixa-infra-pecuaria", "CAIXA Infraestrutura Pecuária", "Investimento", "Estrutura produtiva e equipamentos da criação.", caixa + "investimento/infra-pecuaria/Paginas/default.aspx", ["Benfeitorias e equipamentos pecuários", "Melhorias da estrutura produtiva"]),
	consult("caixa-sustentabilidade", "CAIXA Sustentabilidade", "Investimento", "Investimentos para produção mais sustentável.", caixa + "investimento/programa-sustentabilidade/Paginas/default.aspx", ["Investimento sustentável elegível"]),
	consult("caixa-poupanca", "CAIXA Poupança Rural", "Recursos livres", "Investimentos com recursos de poupança livre.", caixa + "linhas-recurso-poupanca/Paginas/default.aspx", ["Investimento agrícola", "Investimento pecuário"]),
	consult("caixa-pesca", "PRONAF Pescador", "Custeio", "Crédito para atividades de pescadores enquadrados no Pronaf.", caixa + "aquicultura-pesca/pronaf-pescador/Paginas/default.aspx", ["Custeio da atividade pesqueira", "Investimento elegível na pesca"]),
	consult("caixa-aquicultura", "Financiamento da Aquicultura", "Investimento", "Custeio e estruturação de empreendimentos aquícolas.", caixa + "aquicultura-pesca/financiamento-atividade-aquicola/Paginas/default.aspx", ["Estruturas e equipamentos aquícolas", "Custeio da atividade"], "Condições conforme o programa e o enquadramento; confirmar taxa vigente com a CAIXA."),
	consult("repasse-controlado", "Repasse Controlado", "Investimento", "Repasse para bens e melhorias produtivas do agronegócio.", sicoob, ["Máquinas, benfeitorias, lavouras e pastagens"])
];
var programById = Object.fromEntries(creditPrograms.map((item) => [item.id, item]));
var pronaf = [
	"pronaf-custeio",
	"pronaf-mais",
	"pronaf-bio",
	"pronaf-mulher",
	"pronaf-agroecologia",
	"pronaf-jovem",
	"pronaf-agroindustria"
];
var core = [
	"pronamp-custeio",
	"pronamp-investimento",
	"moderfrota",
	"renovagro",
	"inovagro",
	"proirriga",
	"pca"
];
var creditBanks = [
	{
		id: "basa",
		name: "Banco da Amazônia",
		logo: "/banks/basa.png",
		lineIds: [
			"fno-rural",
			"fno-biodiversidade",
			"fno-energia",
			...pronaf,
			"pronaf-a",
			"pronaf-ac",
			"pronaf-b",
			"pronaf-floresta",
			"pronaf-cotas",
			"pronaf-industrializacao",
			"basa-giro",
			"basa-veiculos",
			"finame",
			"bndes-automatico"
		],
		sources: [
			{
				label: "Catálogo rural BASA",
				url: basa + "/rural/credito-e-financiamento-agro"
			},
			{
				label: "Linhas Pronaf BASA",
				url: basa + "/linhas-de-fomento/pronaf"
			},
			{
				label: "Linhas FNO",
				url: basa + "/linhas-de-fomento/fno"
			}
		],
		note: "No FNO, a taxa varia por porte, finalidade e regras dos fundos constitucionais. Confirmar orçamento e condições na agência."
	},
	{
		id: "bb",
		name: "Banco do Brasil",
		logo: "/banks/banco-do-brasil.png",
		lineIds: [
			"pronaf-mais",
			"pronaf-custeio",
			"pronaf-bio",
			"pronaf-mulher",
			"pronaf-agroindustria",
			"pronaf-ac",
			...core,
			"custeio-empresarial",
			"investe-agro",
			"move-agricola",
			"funcafe-custeio",
			"funcafe-giro",
			"fee",
			"fgpp",
			"cpp",
			"cpr",
			"fco"
		],
		sources: [{
			label: "Investimentos BB",
			url: bb + "investimentos/"
		}, {
			label: "Crédito por etapa da produção",
			url: "https://blog.bb.com.br/calendario-agro-organize-suas-financas-pelo-ciclo-da-safra/"
		}],
		note: "A linha depende da renda, da finalidade e da localização do empreendimento. FCO é exclusivo do Centro-Oeste."
	},
	{
		id: "sicredi",
		name: "Sicredi",
		logo: "/banks/sicredi.png",
		lineIds: [
			...pronaf,
			...core,
			"custeio-empresarial",
			"investimento-livre",
			"comercializacao",
			"industrializacao",
			"cpr"
		],
		sources: [
			{
				label: "Plano Safra Sicredi",
				url: sicredi
			},
			{
				label: "Investimento agropecuário",
				url: "https://www.sicredi.com.br/site/credito/para-agronegocio/investimento/"
			},
			{
				label: "Catálogo de sublinhas Pronaf",
				url: "https://www.sicredi.com.br/media/produtos/filer_public/2023/08/01/investimentos-plano-safra-23-24.pdf"
			}
		],
		note: "A oferta dos programas e sublinhas varia entre cooperativas. O catálogo histórico de sublinhas não substitui a confirmação da oferta atual; as taxas exibidas usam referências oficiais atuais."
	},
	{
		id: "caixa",
		name: "CAIXA",
		logo: "/banks/caixa.jpg",
		lineIds: [
			"pronaf-custeio",
			"pronaf-mais",
			"pronaf-agroindustria",
			"pronaf-b",
			...core,
			"prodecoop",
			"procap",
			"custeio-empresarial",
			"comercializacao",
			"industrializacao",
			"pronaf-industrializacao",
			"caixa-infra-agricola",
			"caixa-infra-pecuaria",
			"caixa-sustentabilidade",
			"caixa-poupanca",
			"caixa-pesca",
			"caixa-aquicultura"
		],
		sources: [
			{
				label: "Investimentos CAIXA",
				url: caixa + "investimento/Paginas/default.aspx"
			},
			{
				label: "Custeio CAIXA",
				url: caixa + "custeio/Paginas/default.aspx"
			},
			{
				label: "Comercialização CAIXA",
				url: caixa + "comercializacao/Paginas/default.aspx"
			}
		],
		note: "A CAIXA possui linhas por finalidade e fonte de recursos. A taxa de uma operação com recursos livres não é a mesma de um programa equalizado."
	},
	{
		id: "santander",
		name: "Santander",
		logo: "/banks/santander.png",
		lineIds: [
			...core,
			"moderagro",
			"prodecoop",
			"procap",
			"custeio-empresarial",
			"multiagro",
			"cpr",
			"cdca"
		],
		sources: [{
			label: "Catálogo Agro Santander",
			url: santander
		}, {
			label: "Programas BNDES — exemplo",
			url: "https://www.santander.com.br/agronegocio/financiamentos-do-bndes/inovagro"
		}],
		note: "As linhas BNDES dependem de abertura e orçamento. Multiagro, CPR e CDCA possuem condições negociadas."
	},
	{
		id: "sicoob",
		name: "Sicoob",
		logo: "/banks/sicoob.jpg",
		lineIds: [
			...pronaf,
			"pronaf-cotas",
			...core,
			"moderagro",
			"prodecoop",
			"custeio-empresarial",
			"investimento-livre",
			"repasse-controlado",
			"fco",
			"funcafe-custeio",
			"funcafe-estocagem",
			"funcafe-fac",
			"fee",
			"fgpp",
			"industrializacao"
		],
		sources: [{
			label: "Agricultura familiar Sicoob",
			url: "https://www.sicoob.com.br/web/sicoob/agricultor-familiar"
		}, {
			label: "Catálogo de crédito rural Sicoob",
			url: sicoob
		}],
		note: "A disponibilidade varia por cooperativa e região. Confirmar a oferta local; FCO atende somente o Centro-Oeste."
	}
];
var catalogReviewed = "30/09/2026";
//#endregion
//#region app/CreditExplorer.tsx
var import_jsx_runtime = require_jsx_runtime();
function tabKeys(event) {
	if (![
		"ArrowRight",
		"ArrowLeft",
		"ArrowUp",
		"ArrowDown",
		"Home",
		"End"
	].includes(event.key)) return;
	const tabs = Array.from(event.currentTarget.querySelectorAll("[role=\"tab\"]"));
	const index = tabs.indexOf(document.activeElement);
	if (index < 0) return;
	event.preventDefault();
	event.stopPropagation();
	const next = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (index + (["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1) + tabs.length) % tabs.length;
	tabs[next]?.focus();
	tabs[next]?.click();
}
var groups = [
	"Regional",
	"Custeio",
	"Investimento",
	"Cooperativas",
	"Comercialização",
	"Recursos livres"
];
var normalize = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
function CreditExplorer() {
	const [view, setView] = (0, import_react.useState)("banks");
	const [bankId, setBankId] = (0, import_react.useState)("basa");
	const [lineId, setLineId] = (0, import_react.useState)("fno-rural");
	const [query, setQuery] = (0, import_react.useState)("");
	const bank = creditBanks.find((item) => item.id === bankId) ?? creditBanks[0];
	const available = view === "banks" ? bank.lineIds.map((id) => programById[id]) : creditPrograms;
	const filtered = available.filter((item) => normalize(`${item.label} ${item.description} ${item.category} ${item.rows.map((r) => r.purpose).join(" ")}`).includes(normalize(query)));
	const line = filtered.find((item) => item.id === lineId) ?? filtered[0];
	function selectBank(id) {
		const next = creditBanks.find((item) => item.id === id) ?? creditBanks[0];
		setBankId(next.id);
		setLineId(next.lineIds[0]);
		setQuery("");
	}
	(0, import_react.useEffect)(() => {
		function readHash() {
			const next = creditBanks.find((item) => `#banco-${item.id}` === window.location.hash);
			if (next) {
				setView("banks");
				selectBank(next.id);
				requestAnimationFrame(() => document.getElementById("linhas")?.scrollIntoView());
			}
		}
		readHash();
		window.addEventListener("hashchange", readHash);
		return () => window.removeEventListener("hashchange", readHash);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section credit-section",
		id: "linhas",
		"aria-labelledby": "credit-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				id: "bancos",
				className: "anchor-alias"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "02 / Possibilidades de crédito"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					id: "credit-title",
					children: [
						"Entenda a linha.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Planeje cada finalidade." })
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Compare os programas, veja o que cada um financia e confira os juros de referência antes de montar seu projeto." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "credit-view-tabs",
				role: "tablist",
				"aria-label": "Forma de consulta do crédito",
				onKeyDown: tabKeys,
				children: [{
					id: "banks",
					name: "Por instituição"
				}, {
					id: "programs",
					name: "Por programa"
				}].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					role: "tab",
					id: `view-${item.id}`,
					"aria-controls": "credit-view-panel",
					"aria-selected": view === item.id,
					tabIndex: view === item.id ? 0 : -1,
					onClick: () => {
						setView(item.id);
						setQuery("");
					},
					children: item.name
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "credit-view-panel",
				role: "tabpanel",
				"aria-labelledby": `view-${view}`,
				children: [
					view === "banks" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bank-tabs",
						role: "tablist",
						"aria-label": "Instituição financeira",
						onKeyDown: tabKeys,
						children: creditBanks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							id: `banco-${item.id}`,
							className: bank.id === item.id ? "active" : "",
							type: "button",
							role: "tab",
							"data-bank": item.id,
							"aria-label": item.name,
							"aria-selected": bank.id === item.id,
							"aria-controls": "bank-content",
							tabIndex: bank.id === item.id ? 0 : -1,
							onClick: () => selectBank(item.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `bank-logo bank-logo-${item.id}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.logo,
									alt: "",
									loading: "lazy"
								})
							})
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "catalog-meta",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: view === "banks" ? `${available.length} linhas e modalidades no catálogo` : `${available.length} programas e modalidades` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Fontes consultadas em ", catalogReviewed] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "credit-workspace credit-catalog",
						id: "bank-content",
						role: view === "banks" ? "tabpanel" : void 0,
						"aria-labelledby": view === "banks" ? `banco-${bank.id}` : void 0,
						"data-bank": view === "banks" ? bank.id : void 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "credit-sidebar",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow",
									children: "Linhas de referência"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: view === "banks" ? bank.name : "Todos os programas" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "line-search",
									children: ["Buscar linha ou finalidade", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: query,
										type: "search",
										onChange: (event) => setQuery(event.target.value),
										placeholder: "Ex.: matrizes, pastagem..."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "line-options catalog-options",
									role: "tablist",
									"aria-orientation": "vertical",
									"aria-label": "Linhas de crédito",
									onKeyDown: tabKeys,
									children: groups.map((group) => {
										const rows = filtered.filter((item) => item.category === group);
										return rows.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "catalog-group",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
												group,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: rows.length })
											] }), rows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												role: "tab",
												id: `catalog-${item.id}`,
												"aria-selected": line?.id === item.id,
												"aria-controls": "line-content",
												tabIndex: line?.id === item.id ? 0 : -1,
												onClick: () => setLineId(item.id),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }), line?.id === item.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													"aria-hidden": "true",
													children: "✓"
												})]
											}, item.id))]
										}, group) : null;
									})
								}),
								filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "no-line",
									children: "Nenhuma linha encontrada. Tente outra palavra."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "credit-result",
							id: "line-content",
							role: line ? "tabpanel" : void 0,
							"aria-labelledby": line ? `catalog-${line.id}` : void 0,
							children: line ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "catalog-result-top",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "result-eyebrow",
										children: line.category
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "reference-label",
										children: "Condições de referência"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: line.label }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "line-introduction",
									children: line.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "credit-terms",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Juros anuais" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: line.rate })] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Prazo total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: line.term })] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Carência" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: line.grace })] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "purpose-heading",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Juros por finalidade" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "A taxa acompanha o item e o enquadramento." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "purpose-table-wrap",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "purpose-table",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("caption", {
												className: "sr-only",
												children: ["Finalidades e taxas de referência de ", line.label]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													scope: "col",
													children: "O que financiar"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													scope: "col",
													children: "Juros ao ano"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													scope: "col",
													children: "Condições"
												})
											] }) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: line.rows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													scope: "row",
													children: item.purpose
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.rate }) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [item.note, (item.term || item.grace) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [item.term && `Prazo: ${item.term}. `, item.grace && `Carência: ${item.grace}.`] })] })
											] }, item.purpose)) })
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "line-eligibility",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Quem pode contratar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line.eligibility })]
								}),
								line.notice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "bank-note",
									children: line.notice
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "bank-note",
									children: view === "banks" ? bank.note : "A existência do programa não garante oferta em todas as instituições. Consulte a agência ou cooperativa."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "result-actions",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#solucoes",
										className: "button button-dark",
										children: "Montar meu projeto"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "source-link",
										href: line.source,
										target: "_blank",
										rel: "noopener noreferrer",
										children: "Regras da linha"
									})]
								}),
								view === "banks" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bank-source-links",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Fontes do banco:" }), bank.sources.map((source) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: source.url,
										target: "_blank",
										rel: "noopener noreferrer",
										children: source.label
									}, source.url))]
								})
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "catalog-empty",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Não encontramos essa finalidade." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Limpe a busca para voltar às linhas do catálogo." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "button button-light",
										onClick: () => setQuery(""),
										children: "Limpar busca"
									})
								]
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "credit-footnote",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "As taxas são referências das fontes indicadas, não uma proposta de crédito. Oferta, orçamento, enquadramento e condições finais devem ser confirmados na instituição. O catálogo reúne linhas identificadas nas fontes públicas; modalidades locais e temporárias podem variar. Os prazos totais incluem a carência. A presença das marcas não indica parceria ou credenciamento da AC Consultoria." })
			})
		]
	});
}
//#endregion
//#region app/financing-model.ts
var kindNames = {
	custeio: "Custeio",
	investimento: "Investimento"
};
var activityNames = {
	pecuaria: "Pecuária",
	agricultura: "Agricultura",
	estrutura: "Energia e infraestrutura",
	aquicultura: "Aquicultura e pesca"
};
var group = (kind, activity, rows) => rows.map(([id, label, description, symbol]) => ({
	id,
	kind,
	activity,
	label,
	description,
	symbol
}));
var financingItems = [
	...group("custeio", "pecuaria", [
		[
			"c-bezerras",
			"Aquisição de bezerras",
			"Para recria ou engorda; formação de plantel reprodutivo é investimento.",
			"🐄"
		],
		[
			"c-bezerros",
			"Aquisição de bezerros",
			"Compra de animais destinados à recria ou engorda.",
			"🐂"
		],
		[
			"c-engorda",
			"Bovinos para engorda",
			"Animais e despesas do ciclo de terminação.",
			"🐂"
		],
		[
			"c-matrizes",
			"Manutenção / retenção de matrizes",
			"Alimentação e manejo do rebanho existente. Retenção sujeita à linha, como no FNO.",
			"🐄"
		],
		[
			"c-racao",
			"Ração, sal e suplementação",
			"Alimentação do rebanho durante o ciclo produtivo.",
			"🌾"
		],
		[
			"c-sanidade",
			"Vacinas e medicamentos",
			"Sanidade, identificação e manejo dos animais.",
			"💉"
		],
		[
			"c-forragem",
			"Silagem, feno e forragem",
			"Produção e conservação de alimento para o rebanho.",
			"🌿"
		],
		[
			"c-manejo",
			"Manejo e manutenção de pastagens",
			"Despesas do ciclo. Formação e recuperação estrutural entram em investimento.",
			"🌱"
		]
	]),
	...group("custeio", "agricultura", [
		[
			"c-sementes",
			"Sementes e mudas da safra",
			"Material de plantio para culturas do ciclo produtivo.",
			"🌱"
		],
		[
			"c-fertilizantes",
			"Fertilizantes e corretivos",
			"Insumos previstos no orçamento da lavoura.",
			"🌿"
		],
		[
			"c-defensivos",
			"Defensivos e bioinsumos",
			"Controle fitossanitário e nutrição conforme orientação técnica.",
			"🍃"
		],
		[
			"c-tratos",
			"Plantio e tratos culturais",
			"Preparo, plantio, serviços e mão de obra da safra.",
			"🚜"
		],
		[
			"c-colheita",
			"Colheita e transporte",
			"Serviços e fretes relacionados à produção financiada.",
			"🌽"
		],
		[
			"c-lavoura",
			"Manutenção de lavouras",
			"Despesas recorrentes de culturas já implantadas.",
			"🌳"
		]
	]),
	...group("investimento", "pecuaria", [
		[
			"i-matrizes",
			"Aquisição de matrizes",
			"Formação ou ampliação do rebanho para reprodução.",
			"🐄"
		],
		[
			"i-reprodutores",
			"Aquisição de reprodutores",
			"Touros e outros reprodutores para melhoria do plantel.",
			"🐂"
		],
		[
			"i-pastagem",
			"Formação / recuperação de pastagens",
			"Implantação ou recuperação produtiva conforme projeto.",
			"🌿"
		],
		[
			"i-curral",
			"Currais, cercas e bebedouros",
			"Estrutura para manejo, contenção e água dos animais.",
			"🏡"
		],
		[
			"i-leite",
			"Ordenha e resfriamento de leite",
			"Ordenhadeiras, tanques e estruturas da atividade leiteira.",
			"🥛"
		],
		[
			"i-genetica",
			"Melhoramento genético",
			"Sêmen, embriões e serviços conforme atividade e programa.",
			"🧬"
		],
		[
			"i-pec-maquinas",
			"Máquinas para a pecuária",
			"Tratores, implementos e equipamentos de apoio.",
			"🚜"
		]
	]),
	...group("investimento", "agricultura", [
		[
			"i-trator",
			"Tratores e implementos",
			"Máquinas e equipamentos para a produção agrícola.",
			"🚜"
		],
		[
			"i-colheitadeira",
			"Colheitadeiras e pulverizadores",
			"Renovação ou ampliação do parque de máquinas.",
			"🚜"
		],
		[
			"i-perenes",
			"Implantação de culturas permanentes",
			"Formação ou renovação de lavouras de longo ciclo.",
			"🌳"
		],
		[
			"i-irrigacao",
			"Irrigação e reservatórios",
			"Captação, distribuição de água e irrigação.",
			"💧"
		],
		[
			"i-silos",
			"Silos e armazenagem",
			"Armazéns, secagem e conservação da produção.",
			"🌽"
		],
		[
			"i-estufas",
			"Estufas e cultivo protegido",
			"Estruturas e equipamentos para proteção das culturas.",
			"🌱"
		],
		[
			"i-solo",
			"Solo e sistemas sustentáveis",
			"Correção, conservação e integração de sistemas produtivos.",
			"🍃"
		]
	]),
	...group("investimento", "estrutura", [
		[
			"i-solar",
			"Energia solar e renovável",
			"Geração para uso da atividade rural.",
			"☀️"
		],
		[
			"i-galpoes",
			"Galpões e instalações",
			"Construção, reforma ou ampliação de estruturas produtivas.",
			"🏡"
		],
		[
			"i-agua",
			"Captação e distribuição de água",
			"Reservatórios, bombas e infraestrutura hídrica.",
			"💧"
		],
		[
			"i-tecnologia",
			"Tecnologia e conectividade",
			"Automação, sensores e gestão da propriedade.",
			"📡"
		],
		[
			"i-agroindustria",
			"Agroindústria e beneficiamento",
			"Equipamentos e estruturas para agregar valor à produção.",
			"⚙️"
		]
	]),
	...group("investimento", "aquicultura", [
		[
			"i-tanques",
			"Tanques e viveiros",
			"Implantação ou ampliação de estruturas aquícolas.",
			"🐟"
		],
		[
			"i-aeracao",
			"Aeração, bombas e equipamentos",
			"Equipamentos para cultivo e manejo da água.",
			"💧"
		],
		[
			"i-pescado",
			"Conservação e beneficiamento",
			"Estruturas de processamento e conservação do pescado.",
			"❄️"
		]
	])
];
function toggleFinancingItem(selected, id) {
	if (!financingItems.some((item) => item.id === id)) return selected;
	return selected.includes(id) ? selected.filter((value) => value !== id) : [...selected, id];
}
function selectedFinancingItems(ids) {
	return financingItems.filter((item) => ids.includes(item.id));
}
function financingMessage(ids) {
	return selectedFinancingItems(ids).map((item) => `${kindNames[item.kind]} — ${activityNames[item.activity]}: ${item.label}`).join("\n• ");
}
//#endregion
//#region app/FinancingBuilder.tsx
function FinancingBuilder({ selected, onChange, onContinue }) {
	const [step, setStep] = (0, import_react.useState)(1);
	const [kind, setKind] = (0, import_react.useState)("custeio");
	const [activity, setActivity] = (0, import_react.useState)("pecuaria");
	const heading = (0, import_react.useRef)(null);
	const choices = selectedFinancingItems(selected);
	const visible = financingItems.filter((item) => item.kind === kind && item.activity === activity);
	const activities = kind === "custeio" ? ["pecuaria", "agricultura"] : [
		"pecuaria",
		"agricultura",
		"estrutura",
		"aquicultura"
	];
	function navigate(next) {
		setStep(next);
		requestAnimationFrame(() => {
			heading.current?.focus({ preventScroll: true });
			heading.current?.scrollIntoView({
				behavior: "smooth",
				block: "nearest"
			});
		});
	}
	const images = {
		pecuaria: 4,
		agricultura: 1,
		estrutura: 6,
		aquicultura: 3
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "investment-section",
		id: "solucoes",
		"aria-labelledby": "investment-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "04 / Monte seu projeto"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					id: "investment-title",
					children: [
						"Mais de um objetivo.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Um projeto completo." })
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Combine custeio e investimento. Escolha os itens que precisa financiar e leve tudo para o primeiro atendimento." })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "financing-layout",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "financing-builder",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "builder-steps",
							"aria-label": "Etapas da escolha",
							children: [
								"Categoria",
								"Atividade",
								"Itens"
							].map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								"aria-current": step === i + 1 ? "step" : void 0,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									disabled: i + 1 > step,
									onClick: () => navigate(i + 1),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: i + 1 }), label]
								})
							}, label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "builder-heading",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "builder-path",
									children: step === 1 ? "Comece pelo tipo de financiamento" : `${kindNames[kind]}${step === 3 ? ` / ${activityNames[activity]}` : ""}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									ref: heading,
									tabIndex: -1,
									children: step === 1 ? "O que você precisa agora?" : step === 2 ? "Qual atividade será financiada?" : "Quais itens entram no seu projeto?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: step === 3 ? "Marque quantos itens quiser. Suas escolhas ficam guardadas no resumo." : "Você pode voltar e acrescentar outras categorias depois." })
							]
						}),
						step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "category-grid",
							children: ["custeio", "investimento"].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "category-card",
								type: "button",
								onClick: () => {
									setKind(value);
									navigate(2);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: `/investments/goal-${value === "custeio" ? 1 : 2}.webp`,
									alt: "",
									width: "900",
									height: "600",
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "category-content",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "category-label",
											children: value === "custeio" ? "Para o ciclo da produção" : "Para estruturar e crescer"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: kindNames[value] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: value === "custeio" ? "Bezerras, bezerros, alimentação, insumos e despesas da safra." : "Matrizes, pastagens, máquinas, instalações e tecnologia." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "category-action",
											children: ["Escolher ", value]
										})
									]
								})]
							}, value))
						}),
						step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "activity-grid",
							children: activities.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "activity-card",
								type: "button",
								onClick: () => {
									setActivity(value);
									navigate(3);
								},
								children: [value === "aquicultura" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "activity-symbol",
									"aria-hidden": "true",
									children: "🐟"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: `/investments/goal-${images[value]}.webp`,
									alt: "",
									width: "900",
									height: "600",
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: value === "pecuaria" ? kind === "custeio" ? "Custeio pecuário" : "Investimento pecuário" : value === "agricultura" ? kind === "custeio" ? "Custeio agrícola" : "Investimento agrícola" : activityNames[value] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [financingItems.filter((item) => item.kind === kind && item.activity === value).length, " opções para selecionar"] })] })]
							}, value))
						}),
						step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
							className: "financing-items",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
								className: "sr-only",
								children: [
									"Itens de ",
									kindNames[kind],
									" em ",
									activityNames[activity]
								]
							}), visible.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "financing-item",
								"data-checked": selected.includes(item.id),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: selected.includes(item.id),
										onChange: () => onChange(toggleFinancingItem(selected, item.id))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "item-symbol",
										"aria-hidden": "true",
										children: item.symbol
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: item.description })] })
								]
							}, item.id))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "builder-navigation",
							children: [step > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "button button-light",
								onClick: () => navigate(step - 1),
								children: "Voltar"
							}), step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "button button-dark",
								onClick: () => navigate(1),
								children: "Adicionar outra categoria"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "project-summary",
					"aria-labelledby": "project-summary-title",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "summary-title",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "Seu planejamento"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "selection-count",
								"aria-live": "polite",
								children: [
									choices.length,
									" ",
									choices.length === 1 ? "item" : "itens"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							id: "project-summary-title",
							children: "Meu projeto"
						}),
						choices.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "summary-empty",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "＋"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Seu projeto começa com a primeira escolha." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "É possível combinar, por exemplo, bezerras para recria e matrizes para reprodução." })
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "summary-groups",
							children: ["custeio", "investimento"].filter((type) => choices.some((item) => item.kind === type)).map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "summary-group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: kindNames[type] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: choices.filter((item) => item.kind === type).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: activityNames[item.activity] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": `Remover ${kindNames[item.kind]}: ${item.label}`,
									onClick: () => onChange(selected.filter((id) => id !== item.id)),
									children: "×"
								})] }, item.id)) })]
							}, type))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "button button-dark summary-continue",
							type: "button",
							disabled: !choices.length,
							onClick: onContinue,
							children: "Continuar com meu projeto"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "summary-note",
							children: "O enquadramento, a linha e os juros serão avaliados para cada item."
						})
					]
				})]
			})]
		})
	});
}
//#endregion
//#region app/page.tsx
function Icon({ name, className = "" }) {
	const paths = {
		pin: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "10",
			r: "2.5"
		})] }),
		file: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 2v6h6M8 13h8M8 17h5" })] }),
		leaf: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 4c-6-2-14 0-14 7a6 6 0 0 0 6 6c7 0 9-8 8-13Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m4 20 12-12" })] }),
		shield: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m8 12 3 3 5-6" })] }),
		wallet: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 8V5a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v12H5a3 3 0 0 1-3-3V6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 12h-5v5h5" })] }),
		check: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m5 12 4 4L19 6" }),
		tractor: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 15V5h7l3 10M7 9h8M3 11v4h4M17 15h4v-5h-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "7",
				cy: "17",
				r: "4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "19",
				cy: "18",
				r: "3"
			})
		] }),
		sun: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "4"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5" })] }),
		layers: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 3 10 5-10 5L2 8ZM2 12l10 5 10-5M2 16l10 5 10-5" }) }),
		message: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 11a9 9 0 0 1-9 9 10 10 0 0 1-4-1l-5 2 1-5a9 9 0 1 1 17-5Z" }),
		copy: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "8",
			y: "8",
			width: "13",
			height: "13",
			rx: "2"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 8V3H3v13h5" })] }),
		share: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "18",
				cy: "5",
				r: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "6",
				cy: "12",
				r: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "18",
				cy: "19",
				r: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m9 10 6-4M9 14l6 4" })
		] }),
		plus: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 5v14M5 12h14" }),
		close: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m6 6 12 12M6 18 18 6" }),
		menu: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 7h16M4 12h16M4 17h16" })
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className: `icon ${className}`,
		width: "24",
		height: "24",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.6",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		children: paths[name]
	});
}
var serviceIcons = [
	"wallet",
	"leaf",
	"layers",
	"file",
	"shield",
	"message"
];
function Home() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [selectedItems, setSelectedItems] = (0, import_react.useState)([]);
	const [name, setName] = (0, import_react.useState)("");
	const [city, setCity] = (0, import_react.useState)("");
	const [need, setNeed] = (0, import_react.useState)("");
	const [detail, setDetail] = (0, import_react.useState)("");
	const [showMessage, setShowMessage] = (0, import_react.useState)(false);
	const [messageStatus, setMessageStatus] = (0, import_react.useState)("");
	const messageRef = (0, import_react.useRef)(null);
	const nameRef = (0, import_react.useRef)(null);
	const menuRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!menuOpen) return;
		function escapeMenu(event) {
			if (event.key === "Escape") {
				setMenuOpen(false);
				menuRef.current?.focus();
			}
		}
		document.addEventListener("keydown", escapeMenu);
		return () => document.removeEventListener("keydown", escapeMenu);
	}, [menuOpen]);
	(0, import_react.useEffect)(() => {
		if (showMessage) messageRef.current?.focus();
	}, [showMessage]);
	const message = (0, import_react.useMemo)(() => `Olá, AC Consultoria! Meu nome é ${name.trim() || "[nome]"}, sou de ${city.trim() || "[município/UF]"}.

Quero avaliar os seguintes financiamentos:
${selectedItems.length ? `• ${financingMessage(selectedItems)}` : ""}${need.trim() ? `${selectedItems.length ? "\n" : ""}• Outro objetivo: ${need.trim()}` : ""}${detail.trim() ? `\n\nInformações adicionais: ${detail.trim()}` : ""}`, [
		name,
		city,
		need,
		detail,
		selectedItems
	]);
	function changeItems(items) {
		setSelectedItems(items);
		setShowMessage(false);
		setMessageStatus("");
	}
	function continueProject() {
		document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
		nameRef.current?.focus({ preventScroll: true });
	}
	function prepareMessage(event) {
		event.preventDefault();
		setShowMessage(true);
		setMessageStatus("");
		requestAnimationFrame(() => messageRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "nearest"
		}));
	}
	async function copyMessage() {
		try {
			await navigator.clipboard.writeText(message);
			setMessageStatus("Mensagem copiada. Agora cole na conversa com a AC.");
		} catch {
			setMessageStatus("Selecione o texto da mensagem abaixo e copie para a conversa com a AC.");
		}
	}
	async function shareMessage() {
		if (!navigator.share) {
			await copyMessage();
			return;
		}
		try {
			await navigator.share({
				title: "Meu projeto — AC Consultoria",
				text: message
			});
			setMessageStatus("Mensagem compartilhada pelo aplicativo escolhido.");
		} catch (error) {
			if (error.name !== "AbortError") setMessageStatus("Não foi possível compartilhar. Use Copiar mensagem.");
		}
	}
	function updateForm() {
		setShowMessage(false);
		setMessageStatus("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			className: "skip-link",
			href: "#conteudo",
			children: "Pular para o conteúdo"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "site-header",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "header-inner",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "brand",
						href: "#inicio",
						"aria-label": "AC Consultoria — início",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/ac-consultoria-logo.png",
							width: "724",
							height: "189",
							alt: "AC Consultoria — Crédito Rural e Assessoria Técnica"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						ref: menuRef,
						className: "menu-toggle",
						type: "button",
						"aria-label": menuOpen ? "Fechar menu" : "Abrir menu",
						"aria-expanded": menuOpen,
						"aria-controls": "main-navigation",
						onClick: () => setMenuOpen(!menuOpen),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: menuOpen ? "close" : "menu" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						id: "main-navigation",
						className: menuOpen ? "open" : "",
						"aria-label": "Navegação principal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#servicos",
								onClick: () => setMenuOpen(false),
								children: "O que fazemos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#solucoes",
								onClick: () => setMenuOpen(false),
								children: "Seu investimento"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#linhas",
								onClick: () => setMenuOpen(false),
								children: "Linhas de crédito"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contato",
								className: "button button-dark nav-cta",
								onClick: () => setMenuOpen(false),
								children: "Vamos conversar"
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "conteudo",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "hero",
					id: "inicio",
					"aria-labelledby": "hero-title",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-inner",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow hero-eyebrow",
									children: "Crédito rural & assessoria técnica"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									id: "hero-title",
									children: [
										"Crédito rural para",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "fazer sua produção crescer." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hero-description",
									children: "Do planejamento à análise bancária, a AC Consultoria ajuda você a transformar investimentos em um projeto bem estruturado para o campo."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hero-actions",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "button button-gold",
										href: "#contato",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "message" }), "Conversar sobre meu projeto"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "quiet-link",
										href: "#linhas",
										children: "Conhecer as linhas de crédito"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hero-location",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "pin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Atendimento em ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Novo Progresso / PA" })] })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-image",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/rural-consultoria.webp",
								width: "1600",
								height: "854",
								fetchPriority: "high",
								alt: "Produtor e consultor analisando um projeto na propriedade rural"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "image-caption",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Da propriedade ao projeto" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"Planejamento que começa",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"pela sua realidade."
								] })]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-foundation",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "leaf" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Entender sua produção" }), "Um diagnóstico antes de decidir."] })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "file" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Estruturar seu projeto" }), "Técnica, números e documentação."] })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "shield" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Acompanhar a análise" }), "Orientação durante cada etapa."] })] })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "section services-section",
					id: "servicos",
					"aria-labelledby": "services-title",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "01 / O que fazemos"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								id: "services-title",
								children: [
									"Seu projeto merece",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "uma base sólida." })
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Planejamento, orientação técnica e acompanhamento bancário. Tudo conectado ao objetivo que você quer realizar no campo." })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "services-grid",
							children: services.slice(0, 3).map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "service-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "service-top",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: serviceIcons[index] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: service.code })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: service.title }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: service.text })
								]
							}, service.code))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "support-services",
							children: services.slice(3).map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: serviceIcons[index + 3] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: service.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: service.text })] })] }, service.code))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditExplorer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "process-section",
					id: "como-funciona",
					"aria-labelledby": "process-title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "section-heading",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "03 / Do primeiro contato à análise"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									id: "process-title",
									children: [
										"Você cuida da produção.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "A gente estrutura o caminho." })
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Uma conversa clara em cada etapa, com orientação para organizar o projeto e atender às solicitações do banco." })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "process-grid",
								children: process.map(([number, title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "process-number",
										children: number
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: text })
								] }, number))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "process-bottom",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Conhecer. Planejar. Estruturar. Acompanhar." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "button button-outline",
									href: "#contato",
									children: "Começar pelo meu projeto"
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "section faq-section",
					id: "duvidas",
					"aria-labelledby": "faq-title",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "faq-intro",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Antes de começar"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								id: "faq-title",
								children: [
									"Boa orientação.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Menos dúvidas." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Você não precisa chegar com tudo resolvido. Vamos entender juntos o ponto de partida." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-link",
								href: "#contato",
								children: "Conversar com a AC"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "faq-list",
						children: faqs.map(([question, answer]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: question }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "plus" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: answer })] }, question))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancingBuilder, {
					selected: selectedItems,
					onChange: changeItems,
					onContinue: continueProject
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "contact-section",
					id: "contato",
					"aria-labelledby": "contact-title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section contact-inner",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "contact-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Vamos conversar"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									id: "contact-title",
									children: [
										"Todo bom projeto",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"começa com",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "uma conversa." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Conte o que você pretende realizar. Prepare uma mensagem com as informações iniciais para conversar com a AC Consultoria." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "contact-location",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "pin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Novo Progresso / PA" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Crédito rural e assessoria técnica" })] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "contact-note",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "shield" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Este formulário prepara sua mensagem. Você escolhe quando e com quem compartilhá-la." })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "contact-form",
							onSubmit: prepareMessage,
							onChange: updateForm,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "form-heading",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "form-index",
											children: "Seu ponto de partida"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Conte sobre seu projeto" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Informações iniciais para o primeiro atendimento." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "field-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										htmlFor: "contact-name",
										children: ["Seu nome", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											ref: nameRef,
											id: "contact-name",
											required: true,
											maxLength: 100,
											autoComplete: "name",
											value: name,
											onChange: (event) => setName(event.target.value),
											placeholder: "Como podemos chamar você?"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										htmlFor: "contact-city",
										children: ["Município / UF", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "contact-city",
											required: true,
											maxLength: 100,
											autoComplete: "address-level2",
											value: city,
											onChange: (event) => setCity(event.target.value),
											placeholder: "Ex.: Novo Progresso / PA"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "contact-selections",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Financiamentos do seu projeto" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#solucoes",
										children: selectedItems.length ? "Editar escolhas" : "Escolher itens"
									})] }), selectedItems.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: selectedFinancingItems(selectedItems).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: kindNames[item.kind] }), item.label] }, item.id)) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Escolha os itens acima ou descreva seu objetivo abaixo." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "contact-need",
									children: [
										"Outro objetivo ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "optional",
											children: selectedItems.length ? "(opcional)" : "(ou selecione os itens acima)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "contact-need",
											required: selectedItems.length === 0,
											maxLength: 250,
											value: need,
											onChange: (event) => setNeed(event.target.value),
											placeholder: "Algo que você não encontrou nas opções"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "contact-detail",
									children: [
										"Conte um pouco mais ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "optional",
											children: "(opcional)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											id: "contact-detail",
											maxLength: 2e3,
											value: detail,
											onChange: (event) => setDetail(event.target.value),
											placeholder: "Ex.: quero ampliar meu rebanho e já tenho o orçamento dos animais.",
											rows: 3
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "button button-dark form-submit",
									type: "submit",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "message" }), "Preparar minha mensagem"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "form-privacy",
									children: "As informações não são enviadas nem armazenadas por este site."
								}),
								showMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "prepared-message",
									ref: messageRef,
									tabIndex: -1,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "prepared-heading",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "check" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Sua mensagem está pronta" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "prepared-instruction",
											children: "Copie ou compartilhe para iniciar a conversa."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											"aria-label": "Mensagem preparada para a AC Consultoria",
											readOnly: true,
											value: message,
											rows: 5
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "share-actions",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												className: "button button-dark",
												type: "button",
												onClick: copyMessage,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "copy" }), "Copiar mensagem"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												className: "button button-light",
												type: "button",
												onClick: shareMessage,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "share" }), "Compartilhar"]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "message-status",
									role: "status",
									"aria-live": "polite",
									children: messageStatus
								})
							]
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
			className: "site-footer",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-inner",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-brand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#inicio",
							"aria-label": "AC Consultoria — voltar ao início",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/ac-consultoria-logo.png",
								width: "724",
								height: "189",
								alt: "AC Consultoria",
								loading: "lazy"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Conhecimento técnico.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Compromisso com quem produz."
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Navegação do rodapé",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#servicos",
								children: "Serviços"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#linhas",
								children: "Linhas de crédito"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#duvidas",
								children: "Dúvidas frequentes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contato",
								children: "Atendimento"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-local",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "pin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Novo Progresso",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Pará, Brasil" })
						] })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-bottom",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AC Consultoria · Crédito rural e assessoria técnica" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#inicio",
					children: "Voltar ao início"
				})]
			})]
		})
	] });
}
//#endregion
export { Home as default };
